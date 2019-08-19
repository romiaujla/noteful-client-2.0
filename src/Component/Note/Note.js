import React, {Component} from 'react';
import './Note.css';
import NotefulContext from '../../NotefulContext';
import PropTypes from 'prop-types';

export default class Note extends Component {
    
    static contextType = NotefulContext;

    render(){

        const {notes} = this.context;
        const {noteId} = this.props.rprops.match.params;
        const note = notes.find((note) => note.id === noteId);


        return (
            <section className='Note'>
                {(note !== undefined) && 
                    <>
                        <div className='note-header'>
                            <h3 className='note-title'>{note.name}</h3>
                            <button className='delete-btn app-btn'>Delete</button>
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