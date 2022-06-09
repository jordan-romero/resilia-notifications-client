import React, { useState, useEffect } from 'react';
import { getNotifications } from '../../utils/notifications';
import { Button } from '../common/Button';
import Card from '../Card/Card';
import { Heading2, Text } from '../common/Typography';
import { Box } from '../common/Box'

const NotificationList = () => {

  useEffect(() => {
    getNotifications().then((data) => {
      setNotifications(data);
    });
  }, []);

  const [notifications, setNotifications] = useState([])

  return (
    <Box>
      <div>
        {notifications?.map((notification, index) => (
          <Card key={index}>
            <Heading2>{notification.title}</Heading2>
            <Text color="blue">{notification.preview}</Text>
          </Card>
        ))}
      </div>
    </Box>
  )
}

export default NotificationList

