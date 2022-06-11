import moment from 'moment'

export const dateFormatter = (timestamp) => {
  const date = moment(timestamp).format('MMMM Do, h:mm a')

  return date
}