import React from 'react';
import { Button } from '@mui/material';

export default function CustomButton({ 
  onClick,
  children,
  color = 'white',
  fontColor = 'black',
  border = '3px solid black',
  margin = '10px',
}) {
  return (
    <Button
      className="custom-button"
      onClick={onClick}
      sx={{
        background: color,
        color: fontColor,
        margin: margin,
        border: border,
      }}
    >
      {children}
    </Button>
  );
}

