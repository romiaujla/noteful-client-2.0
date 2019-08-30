import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import NotefulContext from './NotefulContext';
import { BrowserRouter, Route } from 'react-router-dom';
import SideBarNavigation from './Component/SideBarNavigation/SideBarNavigation';
import NotesSection from './Component/NotesSection/NotesSection';
import Note from './Component/Note/Note';
import AddFolder from './Component/AddFolder/AddFolder';
import AddNote from './Component/AddNote/AddNote';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: [],
      fetchURL: 'http://localhost:9090',
      folderPageError: false,
      newFolderName: ''
    }
  }

  handleAddFolder = (folderName) => {
    // save forlderName with no spaces in the front and back
    const newFolderName = folderName.trim();

    // Validate if the folder name is valid
    if(newFolderName === ''){
      this.setState({
        newFolderName,
        folderPageError: true
      });
      // Return true so in the Add Folder textbox value can be reset to empty
      return true;
    }else{
      // if the folderName is correct then set state and remove error
      this.setState({
        newFolderName,
        folderPageError: false
      });
    }
    
  }

  handleAddNote = (note) => {
    console.log('Add Note Button Clicked');
  }

  handleDeleteNote = (noteId) => {
    const notes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes
    })
  }

  // Sets Notes from the API
  setNotes = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            reject('Could Not Fetch Notes From API');
          }
          return response.json();
        })
        .then((notesJson) => {
          resolve(notesJson);
        })
    }).then((notes) => {
      this.setState({
        notes
      })
    }).catch(err => {
      console.log(err);
    })

  }

  // Sets the folders from the API
  setFolders = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            reject('Error: Could Not Fetch Folders From API');
          }
          return response.json();
        })
        .then((responseJson) => {
          resolve(responseJson);
        })
    }).then((folders) => {
      this.setState({
        folders
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  // Set Notes and Folders once the Component Did Mount
  componentDidMount = () => {
    const endpoint = this.state.fetchURL;
    this.setNotes(`${endpoint}/notes/`);
    this.setFolders(`${endpoint}/folders/`);
  }

  // Renders Routes for the Side Navigation
  renderSideNavRoutes = () => {
    const paths = [
      '/',
      '/folders/:folderId',
      '/add-folder/',
      '/add-note/',
      '/notes/:noteId'
    ];

    const sideNavRoutes = paths.map((path, i) => {
      return (
        <Route
          exact
          key={i}
          path={path}
          render={(rprops) => <SideBarNavigation rprops={rprops} />}
        />
      );
    });

    return sideNavRoutes;
  }

  // Renders Routes for the Main Section where Notes are displayed
  renderNotesSectionRoutes = () => {
    const paths = [
      '/',
      '/folders/:folderId'
    ];

    const notesSectionRoutes = paths.map((path, i) => {
      return (
        <Route
          key={i}
          exact
          path={path}
          render={(rprops) => <NotesSection rprops={rprops} />}
        />
      );
    });

    return notesSectionRoutes;
  }

  // Render Rout for the detailed Note wth its Content
  renderNoteRoute = () => {
    const paths = [
      '/notes/:noteId'
    ];

    const notesSectionRoutes = paths.map((path, i) => {
      return (
        <Route
          key={i}
          exact
          path={path}
          render={(rprops) => <Note rprops={rprops} />}
        />
      );
    });

    return notesSectionRoutes;
  }


  // Main React Render Method()
  render() {

    // Used to set the Context = State, to avoid a lot of prop drilling.
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      fetchURL: this.state.fetchURL,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote
    }

    return (
      <NotefulContext.Provider value={value}>
        <BrowserRouter>
          <main className='App'>
            <Header
            />
            <div className='flex-div'>
              {this.renderSideNavRoutes()}
              {this.renderNotesSectionRoutes()}
              {this.renderNoteRoute()}
              
              <Route
                exact
                path='/add-folder/'
                render={(rprops) => <AddFolder rprops={rprops} error={this.state.folderPageError}/>}
              />

              <Route
                exact
                path='/add-note/'
                render={(rprops) => <AddNote rprops={rprops} />}
              />
            </div>
          </main>
        </BrowserRouter>
      </NotefulContext.Provider>
    );
  }
}