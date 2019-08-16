import React, {Component} from 'react';
import './SideBarNavigation.css';
import NotefulContext from '../../NotefulContext';
import {Link} from 'react-router-dom';

export default class SideBarNavigation extends Component {
    
    static contextType = NotefulContext;

    render(){

        const currentPath = this.props.rprops.location.pathname;
        const {folders} = this.context;
        const {history} = this.props.rprops;

        const folderHTML = folders.map((folder) => {
            return (
                <li key={folder.id}>
                    <Link to={`/folders/${folder.id}`}>
                        <div className='folder-link app-btn'>
                            {folder.name}
                        </div>
                    </Link>
                </li>
            );
        });

        return (
            <aside className='SideBarNavigation'>
                {(currentPath === '/' || currentPath.includes('/folders/'))
                    ? (<>
                            <h3>Folder List</h3>
                            <ul className='folder-list'>
                                {folderHTML}
                            </ul>
                        </>
                    )
                    : (
                        <button 
                            className='app-btn'
                            onClick={() => {history.goBack()}}
                        >
                            Go Back
                        </button>
                    )
                }
            </aside>
        );
    }
}

SideBarNavigation.defaultProps = {
    rprops: {}
}