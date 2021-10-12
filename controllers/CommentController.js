const { Comment } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let comment_id = parseInt(req.params.comment_id)
    let newComment = await Comment.update(req.body, {
      where: { id: comment_id },
      returning: true
    })
    res.send(newComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: { id: req.params.comment_id }
    })
    res.send({ msg: 'Comment Deleted' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  CreateComment,
  UpdateComment,
  DeleteComment
}
