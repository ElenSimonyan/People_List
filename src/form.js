import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.preventDefault(e)}>
                <input type="text" value={this.props.name} onChange={(e) => this.props.handleChange(e)}/>
                <button onClick={(e) => this.props.AddUser(e)}>Add</button>
            </form>
        )}
}

export default Form;
