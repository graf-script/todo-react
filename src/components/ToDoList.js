import React, { Component } from "react";
import ProjectsPage from "./Todo";
export default class TodoList extends Component {
    state = {
        todos: []
    };
    addToDo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    };
    render() {
        return (
            <>
            <ProjectsPage onAdd={this.addToDo}></ProjectsPage>
            <div style={{ backgroundColor: "#f1f1f1", flexDirection:"column", display: "flex", justifyContent: "space-between", width: "50%", marginTop: "100px", marginLeft: "20px" }}>
                {this.state.todos.map(x => {
                        return (
                            <div style={{ justifyContent: "space-between", display: "flex" }} key={x.Id}>

                                <div>{x.Id}</div>
                                <div>{x.Title}</div>
                                <div >{x.Description}</div>
                                <div>
                                    <input type="checkbox"/>
                                </div>
                            </div>
                        );
                    })}
            </div>
            </>
        );
    }
}