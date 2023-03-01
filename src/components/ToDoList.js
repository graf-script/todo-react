import React, { Component } from "react";
import ProjectsPage from "./Todo";
export default class TodoList extends Component {

    state = {
        todos: [],
        showTodo: null
    };
    addToDo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    };
    handleTodoOnclick = (id, title, description) => {
        this.setState({
            showTodo: {id, title, description}
        })
    };
    render() {
        return (
            <>
            <ProjectsPage onAdd={this.addToDo}></ProjectsPage>
            <div style={{ backgroundColor: "#f1f1f1", flexDirection:"column", display: "flex", justifyContent: "space-between", width: "50%", marginTop: "10px", marginLeft: "20px" }}>
                {this.state.todos.map(x => {
                        return (
                            <div onClick={ ()=> this.handleTodoOnclick(x.Id, x.Title, x.Description)} style={{ textAlign:"center", marginTop:"5px", justifyContent: "space-around", display: "flex" }} key={x.Id}>
                                <div>{x.Id}</div>
                                <div>{x.Title}</div>
                                <div>{x.Description}</div>
                                <div>
                                    <input onClick={e => e.stopPropagation()} type="checkbox"/>
                                </div>
                            </div>
                        );
                    })}
            </div>
            </>
        );
    }
}