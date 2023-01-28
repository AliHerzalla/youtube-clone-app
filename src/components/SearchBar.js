import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { fontSize } from "@mui/system";

const SearchBar = () => (
  <Paper
    component={"form"}
    onSubmit={() => { }}
    sx={{ borderRadius: "20px", border: "1px solid #3e3e3e", paddingLeft: "2px", boxShadow: "none", marginRight: { sm: "5px" } }}
  >
    <input
      type="text"
      className="search-bar"
      value=""
      placeholder="Search..."
      onChange={() => { }}
      style={{ marginLeft: "10px"}}
    />
    <IconButton
      type="submit"
      sx={{ padding: "10px", color: "red" }}
    >
      <Search />
    </IconButton>
  </Paper>
);


export default SearchBar;