import React from "react";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";

const VideoGrid = ({ videos, onVideoSelect }) => {
  return (
    <Box>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
      ))}
    </Box>
  );
};

export default VideoGrid;
