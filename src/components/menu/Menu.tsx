import { useQuery, useMutation } from '@apollo/client';
import { GET_MENU } from '@/graphql/operations/menu/queries';
import { Category, GetMenuQuery, MenuItem } from '@/graphql/generated';
import { useState } from 'react';
import CategoryForm from './category/CategoryForm';
import MenuItemForm from './menuItem/MenuItemForm';
import CategoryList from '@/components/menu/category/CategoryList';
import DeleteConfirmationModal from '@/components/modal/DeleteModal';

import {
  DELETE_CATEGORY,
  DELETE_MENU_ITEM,
} from '@/graphql/operations/menu/mutations';

export default function Menu() {
  const { data, loading, error } = useQuery<GetMenuQuery>(GET_MENU);
  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [{ query: GET_MENU }], //We use this to refresh the menu the data after a mutation, we can also work with cache here
  });

  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM, {
    refetchQueries: [{ query: GET_MENU }],
  });

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showMenuItemForm, setShowMenuItemForm] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(
    null,
  );

  // We use this to reuse the modal without creating two (category and menuItem)
  const [deleteTarget, setDeleteTarget] = useState<
    | { type: 'category'; data: Category }
    | { type: 'menuItem'; data: MenuItem }
    | null
  >(null);

  // CATEGORY MANAGEMENT //
  const handleAddCategory = () => {
    setSelectedCategory(null); //important, we need to clear the category to create a new on
    setShowCategoryForm(true);
  };
  const handleEditCategory = (category: Category) => {
    setSelectedCategory(category);
    setShowCategoryForm(true);
  };

  const handleDeleteCategory = (category: Category) => {
    setDeleteTarget({ type: 'category', data: category });
  };

  const handleDeleteMenuItem = (menuItem: MenuItem) => {
    setDeleteTarget({ type: 'menuItem', data: menuItem });
  };

  // MENU ITEM MANAGEMENT //
  const handleAddMenuItem = (category: Category) => {
    setSelectedCategory(category);
    setSelectedMenuItem(null); //important, we need to clear the menu item to create a new one
    setShowMenuItemForm(true);
  };

  const handleUpdateMenuItem = async (category: Category, item: MenuItem) => {
    setSelectedCategory(category);
    setSelectedMenuItem(item);
    setShowMenuItemForm(true);
  };

  // MODAL MANAGEMENT //
  const confirmDelete = async () => {
    if (deleteTarget) {
      try {
        if (deleteTarget.type === 'category') {
          await deleteCategory({
            variables: { id: deleteTarget.data.id },
          });
        } else if (deleteTarget.type === 'menuItem') {
          await deleteMenuItem({
            variables: { id: deleteTarget.data.id },
          });
        }
        setDeleteTarget(null);
      } catch (error) {
        console.error('Error al eliminar:', error);
      }
    }
  };

  const cancelDelete = () => {
    setDeleteTarget(null);
  };

  if (loading) return <p>Cargando menú...</p>;
  if (error) return <p>Error al cargar el menú.</p>;

  return (
    <div className="flex justify-center items-center pt-10 pb-10 bg-gray-50">
      <div
        className={`flex ${showCategoryForm || showMenuItemForm ? 'gap-8' : ''}`}
      >
        {/* Menu */}
        <div className="bg-white shadow-md rounded-lg p-8 w-96">
          <h1 className="text-2xl font-semibold text-center mb-8">
            Menú Restaurante
          </h1>
          <CategoryList
            categories={data?.menu.categories || []}
            handleEditCategory={handleEditCategory}
            handleAddMenuItem={handleAddMenuItem}
            handleDeleteCategory={handleDeleteCategory}
            handleDeleteMenuItem={handleDeleteMenuItem}
            handleUpdateMenuItem={handleUpdateMenuItem}
          />
          <button
            className="text-white bg-teal-500 hover:bg-teal-600 rounded px-4 py-2 mt-4"
            onClick={handleAddCategory}
          >
            Añadir Categoría
          </button>
        </div>

        {/* Forms */}
        {showCategoryForm && (
          <CategoryForm
            onSuccess={() => setShowCategoryForm(false)}
            initialData={selectedCategory}
          />
        )}
        {showMenuItemForm && selectedCategory && (
          <MenuItemForm
            onSuccess={() => setShowMenuItemForm(false)}
            initialData={selectedMenuItem}
            categoryId={selectedCategory.id}
          />
        )}
      </div>

      {/* Modal */}
      <DeleteConfirmationModal
        show={!!deleteTarget}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message={
          deleteTarget?.type === 'category'
            ? `¿Estás seguro de que deseas eliminar la categoría "${deleteTarget.data.name}", esto borrara tambien todos los productos de esta categoria?`
            : `¿Estás seguro de que deseas eliminar el producto "${deleteTarget?.data.description}"?`
        }
      />
    </div>
  );
}
