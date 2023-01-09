import { Box, MenuItem, MenuList, Paper } from '@mui/material';

// const style = {
//   parent: {
//     position: 'relative',
//   },
//   child: {
//     position: 'absolute',
//     top: 0,
//     right: 0,

//     transformOrigin: 'top left',
//     visibility: 'hidden',
//   },
// };

const Menu = ({ menuList }) => {
  const handleMouseEnter = (event) => {
    const el = event.currentTarget;

    const container = el.closest('.parent');

    const childrenContainer = container.querySelector('.child');

    childrenContainer.classList.add('display');
  };

  const handleMouseLeave = (event) => {
    const el = event.currentTarget;

    const container = el.closest('.parent');

    const childrenContainer = container.querySelector('.child');

    childrenContainer.classList.remove('display');
  };

  const handleMouseMove = (event) => {
    event.currentTarget.style.display = 'block';
    event.currentTarget.style.zIndex = '1000000';
    console.log('called');
  };

  return (
    <Paper sx={{ width: '100%' }}>
      {menuList.map((item, i) => {
        return (
          <Box key={i}>
            {item.hasChildren ? (
              <Box className="parent">
                <MenuItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  {item.name}
                </MenuItem>
                <MenuList className="child transform display-none">
                  <Menu menuList={item.items} />
                </MenuList>
              </Box>
            ) : (
              <MenuItem onMouseEnter={handleMouseMove}>{item.name}</MenuItem>
            )}
          </Box>
        );
      })}
    </Paper>
  );
};
export default Menu;
