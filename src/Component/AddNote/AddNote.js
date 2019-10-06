import React, { Component } from 'react';
import './AddNote.css';
import NotefulContext from '../../NotefulContext';
import ValidationError from '../../ValidationError';

export default class AddNote extends Component {

    static contextType = NotefulContext;

    constructor(props) {
        super(props);
        this.nameInputBox = React.createRef();
        this.content = React.createRef();
        this.selectedFolder = React.createRef();
    }

    // load component with the default state, 
    // without showing prveious errors
    componentDidMount(){
        this.nameInputBox.current.value = ``;
        this.selectedFolder.current.value = `none`;
        this.content.current.value = ``;
        this.context.setNotePageError(false,``,``);
    }

    validateInput = () => {
        const { setNotePageError } = this.context;
        const noteName = this.nameInputBox.current.value.trim();
        const selectedFolder = this.selectedFolder.current.value;
        const notePageError = {
            hasError: false,
            nameErrorMessage: ``,
            fodlerSelectErrorMessage: ``,    
        }
        if(noteName.length === 0){
            notePageError.hasError = true;
            notePageError.nameErrorMessage = `Name is required`;
        }
        if(selectedFolder === 'none'){
            notePageError.hasError = true;
            notePageError.fodlerSelectErrorMessage = `Select the folder to save the note in.`
        }
        setNotePageError(notePageError);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.validateInput();
        if(!this.context.notePageError.hasError){
            const noteName = this.nameInputBox.current.value.trim();
            const content = this.content.current.value;
            const selectedFolder = parseInt(this.selectedFolder.current.value, 10);
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: noteName,
                    folder_id: selectedFolder,
                    content: content
                })
            }

            fetch(`${this.context.fetchURL}/notes`, options)
                .then((res) => {
                    if(!res.ok){
                        throw new Error(`Could not add the note at this time`);
                    }
                    return res;
                })
                .then((data) => {
                    this.context.addNote();
                    this.props.rprops.history.push('/noteful-client-2.0/');
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    render() {

        const { folders, notePageError } = this.context;
        const folderList = folders.map(
            (folder) => {
                return (
                    <option
                        value={folder.id}
                        key={folder.id}
                    >
                        {folder.name}
                    </option>)
            });

        return (
            <div className='AddNote'>
                <form className='add-note-form' onSubmit={(e) => {this.handleSubmit(e)}}>
                    <label htmlFor='note-name'>
                        <span className='required-label'>*</span> Note Name
                    </label>
                    <div className='input-div'>
                        <input
                            required
                            id='note-name'
                            name='note-name'
                            className='note-name'
                            placeholder='Enter the name of your note'
                            ref={this.nameInputBox}
                            onChange={() => {this.validateInput()}}
                        />
                    </div>
                    <ValidationError message={notePageError.nameErrorMessage} />
                    <label htmlFor='note-content' className='text-box-header'>
                        Note Content
                    </label>
                    <div className='input-div'>
                        <textarea
                            id='note-content'
                            name='note-content'
                            placeholder='Enter your Note Content Here...'
                            ref={this.content}
                        />
                    </div>
                    <label htmlFor='folder-select'>
                    <span className='required-label'>*</span> Select Folder
                    </label>
                    <select
                        id='folder-select'
                        name='folder-select'
                        ref={this.selectedFolder}
                        onChange={() => {this.validateInput()}}
                    >
                        <option value='none'>Select One...</option>
                        {folderList}
                    </select>
                    <ValidationError message={notePageError.fodlerSelectErrorMessage} />
                    <div className=''>
                        <button
                            className='app-btn'
                            disabled={notePageError.hasError}
                        >Add Note</button>
                    </div>
                </form>
            </div>
        );
    }
}