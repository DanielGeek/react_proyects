import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
  return (
    <SidebarContainer>
        <SidebarHeader>
          <SidebarInfo>
            <h2>PAPA FAM HQ</h2>
            <h3>
              <FiberManualRecordIcon />
              Sonny Sangha
            </h3>
          </SidebarInfo>
          <CreateIcon />
        </SidebarHeader>
    </SidebarContainer>

    )
}

export default Sidebar;

const SidebarContainer = styled.div`
color: white;
background-color: var(--slack-color);
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
`;

const SidebarInfo = styled.div``;