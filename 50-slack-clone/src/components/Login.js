import React from 'react'
import styled from 'styled-components';

function Login() {
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
          alt=""
        />
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`

`;

const LoginInnerContainer = styled.div`
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
`;