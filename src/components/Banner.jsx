import { Box } from '@mui/material';

const Banner = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <img
        src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="banner"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
};
export default Banner;
