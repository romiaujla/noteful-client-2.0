import React, {Component} from 'react';
import './Note.css';
import NotefulContext from '../../NotefulContext';
import PropTypes from 'prop-types';

export default class Note extends Component {
    
    static contextType = NotefulContext;

    onDeleteNote = (noteId) => {
        const {fetchURL} = this.context;
        fetch(`${fetchURL}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        }).then(res => {
            if(!res.ok){
                return res.json().then((err) => {
                    throw err
                })
            }
        }).then(data => {
            this.props.rprops.history.push('/noteful-client-2.0/');
            this.context.deleteNote(noteId);
        }).catch(error => {
            console.log(error);
        })
    }

    render(){

        const {notes} = this.context;
        const noteId = parseInt(this.props.rprops.match.params.noteId, 10);
        const note = notes.find((note) => note.id === noteId);

        return (
            <section className='Note'>
                {(note !== undefined) && 
                    <>
                        <div className='note-header'>
                            <h3 className='note-title'>{note.name}</h3>
                            <button 
                                className='delete-btn app-btn'
                                onClick={() => this.onDeleteNote(note.id)}
                            >
                                Delete
                            </button>
                        </div>
                        <div className='note-content'>
                            <p>{note.content}</p>
                        </div>
                    </>
                }
            </section>
        )
    }
}

Note.defaultProps = {
    rprops: {}
}

Note.propTypes = {
    rprops: PropTypes.object.isRequired
}