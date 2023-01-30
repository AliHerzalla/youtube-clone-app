import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail,marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {
          md: "320px",
          xs: "100%",
        },
        height: "100%",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link
        to={`/channel/${channelDetail?.id?.channelId}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: {
            md: "320px",
            xs: "100%",
          },
        }}
      >
        <CardContent
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              width: "180px",
              height: "180px",
              marginBottom: "20px",
              border: "1px solid #3e3e3e"
            }}
          />
          <Typography
            variant='h6'
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{
              width: "22px",
              marginLeft: "5px",
              alignItems: "center",
              justifyContent: "center",
            }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray',textAlign:"center" }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box >
  );
};

export default ChannelCard;