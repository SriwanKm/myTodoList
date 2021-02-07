import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Todos from "./Todos";


class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none',
            // backgroundColor: this.props.todo.completed ?
            //     '#0000ff' : '#ff0000'
        }
    }

    btnStyle = () => {
        return {
            // backgroundColor: "#ff0000",
            color: "#000",
            border: "none",
            padding: "5px 9.5px",
            borderRadius: "50%",
            cursor: "pointer",
            float: "right",
            backgroundColor: this.props.todo.completed ?
                '#0000ff' : '#ff0000'
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={() => this.props.markComplete(id)}/>
                    {title}
                    <button style={this.btnStyle()} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )

    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const btnStyle = {
//     backgroundColor: "#ff0000",
//     color: "#000",
//     border: "none",
//     padding: "5px 9.5px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     float: "right"
//
// }

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

TodoItem.propTypes = {
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default TodoItem;