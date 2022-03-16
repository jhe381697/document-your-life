/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { memo, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import getUserData, { patchAvatar } from '../../RequestsAxios/userData';
import Notify from '../../utils/notifyFunc';
import defaultAvatar from './../logo/defaultAvatar.svg'
import './avatarIcon.scss'

const AvatarIcon = () => {
  const locationURL = useLocation()
// entre the default avatar
  const [file, setFile] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [isAvatar, setIsAvatar] = useState(false);
  const handleInputChange = (event) => {
    setFile(event.target.files[0])
  }

  async function submit() {
    if (file !== null) {
      if (Math.round((file.size / 1024)) < 5000) {
      const res = await patchAvatar("avatar", file)
      console.log(res)
      console.warn(file)
      getAvatarFromApi()
      setToggle(true)
      return
      } else {
        return Notify('Votre avatar est trop volumineux... <5Mb', 'error')
      }
    } else (
      handleToggle())
  }

  function handleToggle() {
    if (locationURL.pathname === "/profil") {
      setToggle(true)
    } else (
      setToggle(false)
    )
    return
  }
  async function getAvatarFromApi() {
    const res = await getUserData()
    if (res.status === 200) {
      setAvatar(res.data.image)
        if(avatar === null){
          return setIsAvatar(true)
        }else{
          return setIsAvatar(false)}
    } else{
      console.log(res.status)
    }
  }


  useEffect(() => {
    submit()
  }, [file, isAvatar])

  useEffect(() => {
    getAvatarFromApi()
  }, [file, isAvatar, ])

  return (
    <div className="avatarInput">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <label className="avatarInput-input">
        
        <Link to='/profil'>
    {isAvatar? 
       <> {!toggle && <img className='avatarInput-avatar avatarInput-default' src={defaultAvatar} />} </>
       : 
       <> {!toggle && <img className='avatarInput-avatar' src={avatar} />} </>}
      </Link>
        <div className='avatarInput-container'>

        {isAvatar? 
          <>{toggle && (<img onClick={handleToggle} className='avatarInput-avatar avatarInput-default' src={defaultAvatar} />)}</> 
          :
          <>{toggle && (<img onClick={handleToggle} className='avatarInput-avatar' src={avatar} />)}</>}

        </div>
        <input type="file" max-size="5000" name="upload_file" onChange={handleInputChange} />
      </label>
    </div>
  )

}

export default memo(AvatarIcon);