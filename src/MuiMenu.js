import { Box, Container, Grid } from '@mui/material';
import Banner from './components/Banner';
import Menu from './components/Menu';

import navigation from './utils/menu';

function MuiMenu() {
  return (
    <Container>
      <Box sx={{ height: '40vh' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid item lg={2.5} container sx={{ height: '100%' }}>
            <Menu menuList={navigation} />
          </Grid>

          <Grid item lg={9.5} container sx={{ height: '100%' }}>
            <Banner />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default MuiMenu;
