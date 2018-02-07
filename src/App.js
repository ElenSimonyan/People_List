import React, { Component } from 'react';
import List from './name_list'
import Form from './form'
import './main.css'

const placeholder = document.createElement("li");
placeholder.className = "placeholder";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            list: []
        }
    }
    dragStart = (e) => {
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.dragged);
    };
    dragEnd = () =>{
        this.dragged.style.display = 'block';
        this.dragged.parentNode.removeChild(placeholder);

        // update state
        const data = this.state.list;
        const from = Number(this.dragged.dataset.id);
        let to = Number(this.over.dataset.id);
        if(from < to) to--;
        data.splice(to, 0, data.splice(from, 1)[0]);
        this.setState({list: data});
    };
    dragOver=(e)=> {
        e.preventDefault();
        this.dragged.style.display = "none";
        if(e.target.className === 'placeholder') return;
        this.over = e.target;
        e.target.parentNode.insertBefore(placeholder, e.target);
    };
    handleChange = (e) => {
        this.setState({name: e.target.value})
    };
    AddUser = () => {
        const {list,name} = this.state;
        const color = this.getRandomColor()
        list.push({ user: name, color});
        this.setState({name: '',list})
    };
    preventDefault = (e) =>{
        e.preventDefault()
    };
    getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    render() {
        return (
            <div className='main'>
                <h2>People list</h2>
                <Form handleChange={this.handleChange}
                      AddUser={this.AddUser}
                      preventDefault={this.preventDefault}
                      name={this.state.name}/>

                <List list={this.state.list}
                      dragStart={this.dragStart}
                      dragEnd={this.dragEnd}
                      dragOver={this.dragOver}/>
            </div>
        )
    }
}
export default App;