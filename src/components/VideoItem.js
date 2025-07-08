import React from "react";
import { Paper, Typography } from "@mui/material";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        padding: "10px",
        mb: 2,
        borderRadius: "10px",
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.02)" },
      }}
      onClick={() => onVideoSelect(video)}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        style={{ width: "120px", height: "auto", marginRight: "15px", borderRadius: "8px" }}
      />
      <Typography variant="subtitle1" noWrap>
        <b>{video.snippet.title}</b>
      </Typography>
    </Paper>
  );
};

export default VideoItem;
