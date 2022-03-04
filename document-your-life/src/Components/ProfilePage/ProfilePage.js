/* eslint-disable react/jsx-key */
import React from 'react';
import { GetProfile } from '../../RequestsAxios/LoginRequest';
import './profilePage.scss';


const ProfilePage = () => {
    async function handleGetProfile() {

        const response = await GetProfile(
        )
        console.log(response)
    }
    return (
        <div className='ProfilePage'>
            <button onClick={handleGetProfile}>asdfasdfasdf</button>
            <p>TEST</p>
        </div>
    );
};

ProfilePage.propTypes = {
};
ProfilePage.defaultProps = {
};
export default React.memo(ProfilePage)
