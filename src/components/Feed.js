import { Box, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';


import { fitchFromAPI } from '../utils/fitchFromAPI';
import { SideBar, Videos } from './';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fitchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(error));
  }, [selectedCategory]);

  return (
    <Stack
      // TODO this is probably an error here because (xs) property
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Box
        sx={{ height: { xs: "auto", md: "100vh" }, borderRight: "1px solid #3d3d3d", paddingX: { xs: "0px", md: "20px" } }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 Youtube
        </Typography>
      </Box>

      <Box
        padding={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2
        }}
      >
        <Typography
          variant='h4'
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span
            style={{ color: '#F31503' }}
          >Videos</span>
        </Typography>

        <Videos videos={videos} justifyContent={"start"}/>

      </Box>
    </Stack>
  );
};


export default Feed;