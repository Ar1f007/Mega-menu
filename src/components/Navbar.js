import { menuItems } from '../utils/menu';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, i) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={i} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
