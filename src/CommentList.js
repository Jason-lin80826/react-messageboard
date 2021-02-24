import React, { Component } from 'react'
import Comment from './Comment'
class CommentList extends Component {
  render() {
    return (
      <div>
         {
           this.props.comments.map((comment,index)=>{
             return (
                 <Comment comment={comment} key={index} delete={this.props.delete} />
             )
           })
         }
      </div>
    )
  }
}

export default CommentList