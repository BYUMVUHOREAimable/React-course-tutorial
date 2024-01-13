import React from 'react'

export default function HelloYoutube({firstname, lastname, email}) {
  return (
    <div>
      <h1>First Name:{firstname} </h1>
      <h1>Last Name:{ lastname}</h1>
      <h1>Email:{email}</h1>
      <hr />
    </div>
  )
}
