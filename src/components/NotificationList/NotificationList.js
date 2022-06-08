import React, { useState, useEffect } from 'react';
import { getNotifications } from '../../utils/notifications';

const NotificationList = () => {

  useEffect(() => {
    getNotifications().then((data) => {
      setNotifications(data);
    });
  }, []);

  const [notifications, setNotifications] = useState([])

  return (
    <div>
      <div>
        {notifications?.map((notification, index) => (
          <div key={index}>
            {notification.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationList

