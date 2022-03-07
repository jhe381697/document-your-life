/* eslint-disable react/jsx-key */
import React from 'react';
// import materail-ui;
import { Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';

// import du scss
import './avatarIcon.scss';

// L'avatar devra être crée au niveau de la page de profil 
// on le récupère ici sous forme de props

const AvatarIcon = () => {
  return (
    <div className="avatar">
      <Avatar  sx={{ width: 130, height: 130, bgcolor: grey[500] }}>JR</Avatar>  
    </div>
  );
};

export default AvatarIcon;