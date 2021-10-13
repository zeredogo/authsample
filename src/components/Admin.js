import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export class Admin extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem('token')

        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
         this.state = {
             loggedIn
         }
    }
    render() {
        if(this.state.loggedIn === false) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h1>This is an Admin page Only Auth People can see this</h1>
                <Link to='/logout'>LogOut</Link>
            </div>
        )
    }
}

export default Admin
