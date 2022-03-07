/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getUserData from '../../RequestsAxios/userData';
import Spinner from '../../utils/Spinner/Spinner';
import './profilePage.scss';


const ProfilePage = () => {
    const location= useLocation()
    const [loading, setLoading] = useState(false);
    const [showProfile, setShaowProfile] = useState(false)
    const [userProfil, setuserProfil] = useState([])

    const handleGetProfile = async (e) => {
        e.preventDefault()
        setShaowProfile(!showProfile)
    }

    const loadUserProfile = async () => {
        setLoading(true);
        const response = await getUserData();
        if (response.status === 200) {
            console.log("loading")
            setuserProfil(response.data);
            setLoading(false);
        }
        else {
            console.log('error 404')
        }

    }

    useEffect(() => {
        if (location !== "/profil"){
            setuserProfil([])
            console.log('location usestate remove')
        }
        console.log('call from func', userProfil, "top")
        loadUserProfile();
    }, []);

    return (
        <>
            {loading? <Spinner/> : (
                <div className='ProfilePage'>
                    <button onClick={handleGetProfile}>asdfasdfasdf</button>
                    <div>
                        <p>{userProfil.email}</p>
                        <p>{userProfil.first_name}</p>
                        <p>{userProfil.last_name}</p>
                    </div>
                </div>
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
