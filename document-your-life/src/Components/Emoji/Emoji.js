import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam,faSadTear, faSmileWink, faMehBlank } from '@fortawesome/free-solid-svg-icons';

import './emoji.scss';

const Emoji = () => {
  return (
    <>
      <FontAwesomeIcon icon={faLaughBeam} />
      <FontAwesomeIcon icon={faSadTear} />
      <FontAwesomeIcon icon={faSmileWink} />
      <FontAwesomeIcon icon={faMehBlank} />
    </>

  )
}

export default React.memo(Emoji);