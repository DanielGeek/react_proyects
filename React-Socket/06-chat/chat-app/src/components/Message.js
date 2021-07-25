import React, { useContext } from 'react';
import { SendMessage } from './SendMessage';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { ChatContext } from './../context/chat/ChatContext';
import { AuthContext } from './../auth/AuthContext';

export const Message = () => {

  const { chatState } = useContext( ChatContext );
  const { auth } = useContext( AuthContext );

  return (
      <div className="mesgs">

          {/* <!-- start History  --> */}
          <div
              id="messages"
              className="msg_history"
          >

          {
            chatState.messages.map( msg => (
              ( msg.to === auth.uid )
                ? <IncomingMessage key={ msg._id } msg={ msg } />
                : <OutgoingMessage key={ msg._id } msg={ msg } />
            ))
          }

          </div>
          {/* <!-- End History --> */}

          <SendMessage />

      </div>
  )
}
