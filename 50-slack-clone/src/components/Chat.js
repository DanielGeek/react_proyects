import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { startLoadingRoomDetails } from '../features/thunks';
import Message from './Message';

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const { roomDetails, channelSeleted } = useSelector( state => state.app)
  const dispatch = useDispatch();
  // TODO: load room/id

  useEffect(() => {

    dispatch(startLoadingRoomDetails(roomId));

  }, [roomId]);

  useEffect(() => {

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [roomId]);

  // TODO: load room/id/messages
  return (
    <ChatContainer>
    {channelSeleted && roomDetails && (
      <>
        <Header>
          <HeaderLeft>
            <h4><strong># {channelSeleted}</strong></h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>

          <HeaderRight>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {roomDetails?.docs?.map(doc => {
            const { message, timestamp, user, userImage } = doc.data();
            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
               />
            )
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>

        <ChatInput
          chatRef={chatRef}
          channelId={roomId}
        />
      </>
    )}

    </ChatContainer>
  )
}

export default Chat;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div`

`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
