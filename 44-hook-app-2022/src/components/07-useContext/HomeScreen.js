import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>HomeScreen<small>{ user?.name}</small></h1>
      <hr />

      <pre aria-label="pre" className="container">
        { JSON.stringify( user, null, 3 )}
      </pre>
    </div>
  )
}
