/* eslint-disable react/jsx-key */
import React from 'react';
import Avatar from "react-avatar-edit";
import { useState } from "react";
import axios from "axios";
import './avatarBuild.scss';

const AvatarBuild = () => {

  // Création du useState qui défini l'état initial du composant
  const [preview, setPreview] = useState(null);

  // Fonction qui permet de revenir à l'état initial du composant
  function onClose () {
    setPreview(null)
  }

  // Mise en place d'une taille max en octets pour l'image de l'avatar
  function onPreventOversized (item) {
    item.target.files[0].size > 1000000 ? 
    alert("l'image est trop lourde") 
    : item.target.value = "";
  }

  // Prévisualisation de l'image croppée 
  function onCrop(pv) {
    setPreview(pv);
  }

  // Requête Axios pour l'envoi de l'icone dans la BDD
  axios.post("https://dyl-api.herokuapp.com/", {})
  .then(response => console.log(response)
  .catch(error => console.log(error)))


  return (
    <div className="container">
      <div className="avatar">
        <Avatar
        width={150}
        height={150}
        label="image"
          onClose={onClose}
          onPreventOversized={onPreventOversized}
          onCrop={onCrop}
          src={null}
        />
        <br/>
        {preview && (
          <>
            <img src={preview} alt="Preview" className="avatar-preview"/>
            <a href={preview} download="avatar" className="avatar-preview-text">
              Download
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default AvatarBuild;