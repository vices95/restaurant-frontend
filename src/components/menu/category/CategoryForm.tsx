import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { categorySchema } from '@/schemas/categorySchema'; // Esquema de validación
import { useMutation } from '@apollo/client';
import {
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
} from '@/graphql/operations/menu/mutations';
import { GET_MENU } from '@/graphql/operations/menu/queries';

interface CategoryFormProps {
  onSuccess: () => void;
  initialData?: { id: string; name: string } | null;
}

const CategoryForm = ({ onSuccess, initialData }: CategoryFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: initialData ? { name: initialData.name } : { name: '' },
  });
  const [createCategory] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [{ query: GET_MENU }], // Volver a ejecutar la consulta GET_MENU
  });
  const [updateCategory] = useMutation(UPDATE_CATEGORY, {
    refetchQueries: [{ query: GET_MENU }], // Volver a ejecutar la consulta GET_MENU
  });
  const onSubmit = async (data: { name: string }) => {
    if (initialData) {
      // Si existe `initialData`, estamos actualizando la categoría
      await updateCategory({
        variables: { id: initialData.id, name: data.name },
      });
    } else {
      // Si no existe `initialData`, estamos creando una nueva categoría
      await createCategory({
        variables: { name: data.name },
      });
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Nombre de la categoría"
          {...register('name')}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="justify-self-end">
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          {initialData ? 'Actualizar Categoría' : 'Crear Categoría'}
        </button>
        <button
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-3 px-2 rounded"
          type="button"
          onClick={() => onSuccess()}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
