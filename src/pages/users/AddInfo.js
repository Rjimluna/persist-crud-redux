import React, { Component } from 'react'
import idGenerator from 'react-id-generator'
import { connect } from 'react-redux'
import { addUser } from './ducks'

export class AddInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: idGenerator(),
            name: '',
            age: '',
            contact: '',
            address: ''
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
        this.props.addUser(this.state)

        this.setState({
            name: '',
            age: '',
            contact: '',
            address: ''
        })
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

})

const mapDispatchToProps = {
    addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInfo)
