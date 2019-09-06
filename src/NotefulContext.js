import React from 'react';

export default React.createContext({
    notes: [],
    folders: [],
    fetchURL: '', 
    deleteNote: () => {},
    addNote: () => {},
    addFolder: () => {},
    setFolderPageError: () => {},
    fodlerPageError: {},
    setNotePageError: () => {},
    notePageError: {}
});