import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import NotefulContext from './NotefulContext';

export default class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      folders: [],
      apiEndpoint: 'http://localhost:9090'
    }
  }

  handleAddFolder = (folderName) => {
    console.log('Add Folder Button Clicked');
  }

  handleAddNote = (note) => {
    console.log('Add Note Button Clicked');
  }

  handleDeleteNote = (noteId) => {
    console.log('Delete Note: ', noteId);
  }

  getNotes = (url) => {
    const notes = [];
    
    return notes;
  }

  getFolders = (url) => {
    const folders = [];

    return folders;
  }

  componentDidMount = () => {
    const endpoint = this.state.apiEndpoint;
    const notes = this.getNotes(`${endpoint}/notes/`);
    const folders = this.getFolders(`${endpoint}/folders/`);
  }

  render(){

    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    }

    return (
      <NotefulContext.Provider value={value}>
        <main className='App'>
          <Header 
          />
        </main>
      </NotefulContext.Provider>
    );
  }
}