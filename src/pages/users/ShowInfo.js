import React, { Component } from 'react'
import { connect } from 'react-redux'
import { delUser } from './ducks'

export class ShowInfo extends Component {

    deleteAccount(account) {
       const newUsers = this.props.fetchAccounts.filter((users) => {
            return account.id !== users.id;
       })
       this.props.delUser(newUsers);
    }

    editAccount(account) {
        this.props.history.push({
            pathname: '/edit',
            state: {
                id: account.id,
                name: account.name,
                age: account.age, 
                contact: account.contact,
                address: account.address
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>CONTACT</th>
                        <th>ADDRESS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.fetchAccounts.map((account) => {
                        return(
                            <tr id={account.id}>
                                <td>{account.name}</td>
                                <td>{account.age}</td>
                                <td>{account.contact}</td>
                                <td>{account.address}</td>
                                <td>
                                    <button onClick={() => this.editAccount(account)}>Edit</button>
                                    <button onClick={() => this.deleteAccount(account)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    fetchAccounts: state.usersInformation.usersData
})

const mapDispatchToProps = {
    delUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfo)
