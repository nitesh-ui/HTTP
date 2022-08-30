import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor() {
        super()
        this.state = {
            users : [],
            errorMsg : ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response);
            this.setState({
                users : response.data
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({
                errorMsg : 'Error retrieving data'
            })
        })
    }

    render() {
        const {users, errorMsg} = this.state;
        return (
            <div>
                <h4>List of Users</h4>
                {users.length ? users.map(user => <div key={user.id}>{user.name}</div>) : null}
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}
export default PostList