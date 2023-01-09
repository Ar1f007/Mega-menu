const Lists = ({ item }) => {
  if (item.hasChildren) {
    // return <Lists item={item} />;
    return null;
  } else {
    return <div>{item.name}</div>;
  }
};
export default Lists;

// import { MenuItem, MenuList, Paper } from '@mui/material';
//
//  <MenuList>
//   {menu.map((cat, idx) => {
//     return (
//       <MenuItem key={idx}>
//         <b>{cat.name}</b>
//       </MenuItem>
//     );
//   })}
// </MenuList>
