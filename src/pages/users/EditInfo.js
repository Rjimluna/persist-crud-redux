import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from './ducks'

export class EditInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.state.id,
            name: this.props.location.state.name,
            age: this.props.location.state.age,
            contact: this.props.location.state.contact,
            address: this.props.location.state.address
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.formHandler = this.formHandler.bind(this);
    }

    inputHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    formHandler(e) {
        e.preventDefault();
        const newState = this.props.fetchAccounts.map((users) => {
            if(users.id === this.props.location.state.id) {
                return this.state;
            }
            return users;
        })

        this.props.editUser(newState);
        this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={this.formHandler}>
                <input id="id" type="hidden" value={this.state.id} />
                <input id="name" type="text" placeholder="Name..." onChange={this.inputHandler} value={this.state.name} />
                <input id="age" type="number" placeholder="Age..." onChange={this.inputHandler} value={this.state.age} />
                <input id="contact" type="text" placeholder="Contact..." onChange={this.inputHandler} value={this.state.contact} />
                <input id="address" type="text" placeholder="Address..." onChange={this.inputHandler} value={this.state.address} />

                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    fetchAccounts: state.usersInformation.usersData
})

const mapDispatchToProps = {
    editUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo)
