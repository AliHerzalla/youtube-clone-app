import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI, fitchFromAPI } from '../utils/fitchFromAPI';

const ChannelDetail = () => {

  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fitchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetails(data?.items[0]));

    fitchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box
      sx={{
        minHeight: "95vh",
      }}
    >
      <Box>
        <div
          style={{
            height: '300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-110px" />
      </Box>

      <Box
      sx={{
        display: 'flex',
        padding: '20px',
        justifyContent:"space-around",
        alignItems: 'center',
      }}
      >
        <Videos videos={videos} justifyContent="center"/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;