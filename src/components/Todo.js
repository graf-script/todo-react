
import React, { Component } from "react";

export default class ProjectsPage extends Component {
    state = {
        Id: 1,
        Title: "",
        Description: ""
    };
    handleTitleChange = (event) => {
        this.setState({
            Title: event.target.value
        });
    };
    handleDescriptionChange = (event) => {
        this.setState({
            Description: event.target.value
        });
    };
    handleToDoSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            Id: this.state.Id,
            Title: this.state.Title,
            Description: this.state.Description
        });
        this.setState({
            Id: this.state.Id+1,
            Title: "",
            Description: ""
        });
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleToDoSubmit} style={{width: "50%", alignItems: "flex-end", display: "flex", justifyContent: "space-around",}}
                       action="">

                    <div className="title">
                        <p>Title:</p>
                        <input className="form-control" onChange={this.handleTitleChange} value={this.state.Title} name="title" type="text" placeholder="Enter title"/>
                    </div>

                    <div className="description">
                        <p>Description:</p>
                        <input type="text" onChange={this.handleDescriptionChange} value={this.state.Description} placeholder="Enter description"/>
                    </div>
                    <div className="button">
                        <button type="submit">Create</button>
                    </div>
                </form>
                <div style={{
                    backgroundColor: "#f1f1f1",
                    display: "flex",
                    justifyContent: "space-around",
                    width: "50%",
                    marginTop: "100px",
                    marginLeft: "20px"
                }} className="labelList">
                    <div className="id">ID</div>
                    <div className="title">TITLE</div>
                    <div className="description">DESCRIPTION</div>
                    <div className="status">STATUS</div>
                </div>
            </div>
        )
    }
}