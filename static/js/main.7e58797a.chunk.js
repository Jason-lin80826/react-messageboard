(this["webpackJsonpreact-messageboard"]=this["webpackJsonpreact-messageboard"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),s=n.n(c),r=(n(12),n(2)),o=n(3),i=n(5),m=n(4),l=n(0),u=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={username:"",content:""},e.componentWillMount=function(){e._loadUsername()},e._loadUsername=function(){var t=localStorage.getItem("username");t&&e.setState({username:t})},e.componentDidMount=function(){e.intputnode.focus()},e.handleUsernameChange=function(t){e.setState({username:t.target.value})},e.handleConentChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(){var t=e.state,n=t.username,a=t.content;e.props.onSubmit({username:n,content:a,createdTime:+new Date}),e.setState({content:""})},e.handleOnBlur=function(t){e._saveUsername(t.target.value)},e._saveUsername=function(e){localStorage.setItem("username",e)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"comment-input",children:[Object(l.jsxs)("div",{className:"comment-field",children:[Object(l.jsx)("span",{className:"comment-field-name",children:"\u7528\u6236\u540d\uff1a"}),Object(l.jsx)("div",{className:"comment-field-input",children:Object(l.jsx)("input",{value:this.state.username,onChange:this.handleUsernameChange,ref:function(t){e.intputnode=t},onBlur:this.handleOnBlur})})]}),Object(l.jsxs)("div",{className:"comment-field",children:[Object(l.jsx)("span",{className:"comment-field-name",children:"\u8a55\u8ad6\u5167\u5bb9\uff1a"}),Object(l.jsx)("div",{className:"comment-field-input",children:Object(l.jsx)("textarea",{value:this.state.content,onChange:this.handleConentChange})})]}),Object(l.jsx)("div",{className:"comment-field-button",children:Object(l.jsx)("button",{onClick:this.handleSubmit,children:"\u767c\u5e03"})})]})}}]),n}(a.Component),d=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={timeString:""},e._updateTimeString=function(){var t=e.props.comment.createdTime,n=(+new Date-t)/1e3;e.setState({timeString:n>60?"".concat(Math.round(n/60)," \u5206\u9418\u524d"):"".concat(Math.round(Math.max(n,1))," \u79d2\u524d")})},e.handleDelete=function(){e.props.delete(e.props.index)},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this._updateTimeString(),this._timer=setInterval(this._updateTimeString,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this._timer)}},{key:"render",value:function(){var e=this.props.comment,t=e.username,n=e.content;return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsxs)("div",{className:"comment-user",children:[Object(l.jsxs)("span",{children:[t," "]}),"\uff1a"]}),Object(l.jsx)("p",{children:n}),Object(l.jsx)("span",{className:"comment-createdtime",children:this.state.timeString}),Object(l.jsx)("span",{className:"comment-delete",onClick:this.handleDelete,children:"\u5220\u9664"})]})}}]),n}(a.Component),h=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{children:this.props.comments.map((function(t,n){return Object(l.jsx)(d,{comment:t,delete:e.props.delete},n)}))})}}]),n}(a.Component),j=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={comments:[]},e.componentWillMount=function(){e._loadComments()},e._loadComments=function(){var t=localStorage.getItem("comments");t&&(t=JSON.parse(t),e.setState({comments:t}))},e._saveComments=function(e){localStorage.setItem("comments",JSON.stringify(e))},e.handleSubmitComment=function(t){if(t){if(!t.username)return alert("\u8acb\u8f38\u5165\u7528\u6236\u540d");if(!t.content)return alert("\u8acb\u8f38\u5165\u5167\u5bb9");e.state.comments.push(t),e.setState({comments:e.state.comments}),e._saveComments(e.state.comments)}},e.delete=function(t){var n=e.state.comments;n.splice(t,1),e.setState({comments:n}),e._saveComments(n)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{onSubmit:this.handleSubmitComment}),Object(l.jsx)(h,{comments:this.state.comments,delete:this.delete})]})}}]),n}(a.Component);s.a.render(Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7e58797a.chunk.js.map