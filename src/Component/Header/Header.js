import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return (
            <header className='Header'>
                <div className='app-title'>
                    <h1 role='link'><Link to='/'>Noteful</Link></h1>
                </div>
                <div className='header-btns'>
                    <Link to='/add-folder/'
                        className='app-btn add-folder-btn'>
                            Add Folder +
                    </Link>
                    <Link to='/add-note/'
                        className='app-btn add-note-btn'>
                            Add Note +
                    </Link>
                </div>
            </header>
        );
    }
}

Header.defaultProps = {
    handleAddFolder: () => {},
    handleAddNote: () => {}
}