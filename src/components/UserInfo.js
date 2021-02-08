import React from 'react';
import PropTypes from 'prop-types'

function UserInfo(prop) {
  return (
    <>
      <h3>{prop.name}</h3>
    </>
  )
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,

}

export default UserInfo;