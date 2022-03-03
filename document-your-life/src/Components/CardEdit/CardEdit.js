import React from 'react';
import { PropTypes } from 'prop-types';

import './cardEdit.scss';

const CardEdit = ({toggle}) => {
  
  return (
    <div className="CardEdit" onClick={toggle}>CardEdit</div>
  );
}

CardEdit.propTypes={toggle: PropTypes.func.isRequired};

export default React.memo(CardEdit);