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
import NotefulError from './NotefulError';
import { API_KEY, API_ENDPOINT } from './config';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: [],
      API_KEY,
      fetchURL: API_ENDPOINT,
      folderPageError: {
        hasError: false,
        errorMessage: ``
      },
      notePageError: {
        hasError: false,
        nameErrorMessage: ``,
        fodlerSelectErrorMessage: ``,
      },
    }
  }

  updateFolders = () => {
    this.setFolders(`${this.state.fetchURL}/folders/`);
  }

  updateNotes = () => {
    this.setNotes(`${this.state.fetchURL}/notes/`);
  }

  handleDeleteNote = (noteId) => {
    const notes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes
    })
  }

  setFolderPageError = (hasError, errorMessage) => {
    this.setState({
      folderPageError: {
        hasError,
        errorMessage
      }
    })
  }

  setNotePageError = (notePageError) => {
    this.setState({
      notePageError
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
    Promise.all([
      this.setNotes(`${endpoint}/notes/`),
      this.setFolders(`${endpoint}/folders/`)
    ]).then(([res1, res2]) => {
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  // Renders Routes for the Side Navigation
  renderSideNavRoutes = () => {
    const paths = [
      '/noteful-client-2.0/',
      '/noteful-client-2.0/folders/:folderId',
      '/noteful-client-2.0/add-folder/',
      '/noteful-client-2.0/add-note/',
      '/noteful-client-2.0/notes/:noteId'
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
      '/noteful-client-2.0/',
      '/noteful-client-2.0/folders/:folderId'
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
      '/noteful-client-2.0/notes/:noteId'
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
      addFolder: this.updateFolders,
      addNote: this.updateNotes,
      setFolderPageError: this.setFolderPageError,
      folderPageError: this.state.folderPageError,
      setNotePageError: this.setNotePageError,
      notePageError: this.state.notePageError
    }

    return (
      <NotefulContext.Provider value={value}>
        <BrowserRouter>
          <NotefulError>
            <main className='App'>
              <Header
              />
              <div className='flex-div'>
                {this.renderSideNavRoutes()}
                {this.renderNotesSectionRoutes()}
                {this.renderNoteRoute()}
                
                
                <Route
                  exact
                  path='/noteful-client-2.0/add-folder/'
                  render={(rprops) => <AddFolder rprops={rprops}/>}
                />

                <Route
                  exact
                  path='/noteful-client-2.0/add-note/'
                  render={(rprops) => <AddNote rprops={rprops} />}
                />
              </div>
            </main>
          </NotefulError>
        </BrowserRouter>
      </NotefulContext.Provider>
    );
  }
}