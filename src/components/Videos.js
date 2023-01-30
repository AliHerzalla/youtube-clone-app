import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos,justifyContent }) => {
  // console.log(videos);
  return (

    <Stack
      direction="row"
      flexWrap="wrap"
      sx={{
        gap: "20px",
        justifyContent: justifyContent,
      }}
    >
      {
        videos.map((video, index) => (
          <Box key={index}
            sx={{
              width: {
                md: "320px",
                xs: "100%",
              }
            }}
          >
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        ))
      }
    </Stack>
  );
};

export default Videos;