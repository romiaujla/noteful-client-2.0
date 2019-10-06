import React, {Component} from 'react';
import './AddFolder.css';
import NotefulContext from '../../NotefulContext';
import ValidationError from '../../ValidationError';

export default class AddFolder extends Component {

    static contextType = NotefulContext;
    
    constructor(props){
        super(props);
        this.folderNameInput = React.createRef();
    }

    // Every time load the Component in a default state
    componentDidMount(){
        this.context.setFolderPageError(false, ``);
        this.folderNameInput.current.value = ``;
    }

    
    // Validate the Folder Name as the value keeps changing
    validateFolderName = () => {

        // Trim the value, as the folder name cannot be empty spaces
        const folderName = this.folderNameInput.current.value.trim();

        if(folderName.length === 0){
            // Handle error for incorrect folder name
            this.context.setFolderPageError(true, `Folder name is required`);
        }else{
            // when a valid folder name is entered
            this.context.setFolderPageError(false, ``);
        }
    }

    // Handle the Submit of the form, also checks for errors
    handleAddFolderSumbit = (e) => {
        e.preventDefault();
        const folderName = this.folderNameInput.current.value;

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: folderName
            })
        }

        fetch(`${this.context.fetchURL}/folders`, options)
            .then((res) => {
                if(!res.ok){
                    throw new Error(`Folder could not be added`);
                }
                return res;
            })
            .then((data) => {
                this.folderNameInput.current.value = '';
                this.context.addFolder();
                this.context.setFolderPageError(false, ``);
                this.props.rprops.history.push('/noteful-client-2.0/');
            })
            .catch((err) => {
                console.log(err.message);
            })
        
        
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
                            required
                            aria-label='folder name'
                            aria-required='true'
                            aria-invalid={folderPageError.hasError}
                            />
                    </div>
                    <ValidationError message={folderPageError.errorMessage} />
                    <div className='add-btn-div'>
                        <button 
                            type='submit' 
                            className='app-btn'
                            disabled={folderPageError.hasError}>
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