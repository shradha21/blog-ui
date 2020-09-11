import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class PostShow extends React.Component {
    constructor() {
    super()
    this.state= {
        user: {},
        post: {},
        comments: []
    }
    }

    componentDidMount(){
        const id=  this.props.match.params.id
        //console.log(id)
        
        //to get the posts: id,title,body
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            const post= response.data
            this.setState({
                post
            })
        //to get the user id
        axios.get(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((response) => {
            //console.log(response.data)
            const user= response.data
            this.setState({
                user
                })   
        })
    }) 
        //to get all the comments
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => {
            //console.log(response.data)
            const comments= response.data
            this.setState({
                comments
            })
        })
    }


    render() {
        return (
            <div>  
                <h1>USER NAME: {this.state.user.name} </h1>
                <h1>TITLE: {this.state.post.title} </h1>
                <h2>BODY: {this.state.post.body}</h2>
                <hr/>
                    <h1>COMMENTS</h1>
                    <ul>
                        {
                            this.state.comments.map((comment) => {
                            return <li key= {comment.id}> {comment.body} </li>
                            })
                        }
                    </ul>
                <hr/>
                
                <Link to= {`/users/${this.state.user.id}`}>More posts of author: {this.state.user.name}</Link>   
            </div>
        )
    }
}

export default PostShow