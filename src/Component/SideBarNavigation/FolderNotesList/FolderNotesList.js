import React, {Component} from 'react';
import NotefulContext from '../../../NotefulContext';
import './FolderNotesList.css';
import {Link} from 'react-router-dom';

export default class FolderNotesList extends Component {

    static contextType = NotefulContext;

    render(){

        const {notes} = this.context;
        const {folders} = this.context;
        const {noteId} = this.props.rprops.match.params;
        const {history} = this.props.rprops;
        let folderId = '';
        let currentFolder = {};
        if(notes.length !== 0 && folders.length !== 0){
            folderId = notes.find((note) => note.id === noteId).folderId;
            currentFolder = folders.find((folder) => folder.id === folderId);
        }
        const notesList = notes.map((note) => {
            if(note.folderId === folderId){
                return (
                    <li 
                        key={note.id}
                        className={(note.id === noteId)? 'active' : ''}>
                        <Link to={`/notes/${note.id}`}>{note.name}</Link>
                    </li>
                )
            }
        })
        history.push(`/folders/${folderId}`);

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