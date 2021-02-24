import React, { Component } from 'react'

class CommentInput extends Component {
  state = {
    username: '',
    content: ''
  }
  componentWillMount = ()=> {
    this._loadUsername()
  }

  _loadUsername = () => {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }
  componentDidMount = () => {
    this.intputnode.focus()
  }
  handleUsernameChange =(event) => {
    this.setState({username: event.target.value})
  }
  handleConentChange = (event)=>{
    this.setState({content: event.target.value})
  }
  handleSubmit =()=>{
    const { username, content } = this.state
    this.props.onSubmit({username, content,createdTime: +new Date()})
    this.setState({ content: '' }) 
  }
  handleOnBlur = (event) =>{
    this._saveUsername(event.target.value)
  }
  _saveUsername =(username)=> {
    localStorage.setItem('username', username)
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用戶名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username}
                   onChange={this.handleUsernameChange}
                   ref={c=>{this.intputnode=c}}
                   onBlur={this.handleOnBlur}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>評論內容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleConentChange}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>
            發布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput