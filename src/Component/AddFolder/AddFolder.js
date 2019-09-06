import React, {Component} from 'react';
import './AddFolder.css';
import NotefulContext from '../../NotefulContext';
import ValidationError from '../../ValidationError';

export default class AddFolder extends Component {

    static contextType = NotefulContext;
    
    constructor(props){
        super(props);
        this.folderNameInput = React.createRef();
        this.submitButton = React.createRef();
    }

    // Validate the Folder Name as the value keeps changing
    validateFolderName = () => {

        // Trim the value, as the folder name cannot be empty spaces
        const folderName = this.folderNameInput.current.value.trim();

        if(folderName.length === 0){
            // Handle error for incorrect folder name
            this.context.setFolderPageError(true, `Folder name is required and cannot just be empty spaces`);
            this.submitButton.disabled = true;
        }else{
            // when a valid folder name is entered
            this.context.setFolderPageError(false, ``);
        }
    }

    // Handle the Submit of the form, also checks for errors
    handleAddFolderSumbit = (e) => {
        e.preventDefault();
        
        
        
    }

    render(){
        const {folderPageError} = this.context;

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
                            ref={this.folderNameInput}
                            onChange={() => {this.validateFolderName()}}
                            required/>
                    </div>
                    <ValidationError message={folderPageError.errorMessage} />
                    <div className='add-btn-div'>
                        <button 
                            type='submit' 
                            className='app-btn'
                            ref={this.submitButton}>
                            Add Folder
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

AddFolder.defaultProps = {
    rprops: {},
    error: true
}