import React, { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';

import { SidebarChatItem } from './SidebarChatItem';
import { AuthContext } from './../auth/AuthContext';

export const Sidebar = () => {

  const { chatState } = useContext( ChatContext );
  const { auth } = useContext( AuthContext );

  const { uid } = auth;

  // auth => uid

  return (
    <div className="inbox_chat">

        {
          chatState.users
            .filter( user => user.uid !== uid )
            .map( (user) => (
            <SidebarChatItem
                key={user.uid}
                user={ user }
            />
          ))
        }

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  )
}
