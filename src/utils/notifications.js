const URL = 'http://localhost:3001/notifications'

export const getNotifications = () => {
  return fetch(URL).then((response) => response.json());
};