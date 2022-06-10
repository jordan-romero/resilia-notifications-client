import React, { useState, useEffect } from 'react';
import { getNotifications } from '../../utils/notifications';
import { dateFormatter } from '../../utils/utils';
import Card from '../Card';
import { Heading3, Text } from '../common/Typography';
import { Box } from '../common/Box'

const NotificationList = () => {

  useEffect(() => {
    getNotifications().then((data) => {
      setNotifications(data);
    });
  }, []);

  const [notifications, setNotifications] = useState([])
  console.log(notifications, 'notifications')

  return (
    <Box>
      <div>
        {notifications?.map((notification, index) => (
          <Card key={index}>
            <Card.Header>
              <Heading3>{notification.title}</Heading3>
              <Text color="blue">From: {notification.sender_name}</Text>

            </Card.Header>
            <Card.Body>
              <Text flexBasis="50%">Preview: {notification.preview}</Text>
              <Text>{dateFormatter(notification.created_at)}</Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Box>
  )
}

export default NotificationList

