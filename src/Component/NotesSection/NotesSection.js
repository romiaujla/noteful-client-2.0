import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NotesSection.css';
import NotefulContext from '../../NotefulContext';
import Moment from 'react-moment';

export default class NotesSection extends Component {
    
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
            // return res.json();
        }).then(data => {
            this.context.deleteNote(noteId);
        }).catch(error => {
            console.log(error);
        })
    }

    render(){

        const {rprops} = this.props;
        const {notes} = this.context;
        const {folders} = this.context;
        let notesHeader = 'Empty Folder';
        const currentPath = rprops.location.pathname;

        let notesHTML = notes.map((note) => {
            // Display ALL Notes on '/' path
            if(currentPath === '/noteful-client-2.0/'){
                notesHeader = 'All Notes';
                return (
                    <li key={note.id}>
                        <div>
                            <h4><Link to={`/noteful-client-2.0/notes/${note.id}`}>{note.name}</Link></h4>
                            <p className='note-last-modified'>Date Modified: <Moment date={note.modified} format="MM/DD/YYYY" />
                            </p>
                        </div>
                        <div>
                            <button 
                                className='delete-btn app-btn'
                                onClick={() => {this.onDeleteNote(note.id)}}
                            >delete</button>
                        </div>
                    </li>
                );
            }else{ 
                // Display notes when folder is selected
                const folderId = parseInt(rprops.match.params.folderId, 10);
                if(note.folder_id === folderId){
                    if(folders.length !== 0){
                        notesHeader = folders.find((folder) => folder.id === folderId).name + ' Folder Notes';
                    }else{
                        notesHeader = 'No Notes';
                    }
                    return (
                        <li key={note.id}>
                            <div>
                                <h4><Link to={`/noteful-client-2.0/notes/${note.id}`}>{note.name}</Link></h4>
                                <p className='note-last-modified'>Date Modified: <Moment date={note.modified} format="MM/DD/YYYY" />
                                </p>
                            </div>
                            <div>
                                <button 
                                    className='delete-btn app-btn'
                                    onClick={() => {this.context.deleteNote(note.id)}}
                                >delete</button>
                            </div>
                        </li>
                    );
                }
                return '';
            }
        })
        

        return (
            <section className='NotesSection'>
                <h3>{notesHeader}</h3>
                <ul className='notes-list'>
                    {notesHTML}
                </ul>
            </section>
        )
    }
}

NotesSection.defaultProps = {
    rprops: {}
}