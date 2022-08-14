import React from 'react'
import styled from 'styled-components';
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom, setChannelSeleted } from '../features/appSlice';
import { startLoadingChannels } from '../features/thunks';

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = async() => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      const newDoc = doc( collection( db, `rooms` ))
      await setDoc( newDoc, {channelName} );
      dispatch( startLoadingChannels() );
    }
  };

  const selectChannel = () => {
    // TODO: dispatch title
    if ( id ) {
      dispatch(enterRoom({
        roomId: id
      }))
      dispatch(setChannelSeleted(title));
    }
  };

  return (
    <SidebarOptionContainer
      onClick={ addChannelOption ? addChannel : selectChannel }
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ): (
        <SidebarOptionChannel>
          <h3># { title }</h3>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #450e36;
  }

  > h3 {
    font-weight: 500;
  }

  h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div`
  padding: 5px 10px 10px 15px;
  font-weight: 300;
`;