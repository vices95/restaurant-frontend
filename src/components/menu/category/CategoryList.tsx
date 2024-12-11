import { Category, GetMenuQuery, MenuItem } from '@/graphql/generated';
import CategoryItem from '@/components/menu/category/CategoryItem';
/* eslint-disable no-unused-vars */
interface CategoryListProps {
  categories: GetMenuQuery['menu']['categories'];
  handleEditCategory: (category: Category) => void;
  handleAddMenuItem: (category: Category) => void;
  handleDeleteCategory: (category: Category) => void;
  handleUpdateMenuItem: (category: Category, item: MenuItem) => void;
  handleDeleteMenuItem: (item: MenuItem) => void;
}

const CategoryList = ({
  categories,
  handleEditCategory,
  handleAddMenuItem,
  handleDeleteCategory,
  handleDeleteMenuItem,
  handleUpdateMenuItem,
}: CategoryListProps) => (
  <div>
    {categories.map((category) => (
      <CategoryItem
        key={category.id}
        category={category}
        handleEditCategory={handleEditCategory}
        handleAddMenuItem={handleAddMenuItem}
        handleDeleteCategory={handleDeleteCategory}
        handleDeleteMenuItem={handleDeleteMenuItem}
        handleUpdateMenuItem={handleUpdateMenuItem}
      />
    ))}
  </div>
);

export default CategoryList;
