import Client from './api'

export const CreatePost = async data => {
  const res = await Client.post('/comment', data)
  return res
}

// async sendComment(data){
//   const res = await axios.post(
//     'http://localhost:3001/api/comment', data
//   )
//   return res
// },
