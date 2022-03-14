/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import getUserData, { patchAvatar } from '../../RequestsAxios/userData';
import './avatarIcon.scss'

const AvatarIcon = () => {
  const locationURL = useLocation()

  const [file, setFile] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [avatar, setAvatar] = useState();
  // const [newAvatar, setNewAvatar] = useState();

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
    } else (console.log(res.status))
  }


  useEffect(() => {
    getAvatarFromApi()
    submit()
  }, [file])

  return (
    <div className="avatarInput">
          <img onClick={handleToggle} className='avatarInput-avatar' src={avatar} />
      <label className="avatarInput-input">
        <div className='avatarInput-container'>
          {toggle ? (<p type="submit" className="avatarInput-text" title='Modifier votre photo de profile' onClick={() => submit()}>
        <input type="file" max-size="5000" name="upload_file" onChange={handleInputChange} />
          </p>) : null}
        </div>
        <input type="file" max-size="5000" name="upload_file" onChange={handleInputChange} />
      </label>
    </div>

  )

}

export default memo(AvatarIcon);