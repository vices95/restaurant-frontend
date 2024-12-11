import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@apollo/client';
import {
  CREATE_MENU_ITEM,
  UPDATE_MENU_ITEM,
} from '@/graphql/operations/menu/mutations';
import { GET_MENU } from '@/graphql/operations/menu/queries';
import { menuItemSchema } from '@/schemas/menuItemSchema';

interface MenuItemFormProps {
  onSuccess: () => void;
  initialData?: { id: string; description: string; price: number } | null;
  categoryId: string;
}

const MenuItemForm = ({
  onSuccess,
  initialData, // we use this to check if is update or create
  categoryId,
}: MenuItemFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(menuItemSchema),
    defaultValues: initialData
      ? { description: initialData.description, price: initialData.price }
      : { description: '', price: 0 }, //price cant be null, so we set it to 0
  });

  const [createMenuItem] = useMutation(CREATE_MENU_ITEM, {
    refetchQueries: [{ query: GET_MENU }],
  });

  const [updateMenuItem] = useMutation(UPDATE_MENU_ITEM, {
    refetchQueries: [{ query: GET_MENU }],
  });

  const onSubmit = async (data: { description: string; price: number }) => {
    if (initialData) {
      await updateMenuItem({
        variables: {
          id: initialData.id,
          description: data.description,
          price: data.price,
          categoryId: categoryId,
        },
      });
    } else {
      await createMenuItem({
        variables: {
          description: data.description,
          price: data.price,
          categoryId,
        },
      });
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Descripción del producto
        </label>
        <input
          className="appearance-none bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
          type="text"
          placeholder="Ej. Pizza Margarita"
          {...register('description')}
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Precio del producto
        </label>
        <input
          className="appearance-none bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
          type="number" // in prisma price is an int so we cant use decimals we could use step=".01" to use decimals
          placeholder="Ej. 12"
          {...register('price', { valueAsNumber: true })}
        />
        {errors.price && (
          <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          {initialData ? 'Actualizar Producto' : 'Crear Producto'}
        </button>
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={onSuccess}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default MenuItemForm;
