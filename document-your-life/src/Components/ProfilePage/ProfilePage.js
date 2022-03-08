/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import getUserData from '../../RequestsAxios/userData';
import { Link } from 'react-router-dom';
import Spinner from '../../utils/Spinner/Spinner';
import './profilePage.scss';


const ProfilePage = () => {
    const initialState = {
        email: '',
        first_name: '',
        last_name: '',

    }
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(initialState);

    useEffect(() => {
        if (user === initialState){
        getUserData().then()
            .then(response => {
                console.log(response.data)
                setUser(response.data)
            })
            .then(setLoading(false))

            console.log(user)
            return 
        } else {
            console.log(user)

            setUser(initialState)
        }

    }, []);

    return (
        <>
            {loading ? <Spinner /> : (
                <>
                    <Link className='retourn' to="/dashboard/calendar">
                        retourn
                    </Link>
                    <div className='profilPage'>
                        <p className='profilPage-personal-avatar'>Avatar</p>
                        <ul className='profilPage-personal'>
                            <li className='profilPage-personal-credentials'>{user.email}</li>
                            <li className='profilPage-personal-credentials'>{user.first_name}</li>
                            <li className='profilPage-personal-credentials'>{user.last_name}</li>
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
export default React.memo(ProfilePage)
