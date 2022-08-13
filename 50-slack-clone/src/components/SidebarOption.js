import React from 'react'
import styled from 'styled-components';
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { db } from '../firebase';

function SidebarOption({ Icon, title, addChannelOption }) {

  const addChannel = async() => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      const newDoc = doc( collection( db, `rooms` ))
      await setDoc( newDoc, {channelName} );
    }
  };

  const selectChannel = () => {

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
          <span>#</span>
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

`;