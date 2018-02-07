import React, { Component } from 'react'

class List extends Component {
    render() {
        return(
            <ul onDragOver={(e) => this.props.dragOver(e)}>
                {
                    this.props.list.map((item,i) => {
                        return <li key={i}
                                   data-id={i}
                                   style={{color: item.color,listStyle: 'none'}}
                                   draggable='true'
                                   onDragEnd={(e) => this.props.dragEnd(e)}
                                   onDragStart={(e) => this.props.dragStart(e)}>{item.user}</li>
                    })
                }
            </ul>
        )
    }
}

export default List