import React, {Component} from 'react';
import NotefulContext from '../../../NotefulContext';
import './FolderNotesList.css';
import {Link} from 'react-router-dom';

export default class FolderNotesList extends Component {

    static contextType = NotefulContext;

    render(){

        const {notes} = this.context;
        const {folders} = this.context;
        const noteId = parseInt(this.props.rprops.match.params.noteId,10);
        let folderId = 0;
        let currentFolder = {};
        if(notes.length !== 0 && folders.length !== 0){
            folderId = notes.find((note) => note.id === noteId).folder_id;
            currentFolder = folders.find((folder) => folder.id === folderId, 10);
        }
        const notesList = notes.map((note) => {
            if(note.folder_id === folderId){
                return (
                    <Link 
                        to={`/noteful-client-2.0/notes/${note.id}`}
                        key={note.id}><li 
                        className={(note.id === noteId)? 'app-btn active' : 'app-btn'}>
                        {note.name}
                    </li></Link>
                )
            }else{
                return '';
            }
        })

        return (
            <nav className='FolderNotesListNav'>
                <h1>{(currentFolder.name !== undefined) ? currentFolder.name : ''}</h1>
                <ul className='notes-list'>
                    {notesList}
                </ul>
            </nav>
        );
    }

}