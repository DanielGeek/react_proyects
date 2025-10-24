import React, { useContext } from 'react';
import { fetchWithToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';

import { ChatContext } from './../context/chat/ChatContext';

import { types } from './../types/types';

export const SidebarChatItem = ({ user }) => {

  const { chatState, dispatch } = useContext( ChatContext );
  const { activeChat } = chatState;

  const onClick = async() => {

    dispatch({
      type: types.activedChat,
      payload: user.uid
    });

    // Charged messages from chat
    const resp = await fetchWithToken(`messages/${ user.uid }`);

    dispatch({
      type: types.loadedMessages,
      payload: resp.messages
    });

    scrollToBottom('messages');
  }

  return (
    <div
        className={`chat_list ${ (user.uid === activeChat) && 'active_chat' }`}
        onClick={ onClick }
    >
      {/* active_chat */}
      <div className="chat_people">
          <div className="chat_img">
              <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
          </div>
          <div className="chat_ib">
              <h5>{ user.name }</h5>
              {
                ( user.online )
                  ? <span className="text-success">Online</span>
                  : <span className="text-danger">Offline</span>
              }
          </div>
      </div>
    </div>
  )
}
