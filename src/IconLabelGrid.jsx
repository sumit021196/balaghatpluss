import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';

const buttons = [
  { id: 1, name: 'Delete', icon: <DeleteIcon /> },
  { id: 2, name: 'Save', icon: <SaveIcon /> },
  { id: 3, name: 'Edit', icon: <EditIcon /> },
  { id: 4, name: 'Upload', icon: <CloudUploadIcon /> },
  { id: 5, name: 'Send', icon: <SendIcon /> },
  { id: 6, name: 'Home', icon: <HomeIcon /> },
];

export default function IconLabelGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {buttons.map((button) => (
          <Grid item xs={2} sm={4} md={4} key={button.id}>
            <Button
              variant="outlined"
              startIcon={button.icon}
              fullWidth
              sx={{ textTransform: 'none' }} // Optional: keeps text in normal case
            >
              {button.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
