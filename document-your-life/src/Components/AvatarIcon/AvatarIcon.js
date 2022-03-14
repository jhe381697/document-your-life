/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { memo, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import getUserData, { patchAvatar } from '../../RequestsAxios/userData';
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
      const res = await patchAvatar("avatar", file)
      console.log(res)
      console.warn(file)
      getAvatarFromApi()
      setToggle(true)
      return
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
      return setIsAvatar(false)
    }else{
      return setIsAvatar(true)}
    } else{
      console.log(res.status)
    }
  }


  useEffect(() => {
    getAvatarFromApi()
    submit()
  }, [file,isAvatar,avatar])

  return (
    <div className="avatarInput">
      <label className="avatarInput-input">
        
        <Link to='/profil'>
    {!isAvatar? 
       <> {!toggle && <img className='avatarInput-avatar' src={defaultAvatar} />} </>
       : 
       <> {!toggle && <img className='avatarInput-avatar' src={avatar} />} </>}
      </Link>
        <div className='avatarInput-container'>

        {!isAvatar? 
          <>{toggle && (<img onClick={handleToggle} className='avatarInput-avatar' src={defaultAvatar} />)}</> 
          :
          <>{toggle && (<img onClick={handleToggle} className='avatarInput-avatar' src={avatar} />)}</>}

        </div>
        <input type="file" max-size="5000" name="upload_file" onChange={handleInputChange} />
      </label>
    </div>
  )

}

export default memo(AvatarIcon);