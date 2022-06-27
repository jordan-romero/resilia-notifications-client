import React, { useState, useEffect } from 'react';
import { getNotifications, deleteNotification } from '../../utils/notifications';
import { dateFormatter } from '../../utils/utils';
import Card from '../../components/Card';
import { Heading3, Text } from '../../components/common/Typography';
import { Box } from '../../components/common/Box'
import { Button } from '../../components/common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../components/common/Input';
import Notification from '../../components/Card/Notification';


const NotificationList = () => {
  const [notifications, setNotifications] = useState([])
  const [activeCards, setActiveCards] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (localStorage.getItem('notifications')) {
      setNotifications(JSON.parse(localStorage.notifications))
    } else {
      getNotifications().then((data) => {
        setNotifications(data);
        localStorage.setItem('notifications', JSON.stringify(data))
      })
    }
  }, []);



  return (
    <Box>
      <Input placeholder="Search Notifications by Title" value={query} onChange={event => setQuery(event.target.value)} />
      {
        notifications.filter(notification => {
          if (query === '') {
            return notification;
          } else if (notification.title.toLowerCase().includes(query.toLowerCase())) {
            return notification;
          }
        }).map((notification, index) => (
          <Notification notification={notification} index={index} />
        ))}
    </Box>
  )
}

export default NotificationList

