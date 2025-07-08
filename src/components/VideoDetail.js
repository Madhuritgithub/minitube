import React from "react";
import { Paper, Typography } from "@mui/material";

const VideoDetail = ({ video }) => {
  if (!video) return <Typography>Loading...</Typography>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Paper elevation={6} sx={{ padding: 2 }}>
      <iframe
        width="100%"
        height="450px"
        src={videoSrc}
        title={video.snippet.title}
        frameBorder="0"
        allowFullScreen
      />
      <Typography variant="h6" mt={2}>
        <b>{video.snippet.title}</b>
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {video.snippet.channelTitle}
      </Typography>
      <Typography variant="body2" mt={1}>
        {video.snippet.description}
      </Typography>
    </Paper>
  );
};

export default VideoDetail;
