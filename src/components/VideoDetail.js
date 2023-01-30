import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Video } from './';
import { fitchFromAPI } from '../utils/fitchFromAPI';

const VideoDetail = () => {
  return (
    <Box
    minHeight="95vh"
    >
      <Stack
      sx={{
        direction:{
          xs:"column",
          md:"row",
        }
      }}
      >
        <Box>
          
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail