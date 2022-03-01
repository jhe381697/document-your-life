import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam,faSadTear, faSmileWink, faMehBlank } from '@fortawesome/free-solid-svg-icons';

import './emoji.scss';

const Emoji = () => {
  return (
    <>
      <FontAwesomeIcon icon={faLaughBeam} className="fas fa-laugh-beam"/>
      <FontAwesomeIcon icon={faSadTear} className="fas fa-sad-tear"/>
      <FontAwesomeIcon icon={faSmileWink} className="fas fa-smile-wink"/>
      <FontAwesomeIcon icon={faMehBlank} className="fas fa-meh-blank"/>
    </>

  )
}

export default React.memo(Emoji);