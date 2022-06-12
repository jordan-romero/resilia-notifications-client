import React, { useState, useEffect } from 'react';
import { getNotifications } from '../../utils/notifications';
import { dateFormatter } from '../../utils/utils';
import Card from '../Card';
import { Heading3, Text } from '../common/Typography';
import { Box } from '../common/Box'
import { Button } from '../common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Theme from '../../utils/theme';

const NotificationList = () => {

  useEffect(() => {
    getNotifications().then((data) => {
      setNotifications(data);
    });
  }, []);

  const [notifications, setNotifications] = useState([])
  const [activeCards, setActiveCards] = useState([])


  const onClickHandler = (id) => {

    if (activeCards.includes(id)) {
      console.log(activeCards)
      const filteredCards = activeCards.filter((filteredId) => filteredId !== id)
      setActiveCards(filteredCards)
    } else {
      setActiveCards([...activeCards, id])
    }
  }

  return (
    <Box>
      <div>
        {notifications?.map((notification, index) => (
          <Card key={index}>
            <Card.Header>
              <Heading3>{notification.title}</Heading3>
              <Box>
                <Text><strong>From:</strong> {notification.sender_name}</Text>
                <Text textAlign="right" fontSize="1.5rem">
                  {dateFormatter(notification.created_at)}
                </Text>
              </Box>
              <FontAwesomeIcon icon={faXmark} />
            </Card.Header>
            <Card.Body>
              <Text flexBasis="80%" fontSize="1.5rem">
                <strong>Subject:</strong> {notification.preview}
              </Text>
              <Button onClick={() => onClickHandler(notification.id)}>
                {activeCards.includes(notification.id) ? 'View More' : 'View Less'}
              </Button>
              <Text display={activeCards.includes(notification.id) ? "none" : "block"}
                padding="1.75rem"
                fontSize="1.75rem"
              >
                {notification.content}
              </Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Box>
  )
}

export default NotificationList

