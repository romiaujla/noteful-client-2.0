import React, {Component} from 'react';
import './AddFolder.css';
import NotefulContext from '../../NotefulContext';

export default class AddFolder extends Component {

    static defaultProps = {
        rprops: {},
        error: true
    }
    
    static contextType = NotefulContext;

    handleAddFolderSumbit = (e) => {
        e.preventDefault();
        const folderName = e.target.foldername.value;
        const error = this.context.addFolder(folderName);
        if(error){
            e.target.foldername.value = '';
        }
    }

    render(){
        return (
            <div className='AddFolder'>
                <form className='add-folder-form' onSubmit={(e)=> {this.handleAddFolderSumbit(e)}}>
                    <label htmlFor='foldername'>Folder Name</label>
                    <div className='input-div'>
                        <input 
                            type='text' 
                            placeholder='Enter your folder name here' 
                            id='foldername'
                            name='foldername'
                            className='foldername-textbox'
                            required/>
                    </div>
                    {this.props.error && 
                        <span className='error'>Folder Name is required</span>
                    }
                    <div className='add-btn-div'>
                        <button type='submit' className='app-btn'>Add Folder</button>
                    </div>
                </form>
            </div>
        );
    }
}