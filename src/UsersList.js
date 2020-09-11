import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UsersList extends React.Component {
    constructor() {
    super()
    this.state= {
        users: []
    }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response) => {
            //console.log(response.data)
            const users= response.data
            this.setState({
                users
            })
        })
    }

    render(){
        return (
            <div>
                <h1>Users list: {this.state.users.length}</h1>
                <ul>
                    {
                        this.state.users.map((user) => {
                            return <li key= {user.id}><Link to= {`/users/${user.id}`}> {user.name} </Link> </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UsersList