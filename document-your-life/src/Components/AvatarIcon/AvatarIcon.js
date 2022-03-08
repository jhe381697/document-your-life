/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { putTodayCard } from '../../RequestsAxios/CardsReq';
import getUserData from '../../RequestsAxios/userData';
import './avatarIcon.scss'

const AvatarIcon = () => {

  const [file, setFile] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [avatar, setAvatar] = useState('');

  const handleInputChange = (event) => {
    setFile(event.target.files[0])
  }

  async function submit() {
    if (file !== null) {
      const res = await putTodayCard("image", file)
      console.log(res)
      console.warn(file)
      setToggle(!toggle)
      return
    } else (
      handleToggle())
  }

  function handleToggle() {
    setToggle(!toggle)
  }
  async function getAvatarFromApi() {
    const res = await getUserData()
    if(res.status === 200 ){
    setAvatar(res.data.image)      
    }else(console.log(res.status))
  }
  useEffect(() => {
    getAvatarFromApi()
  }, [])

  return (
    <div className="avatarInput">
      {!toggle ? (
        <>
          <label className="avatarInput-inpute">
            <p> Ajouter une image</p>
            <input type="file" name="upload_file" onChange={handleInputChange} />
          </label>
          <button type="submit" className="avatarInput-btn" title='Modifier votre photo de profile' onClick={() => submit()}>+</button></>
      ) : <img onDoubleClick={handleToggle} className='avatarInput-avatar' src={avatar}/>}
    </div>

  )

}

export default AvatarIcon;