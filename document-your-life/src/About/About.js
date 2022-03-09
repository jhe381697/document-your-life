/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from 'react';
import DevCard from '../utils/DevCard/DevCard';
import './about.scss';

const About = () => {
  const devTeam = [
    {
      avatar: "",
      name: "William",
      github: "https://github.com/williamDev-End",
    },
    {
      avatar: "",
      name: "Gurvan",
      github: "https://github.com/LardeuxGurvan",
    },
    {
      avatar: "",
      name: "François",
      github: "https://github.com/FrancoisMoanaMichael",
    },
    {
      avatar: "",
      name: "Jérôme",
      github: "https://github.com/Jerrylejer",
    },
    {
      avatar: "",
      name: "Joséphine",
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
              {devTeam.map(({ name, github, avatar }) => {
                return (
                <DevCard key={name} avatar={avatar} name={name} github={github} />
                )
              })}
            </div>
        </div>
   );
};

export default React.memo(About);
