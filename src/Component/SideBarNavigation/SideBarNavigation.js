import React, {Component} from 'react';
import './SideBarNavigation.css';
import NotefulContext from '../../NotefulContext';
import {Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FolderNotesList from './FolderNotesList/FolderNotesList';

export default class SideBarNavigation extends Component {
    
    static contextType = NotefulContext;

    handleGoBack = () => {
        const {history} = this.props.rprops;
        const {notes} = this.context;
        if(this.props.rprops.match.params.hasOwnProperty('noteId'))
        {
            const noteId = parseInt(this.props.rprops.match.params.noteId, 10);
            if(noteId !== undefined){
                const note = notes.find((note) => note.id === noteId);
                history.push(`/folders/${note.folder_id}`);
            }
        }else{
            history.goBack();
        }
    }

    render(){

        const currentPath = this.props.rprops.location.pathname;
        const folderId = parseInt(this.props.rprops.match.params.folderId, 10);
        const {folders} = this.context;
        const folderHTML = folders.map((folder) => {
            return (
                <li 
                    key={folder.id}
                    className={(folderId === folder.id)? 'selected' : ''}>
                    <Link to={`/folders/${folder.id}`}>
                        <div className='folder-link app-btn'>
                            {folder.name}
                        </div>
                    </Link>
                </li>
            );
        });


        // Will return the folder
        return (
            <aside className='SideBarNavigation'>
                {(currentPath === '/' || currentPath.includes('/folders/'))
                    ? (
                        <nav className='folder-nav'>
                            <h3>Folder List</h3>
                            <ul className='folder-list'>
                                {folderHTML}
                            </ul>
                        </nav>
                    )
                    : (
                        <nav className='go-back-nav'>
                            <button 
                                className='app-btn'
                                onClick={() => {this.handleGoBack()}}
                            >
                                Go Back
                            </button>
                            <Route 
                                exact
                                path='/notes/:noteId'
                                render={(rprops) => <FolderNotesList rprops={rprops} />}
                            />
                        </nav>
                    )
                }
            </aside>
        );
    }
}

SideBarNavigation.defaultProps = {
    rprops: {}
}

SideBarNavigation.propTypes = {
    rprops: PropTypes.object.isRequired
}