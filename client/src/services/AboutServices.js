import Client from './api'

export const CreatePost = async data => {
  const res = await Client.post('/comment', data)
  return res
}

export const DeletePost = async comment_id => {
  const res = await Client.delete(`/comment/${comment_id}`)
  return res.data
}

export const UpdatePost = async (comment_id, data) => {
  const res = await Client.put(`/comment/${comment_id}`, data)
  return res.data
}

export const GetPost = async () => {
  const res = await Client.get('/comment')
  return res.data
}
