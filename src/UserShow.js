import React from 'react'
import axios from 'axios'


class UserShow extends React.Component {
    constructor() {
    super()
    this.state= {
        user: {},
        posts: []
    }
    }

    componentDidMount() {
        const id=  this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            //console.log(response.data)
            const user= response.data
            this.setState({
                user
            })
        })
    
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            //console.log(response.data)
            const posts= response.data
             this.setState({
                 posts
             })
        })
    }

    render(){
       // console.log(this.props)
        return(
            <div>
                <h1> User Name: {this.state.user.name} </h1>

                <h1> POSTS WRITTEN BY USER</h1>
                <ul>
                    {
                        this.state.posts.map(function(post) {
                            return <li key= {post.id}> {post.title} </li>
                        })
                    }
                    
                </ul>
                  
            </div>
        )
    }
}



export default UserShow