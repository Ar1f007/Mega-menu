import Navbar from './components/Navbar';
import { Box, Container, Grid } from '@mui/material';

function App() {
  return (
    <>
            <Container disableGutters className="container">
            <Grid container>
                <Grid item md={2} sx={{ backgroundColor: '#fff' }}>
                    <Navbar />
                </Grid>
                <Grid item md={10}>
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fD
                        B8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="banner"
                        sx={{
                            width: '100%',
                            objectFit: 'cover',
                            maxHeight: '400px'
                        }}
                    />
                </Grid>
            </Grid>
        </Container>

    </>
  );
}

export default App;
