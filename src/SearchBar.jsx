import React, { useState } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import { Search, Mic } from "@mui/icons-material";
import { styled } from '@mui/material/styles';

const SearchPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  border: '1px solid #ddd',
  borderRadius: '25px',
  padding: '2px 4px',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: '0 1px 6px rgba(32,33,36,0.28)',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  '& .MuiInputBase-input': {
    padding: '8px 0',
    fontSize: '16px',
    '&::placeholder': {
      color: '#666',
      opacity: 1,
    },
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: '10px',
  '& svg': {
    fontSize: '20px',
  },
}));

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchTerm);
  };

  return (
    <SearchPaper component="form" onSubmit={handleSearch}>
      <StyledIconButton aria-label="search">
        <Search sx={{ color: '#666' }} />
      </StyledIconButton>
      <StyledInputBase
        placeholder="Search for services in Balaghat..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <StyledIconButton aria-label="voice search">
        <Mic sx={{ color: '#4285f4' }} />
      </StyledIconButton>
    </SearchPaper>
  );
};

export default SearchBar;
