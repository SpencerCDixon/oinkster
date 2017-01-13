
import React from 'react'
import { connect } from 'react-redux'
import Profile from './profile'

import Oink from './oink'


class UserProfileContainer extends React.Component {

  render(){

    let user = this.props.profile.summary.user;
    let avatar = '/images/profile-pic-pig.jpg';
    let profileBottom = <p>sah?</p>;

    return (
      <div id='user-profile'>
        < Profile
          avatar={avatar}
          username='lsimmons'
          profileBottom='sup?'
        />
      </div>
    )
  }

}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(UserProfileContainer)
