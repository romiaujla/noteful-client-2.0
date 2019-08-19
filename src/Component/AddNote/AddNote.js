import React, {Component} from 'react';
import './AddNote.css';
import NotefulContext from '../../NotefulContext';

export default class AddNote extends Component{

    static contextType = NotefulContext;

    render(){

        const {folders} = this.context;
        const folderList = folders.map((folder) => <option value={folder.id}>{folder.name}</option>);

        return(
            <div className='AddNote'>
                <form className='add-note-form'>
                    <label htmlFor='note-name'>
                        <span className='required-label'>*</span> Note Name
                    </label>
                    <div className='input-div'>
                        <input 
                            required
                            id='note-name'
                            name='note-name'
                            placeholder='Enter the name of your note'
                        />
                    </div>
                    <label htmlFor='note-content'>
                        Note Content
                    </label>
                    <div className='input-div'>
                        <textarea   
                            id='note-content'
                            name='note-content'
                            placeholder='Enter your Note Content Here...'
                        />
                    </div>
                    <label htmlFor='folder-select'>
                        Select Folder
                    </label>
                    <select 
                        id='folder-select'
                        name='folder-select'>
                        <option value='none'>Select One...</option>
                        {folderList}
                    </select>
                    <div className=''>
                        <button 
                            className='app-btn'
                            
                        >Add Note</button>
                    </div>
                </form>
            </div>
        );
    }
}