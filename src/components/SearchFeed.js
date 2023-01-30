import { Box, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fitchFromAPI } from '../utils/fitchFromAPI';
import { SideBar, Videos } from './';

const SearchFeed = () => {

  const {searchTerm} = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fitchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (
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
        Search result for: <span
          style={{ color: '#F31503' }}
        >{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} justifyContent={"center"} />

    </Box>
  );
};


export default SearchFeed;