import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NotesSection.css';
import NotefulContext from '../../NotefulContext';

export default class NotesSection extends Component {
    
    static contextType = NotefulContext;

    render(){

        const {rprops} = this.props;
        const {notes} = this.context;
        const {folders} = this.context;
        let notesHeader = 'All Notes';
        const currentPath = rprops.location.pathname;

        let notesHTML = notes.map((note) => {
            // Display ALL Notes on '/' path
            if(currentPath === '/'){
                notesHeader = 'All Notes';
                return (
                    <li key={note.id}>
                        <h4><Link to={`/notes/${note.id}`}>{note.name}</Link></h4>
                    </li>
                );
            }else{ 
                // Display notes when folder is selected
                const {folderId} = rprops.match.params;
                if(note.folderId === folderId){
                    if(folders.length !== 0){
                        notesHeader = folders.find((folder) => folder.id === folderId).name + ' Folder Notes';
                    }
                    return (
                        <li key={note.id}>
                            <h4><Link to={`/notes/${note.id}`}>{note.name}</Link></h4>
                        </li>
                    );
                }
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