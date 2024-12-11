import { Category, MenuItem } from '@/graphql/generated';
import ItemMenu from './ItemMenu';
/* eslint-disable no-unused-vars */
interface MenuItemListProps {
  category: Category;
  handleDeleteMenuItem: (item: MenuItem) => void;
  handleUpdateMenuItem: (category: Category, menuItem: MenuItem) => void;
}

const MenuItemList = ({
  category,
  handleUpdateMenuItem,
  handleDeleteMenuItem,
}: MenuItemListProps) => (
  <ul className="mb-4">
    {category.items.map((item) => (
      <ItemMenu
        key={item.id}
        item={item}
        category={category} //we need the category where the item is placed, or the item will change his category
        handleDeleteMenuItem={handleDeleteMenuItem}
        handleUpdateMenuItem={handleUpdateMenuItem}
      />
    ))}
  </ul>
);

export default MenuItemList;
