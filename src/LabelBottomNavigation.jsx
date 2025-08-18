import React, { useState } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsCreditCard2Back } from 'react-icons/bs';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { CgMenuGridO } from 'react-icons/cg';

const LabelBottomNavigation = () => {
  const [value, setValue] = useState('home');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  const iconStyle = {
    fontSize: '1.5rem'
  };

  return (
    <Paper 
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{
          bgcolor: '#ffffff',
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            padding: '6px 0',
            color: '#757575',
            '&.Mui-focusVisible, &:focus-visible': {
              backgroundColor: 'transparent',
            },
            '&.Mui-selected': {
              color: '#1976d2',
              backgroundColor: 'transparent',
              '& .MuiBottomNavigationAction-label': {
                fontSize: '0.75rem',
                fontWeight: 600,
                lineHeight: '1',
                color: '#1976d2',
                transform: 'none',
                visibility: 'visible',
                opacity: 1,
              },
              '& svg': {
                color: '#1976d2',
              },
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.75rem',
              lineHeight: '1',
              transform: 'none',
              visibility: 'visible',
              opacity: 1,
              transition: 'none',
            },
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            '&.Mui-selected:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
            },
          },
          '& svg': {
            color: '#757575',
            marginBottom: '2px',
          },
          '& .MuiTouchRipple-root': {
            display: 'none',
          },
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<AiOutlineHome style={iconStyle} />}
        />
        <BottomNavigationAction
          label="Leads"
          value="leads"
          icon={<AiOutlineMessage style={iconStyle} />}
        />
        <BottomNavigationAction
          label="B2B"
          value="b2b"
          icon={<BiBuildingHouse style={iconStyle} />}
        />
        <BottomNavigationAction
          label="Pay"
          value="pay"
          icon={<BsCreditCard2Back style={iconStyle} />}
        />
        <BottomNavigationAction
          label="News"
          value="news"
          icon={<HiOutlineNewspaper style={iconStyle} />}
        />
        <BottomNavigationAction
          label="More"
          value="more"
          icon={<CgMenuGridO style={iconStyle} />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default LabelBottomNavigation;
