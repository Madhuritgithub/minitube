import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Container,
  CircularProgress,
} from "@mui/material";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoGrid from "./components/VideoGrid";
import youtube from "./api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSubmit("trending videos");
  }, []);

  const handleSubmit = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await youtube.get("/search", {
        params: {
          part: "snippet",
          maxResults: 12,
          key: "AIzaSyCHLrqz5EFasDeZu0yICzxQRAndIyGjGO4",
          q: searchTerm,
        },
      });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (err) {
      console.error("Error fetching videos", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* Top Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#cc0000" }}>
        <Toolbar>
          <img
            src="/logo19.png"
            alt="logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <Typography variant="h6" component="div">
            MiniTube 🎬
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>

          {loading ? (
            <Grid item xs={12} textAlign="center" mt={4}>
              <CircularProgress />
            </Grid>
          ) : (
            <>
              <Grid item xs={12} md={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={12} md={4}>
                <VideoGrid videos={videos} onVideoSelect={setSelectedVideo} />
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
