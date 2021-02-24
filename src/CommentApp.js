import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  state = {
     comments :[]
  }
  componentWillMount =()=> {
    this._loadComments()
  }
  _loadComments = () =>{
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  _saveComments = (comments)=>{
    localStorage.setItem('comments',JSON.stringify(comments))
  }
  handleSubmitComment = (comment) =>{
    if (!comment) return
    if (!comment.username) return alert('請輸入用戶名')
    if (!comment.content) return alert('請輸入內容')
    this.state.comments.push(comment)
    this.setState({comments:this.state.comments})
    // console.log(comment)
    this._saveComments(this.state.comments)
  }
  delete =(index)=>{
     const {comments} = this.state
     comments.splice(index, 1)
     this.setState({ comments })
     this._saveComments(comments)
  }
  render() {
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmitComment}/>
        <CommentList  comments={this.state.comments} delete={this.delete}/>
      </div>
    )
  }
}

export default CommentApp