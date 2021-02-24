import React, { Component } from 'react'

class Comment extends Component {
  state={
    timeString :''
  }
  componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(this._updateTimeString,5000)
  }
  _updateTimeString = ()=>{
    const {createdTime} = this.props.comment
    let duration = (+new Date()-createdTime)/1000
    this.setState({
      timeString:duration>60? `${Math.round(duration / 60)} 分鐘前`
      : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  handleDelete = ()=>{
    this.props.delete(this.props.index)
  }
  componentWillUnmount () {
    clearInterval(this._timer)
  }
  render () {
    const {username,content} = this.props.comment
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{username} </span>：
        </div>
        <p>{content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete' onClick={this.handleDelete}>
          删除
        </span>
      </div>
    )
  }
}

export default Comment