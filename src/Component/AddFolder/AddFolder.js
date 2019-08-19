import React, {Component} from 'react';
import './AddFolder.css';
import NotefulContext from '../../NotefulContext';

export default class AddFolder extends Component {
    
    render(){
        return (
            <div className='AddFolder'>
                <form className='add-folder-form'>
                    <label htmlFor='folder-name'>Folder Name</label>
                    <div className='input-div'>
                        <input 
                            type='text' 
                            placeholder='Enter your folder name here' 
                            id='folder-name'
                            name='folder-name'
                            className='folder-name-textbox'
                            required/>
                    </div>
                    <div className='add-btn-div'>
                        <button className='app-btn'>Add Folder</button>
                    </div>
                </form>
            </div>
        );
    }
}