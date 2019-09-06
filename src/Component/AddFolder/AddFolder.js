import React, {Component} from 'react';
import './AddFolder.css';
import NotefulContext from '../../NotefulContext';

export default class AddFolder extends Component {

    static contextType = NotefulContext;
    
    constructor(props){
        super(props);
        this.folderNameInput = React.createRef();
    }

    // Handle the Submit of the form, also checks for errors
    handleAddFolderSumbit = (e) => {
        e.preventDefault();
        
        // Trim the value, as the folder name cannot be empty spaces
        const folderName = this.folderNameInput.current.value.trim();

        if(folderName.length === 0){
            // Handle error for incorrect folder name
            this.context.folderError(true);
            this.context.errorMessage(`Folder Name is required`);

        }else{
            // when a valid folder name is entered
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
                            ref={this.folderNameInput}
                            required/>
                    </div>
                    
                    <div className='add-btn-div'>
                        <button type='submit' className='app-btn'>Add Folder</button>
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