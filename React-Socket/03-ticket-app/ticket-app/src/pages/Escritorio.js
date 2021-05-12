import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { getUserStorage } from '../helpers/getUsuarioStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const Escritorio = () => {

  useHideMenu(false);
  const [objUser] = useState(getUserStorage());
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.replace('/ingresar');
  }

  const nextTicket = () => {
    console.log('nextTicket');
  }

  if(!objUser.username || !objUser.desktop) {
    return <Redirect to="/ingresar" />
  }

  return (
    <>
      <Row>
        <Col span={ 20 }>
            <Title level={ 2 }>{objUser.username}</Title>
            <Text>You are working in desktop number: </Text>
            <Text type="success"> {objUser.desktop} </Text>
        </Col>

        <Col span={ 4 } align="right">
            <Button
                shape="round"
                type="danger"
                onClick={ logout }
            >
                <CloseCircleOutlined />
                Logout
            </Button>
        </Col>

    </Row>

    <Divider />

    <Row>
        <Col>
            <Text>You are attending the ticket number: </Text>
            <Text
                style={{ fontSize: 30 }}
                type="danger"
            >
            55
            </Text>
        </Col>
    </Row>


    <Row>
        <Col offset={ 18 } span={ 6 } align="right">
            <Button
                onClick={ nextTicket }
                shape="round"
                type="primary"
            >
                <RightOutlined />
                Next
            </Button>
        </Col>
      </Row>
    </>
  )
}
