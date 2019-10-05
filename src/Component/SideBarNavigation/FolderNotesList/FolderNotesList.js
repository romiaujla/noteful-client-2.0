import React, {Component} from 'react';
import NotefulContext from '../../../NotefulContext';
import './FolderNotesList.css';
import {Link} from 'react-router-dom';

export default class FolderNotesList extends Component {

    static contextType = NotefulContext;

    render(){

        const {notes} = this.context;
        console.log(notes);
        const {folders} = this.context;
        const noteId = parseInt(this.props.rprops.match.params.noteId,10);
        let folderId = '';
        let currentFolder = {};
        if(notes.length !== 0 && folders.length !== 0){
            folderId = notes.find((note) => {
                if(note.id === noteId)
                {
                    console.log(note);
                    return note;
                }
            }).folder_id;
            currentFolder = folders.find((folder) => folder.id === folderId, 10);
        }
        const notesList = notes.map((note) => {
            if(note.folderId === folderId){
                return (
                    <Link 
                        to={`/notes/${note.id}`}
                        key={note.id}><li 
                        className={(note.id === noteId)? 'app-btn active' : 'app-btn'}>
                        {note.name}
                    </li></Link>
                )
            }else{
                return '';
            }
        })
        // history.push(`/folders/${folderId}`);

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