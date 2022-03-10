/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import getUserData from '../../RequestsAxios/userData';
import Spinner from '../../utils/Spinner/Spinner';
import AvatarIcon from '../AvatarIcon/AvatarIcon';
import './profilePage.scss';


const ProfilePage = () => {
    const iniState = {
        email: "Email",
        first_name: "Prénom",
        last_name: "Nom",
    }
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(iniState);

    async function loadUser() {
        const response = await getUserData()
        if (response.status === 200) {
            console.log(response)
            setUser(response.data)
            return setLoading(false)
        }
        return console.log('end of action')
    }
    useEffect(() => {
        loadUser()
    }, []);

    return (
        <>
            {loading ? <Spinner /> : (
                <>
                    <div className='profilPage'>
                        <AvatarIcon/>
                        <ul className='profilPage-personal'>
                            <li className='profilPage-personal-credentials'>{user.first_name}</li>
                            <li className='profilPage-personal-credentials'>{user.last_name}</li>
                            <li className='profilPage-personal-credentials'>{user.email}</li>
                        </ul>
                    </div>
                </>
            )
            }
        </>
    );
};

ProfilePage.propTypes = {
};
ProfilePage.defaultProps = {
};
export default ProfilePage
