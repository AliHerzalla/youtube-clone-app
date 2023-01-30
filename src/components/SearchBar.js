import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (element) => {
    element.preventDefault();
    if (searchTerm) {
      navigate(`search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={handelSubmit}
      sx={{ borderRadius: "20px", border: "1px solid #3e3e3e", paddingLeft: "2px", boxShadow: "none", marginRight: { sm: "5px" } }}
    >
      <input
        type="text"
        className="search-bar"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
      <IconButton
        type="submit"
        sx={{ padding: "10px", color: "red" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};


export default SearchBar;