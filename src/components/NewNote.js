import React, {Component} from 'react';
import {connect} from 'react-redux';
class NewNote extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const data = {
            id: new Date(),
            title,
            //message,
            editing: false
        };
        this.props.dispatch({
            type: 'ADD_NOTE',
            data
        });
        this.getTitle.value = '';
        //this.getMessage.value = '';
    };
    render() {
        return (
            <div className="note-container">
                <h1 className="note_heading">TO-DO List Note</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className='align'>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           placeholder="Enter Note Title"/>    <button>Add</button>
                           </div>
                    <br/><br/>
                    {/* <textarea required rows="5" ref={(input) => this.getMessage = input} cols="28"
                              placeholder="Enter Note"/> */}
                    <br/><br/>
                
                </form>
            </div>
        );
    }
}
export default connect()(NewNote);