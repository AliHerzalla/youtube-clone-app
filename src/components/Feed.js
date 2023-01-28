import { Box, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import SideBar from './SideBar';

const Feed = () => (
  <Stack
    // TODO this is probably an error here because (xs) property
    sx={{ flexDirection: { xs: "column", md: "row" } }}
  >
    <Box
      sx={{ height: { xs: "auto", md: "100vh" }, borderRight: "1px solid #3d3d3d", paddingX: { xs: "0px", md: "20px" } }}
    >
      <SideBar/>

      <Typography
        className='copyright'
        variant='body2'
        sx={{ mt: 1.5, color: '#fff' }}
      >
        Copyright 2023 Youtube
      </Typography>
    </Box>
  </Stack>
);


export default Feed;