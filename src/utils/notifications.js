const URL = 'http://localhost:3001/notifications/'

export const getNotifications = () => {
  return fetch(URL).then((response) => response.json());
};

export const deleteNotification = (id) => {
  return (
    fetch(URL + id, {
      method: 'DELETE'
    }).then(() => {
      console.log('removed')
    }).catch(err => {
      console.log(err)
    })
  )
}