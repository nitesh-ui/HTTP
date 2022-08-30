import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor() {
        super()
        this.state = {
            postId : '',
            name : '',
            email : '',
            body : ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        axios.post('https://jsonplaceholder.typicode.com/comments', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {postId, name, email, body} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" value={postId} name="postId" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" value={name} name="name" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" value={email} name="email" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <textarea type="text" value={body} name="body" onChange={this.changeHandler}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm