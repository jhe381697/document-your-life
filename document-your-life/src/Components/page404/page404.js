/* eslint-disable react/jsx-key */
import React from 'react';
import './page404.scss';
import { Link } from 'react-router-dom';

const Page404 = () => {   
   return (
       <div className='page404'>
            <h1 className='page404-title'>404</h1>
            <Link className='page404-redirect' to='/'>Cliquez ici pour être redirigé.</Link>
        </div>
   );
};
export default React.memo(Page404);
