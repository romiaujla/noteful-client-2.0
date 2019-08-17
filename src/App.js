import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import NotefulContext from './NotefulContext';
import { BrowserRouter, Route } from 'react-router-dom';
import SideBarNavigation from './Component/SideBarNavigation/SideBarNavigation';
import NotesSection from './Component/NotesSection/NotesSection';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: [],
      apiEndpoint: 'http://localhost:9090',
      errorPage: false
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

  componentDidMount = () => {
    const endpoint = this.state.apiEndpoint;
    this.setNotes(`${endpoint}/notes/`);
    this.setFolders(`${endpoint}/folders/`);
  }

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

  render() {

    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote
    }

    console.log(value);

    return (
      <NotefulContext.Provider value={value}>
        <BrowserRouter>
          <main className='App'>
            <Header
            />
            <div className='flex-div'>
              {this.renderSideNavRoutes()}
              {this.renderNotesSectionRoutes()}
            </div>
          </main>
        </BrowserRouter>
      </NotefulContext.Provider>
    );
  }
}