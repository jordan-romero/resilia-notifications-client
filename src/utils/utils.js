import moment from 'moment'

export const dateFormatter = (timestamp) => {
  const date = moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')

  return date
}