/* eslint-disable react/jsx-key */
import React from 'react';

import CardEdit from '../CardEdit/CardEdit';

import './card.scss';


const Card = () => {

    return (
        <>
        <div className="card">
          <h2 className="card-date">Aujourdhui</h2>
          <div className="card-mood">
            <h3 className="card-mood-title">My mood</h3> 
            <div className="card-mood-infos">
              <p className="card-mood-infos-label">Label</p>
            </div>
          </div>
          <div className="card-resume">
            <h3 className="card-resume-title">My day</h3>
            <div className="card-resume-infos">
            {/* Faire un .map pour appeler tous les médiums sélectionnés par l'utilisateur */}
              <div className="card-resume-medium">Medium</div>
            </div>
          </div>
          <CardEdit />
        </div>
        </>
    );
};

export default React.memo(Card);