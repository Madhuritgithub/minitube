import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const VideoCard = ({ video, onVideoSelect }) => {
  return (
    <Card
      sx={{ display: "flex", mb: 2, cursor: "pointer", borderRadius: 2 }}
      onClick={() => onVideoSelect(video)}
    >
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" noWrap>
          {video.snippet.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" noWrap>
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="caption" color="gray">
          1.2M views • 3 days ago
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
