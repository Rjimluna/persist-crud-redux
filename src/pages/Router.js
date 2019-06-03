import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import ShowUsers from './users/ShowInfo'
import AddUsers from './users/AddInfo'
import UpdateUsers from './users/EditInfo'

import './Style.css'

export class Router extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Show Users</Link></li>
                    <li><Link to="/add">Add Users</Link></li>
                </ul>
                <Route path="/" component={ShowUsers} exact />
                <Route path="/add" component={AddUsers} exact />
                <Route path="/edit" component={UpdateUsers} exact />
            </div>
        )
    }
}

export default connect()(Router)
