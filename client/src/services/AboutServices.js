import Client from './api'

export const CreatePost = async data => {
  const res = await Client.post('/comment', data)
  return res
}

export const DeletePost = async comment_id => {
  const res = await Client.delete(`/comment/${comment_id}`)
  return res.data
}

// async sendComment(data){
//   const res = await axios.post(
//     'http://localhost:3001/api/comment', data
//   )
//   return res
// },
