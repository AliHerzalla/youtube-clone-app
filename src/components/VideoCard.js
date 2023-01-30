import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id:{videoId}, snippet: { channelId, channelTitle, description, liveBroadcastContent, publishTime, publishedAt, title, thumbnails } } }) => {
    return (
        <Card
            sx={{
                borderRadius: "15px",
                backgroundColor: "#1e1e1e",
                width: {
                    md: "320px",
                    xs: "100%",
                },
            }}
        >
            <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={(thumbnails?.high?.url) ? thumbnails?.high?.url : ""}
                    alt={title}
                    sx={{
                        height: "180px",
                        objectFit: "contain",
                        width: {
                            md: "100%",
                            xs: "100%",
                        }
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    height: "106px",
                    backgroundColor: "#1e1e1e",
                    overflow: "hidden",
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    width: "100%"
                }}
            >
                <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
                    <Typography
                        variant='subtitle1'
                        sx={{
                            color: "#FFF",
                            fontWeight: "bold",
                            width: "100%",
                        }}
                    >
                        {title.length > 60 ? title.slice(0, 60) + "..." : title}
                    </Typography>
                </Link>

                <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}
                    sx={{
                        display: "flex",
                        width: "100%",
                    }}
                >
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: "gray",
                            fontWeight: "bold",
                            width: "100%",
                            display: "flex",
                            marginTop: "10px",
                            alignItems: "center"
                        }}
                    >
                        <CardMedia
                            image={thumbnails?.high?.url}
                            alt={title}
                            sx={{
                                borderRadius: "50%",
                                width: "30px",
                                height: "30px",
                                marginRight: "10px",
                                objectFit:"contain"
                            }}
                        >
                        </CardMedia>

                        {(channelTitle.length > 60 ? channelTitle.slice(0, 60) + "..." : channelTitle) || demoChannelTitle}

                        <CheckCircle sx={{
                            width: "22px",
                            marginLeft: "5px",
                            alignItems: "center",
                            justifyContent: "center",
                        }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;