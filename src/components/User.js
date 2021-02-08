import React from 'react';
import UserInfo from './UserInfo';
import UserBio from './UserBio';

const userProfile = [
  {
    name:'Jeff',
    bio : 'I like boats!'
  }
];

function User() {
  return (
    <>
    <hr />
    {userProfile.map((userInfo, index) =>
      <UserInfo
        name={userInfo.name}
        key={index}
        />
    )}
    {userProfile.map((userBio, index) => 
        <UserBio
          bio={userBio.bio}
          key={index}
          />
      )}
    </>
  );
}

export default User;