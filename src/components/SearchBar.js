import React from "react";
import { Paper, TextField } from "@mui/material";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <Paper
        elevation={6}
        sx={{
          padding: "10px 20px",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
          <TextField
            fullWidth
            label="Search for videos..."
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.searchTerm}
            InputProps={{
              sx: {
                height: "50px",
                borderRadius: "50px",
                fontSize: "16px",
              },
            }}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
