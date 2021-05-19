import React, { useContext, useEffect, useState } from 'react';

import {Col, Row, Typography, List, Card, Tag, Divider} from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';
import { getLasts } from '../helpers/getLasts';

const {Title, Text} = Typography;

export const Cola = () => {

  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {

    socket.on('ticket-assignee', (assigneeds) => {
      setTickets(assigneeds);
    });

    return () => {
      socket.off('ticket-assignee');
    }
  }, [socket])

  useEffect(() => {
    getLasts().then( setTickets );
  }, []);

  return (
    <>
      <Title level={1}>Attending the client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0,3)}
            renderItem={item => (
              <List.Item>
                  <Card
                    style={{width: 300, marginTop: 16}}
                    actions={[
                      <Tag color="volcano">{item.agent}</Tag>,
                      <Tag color="magenta">Desktop: {item.desktop}</Tag>
                    ]}
                  >
                    <Title>No .{item.number}</Title>
                  </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
            <Divider>Historial</Divider>
            <List
              dataSource={tickets.slice(0)}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={`Ticket No. ${item.number}`}
                    description={
                      <>
                        <Text type="secondary">on Desktop: </Text>
                        <Tag color="magenta">{item.number}</Tag>
                        <Text type="secondary"> Agent: </Text>
                        <Tag color="volcano">{item.agent}</Tag>
                      </>
                    }
                  >

                  </List.Item.Meta>
                </List.Item>
              )}
            >

            </List>
        </Col>
      </Row>
    </>
  )
}
