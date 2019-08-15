import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render(){
        return (
            <header className='Header'>
                <div className='app-title'>
                    <h1>Noteful</h1>
                </div>
                <div className='header-btns'>
                    <button 
                    className='app-btn add-folder-btn'>
                    Add Folder +
                    </button>
                    <button 
                    className='app-btn add-note-btn'>
                    Add Note +
                    </button>
                </div>
            </header>
        );
    }
}