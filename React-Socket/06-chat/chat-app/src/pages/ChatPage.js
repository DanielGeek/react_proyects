import React from 'react';
import { InboxPeople } from '../components/InboxPeople';
import { Message } from '../components/Message';
import { ChatSelect } from '../components/ChatSelect';

import '../css/chat.css';

export const ChatPage = () => {
    return (
        <div className="messaging">
            <div className="inbox_msg">

                <InboxPeople />

                {
                    (true)
                        ? <Message />
                        : <ChatSelect />
                }

            </div>


        </div>
    )
}
