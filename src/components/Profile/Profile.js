import './Profile.css'
import myPhoto from '../../me460px.jpg';

function Profile(props) {

  return (
    <div className="profile">
      <img className="profile__image" alt="аватар пользователя" src={myPhoto}></img>
    </div>
  )
}

export default Profile;