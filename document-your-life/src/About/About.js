/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from 'react';
import DevCard from '../utils/DevCard/DevCard';
import './about.scss';

const About = () => {
  const devTeam = [
    {
      avatar: "https://avatars.githubusercontent.com/u/90550668?v=4",
      name: "William",
      role: "Product Owner & Back dev",
      github: "https://github.com/williamDev-End",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/90602548?v=4",
      name: "Gurvan",
      role: "Lead developper back",
      github: "https://github.com/LardeuxGurvan",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/91324853?v=4",
      name: "François",
      role: "Lead developper front",
      github: "https://github.com/FrancoisMoanaMichael",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/81814979?v=4",
      name: "Jérôme",
      role: "Git master & front dev",
      github: "https://github.com/Jerrylejer",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/83350003?v=4",
      name: "Joséphine",
      role: "Scrum master & front dev",
      github: "https://github.com/jhe381697",
    },
  ]
   return (
       <div className='about'>
            <h2>Á propos</h2>
            <div className='about-app'>
              <p>
                  DYL pour Document Your Life, est une aplication qui vous accompagne
                  dans la documentation de votre quotidien de manière simplifiée.
                  En illustrant votre journée à travers des sons, des vidéos, des images, du texte mais également
                  à travers l'expression de votre humeur vous pouvez vous recentrer sur l'importance du quotidien.
              </p>
              <p>
                  DYL est un projet réalisé par William, Gurvan, François, Jérôme et Joséphine dans le cadre de la fin de formation de développeur web de l'école O'clock.
              </p>
            </div>
            <div className='about-team'>
              {devTeam.map(({ name, role, github, avatar }) => {
                return (
                <DevCard key={name} avatar={avatar} name={name} role={role} github={github} />
                )
              })}
            </div>
        </div>
   );
};

export default React.memo(About);
