(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{18:function(e,t){e.exports={API_KEY:"7bc9c5ac-d0f5-11e9-bb65-2a2ae2dbcce4",API_ENDPOINT:"https://obscure-chamber-98726.herokuapp.com"}},25:function(e,t,n){e.exports=n(46)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),c=n.n(o),l=(n(30),n(24)),s=n(1),i=n(2),d=n(4),u=n(3),m=n(5),f=(n(31),n(32),n(7)),p=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"app-title"},r.a.createElement("h1",{role:"link"},r.a.createElement(f.b,{to:"/"},"Noteful"))),r.a.createElement("div",{className:"header-btns"},r.a.createElement(f.b,{to:"/add-folder/",className:"app-btn add-folder-btn"},"Add Folder +"),r.a.createElement(f.b,{to:"/add-note/",className:"app-btn add-note-btn"},"Add Note +")))}}]),t}(a.Component);p.defaultProps={handleAddFolder:function(){},handleAddNote:function(){}};var h=r.a.createContext({notes:[],folders:[],fetchURL:"",deleteNote:function(){},addNote:function(){},addFolder:function(){},setFolderPageError:function(){},fodlerPageError:{},setNotePageError:function(){},notePageError:{}}),E=n(11),v=(n(38),n(39),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.context.notes,t=this.context.folders,n=parseInt(this.props.rprops.match.params.noteId,10),a=0,o={};0!==e.length&&0!==t.length&&(a=e.find(function(e){return e.id===n}).folder_id,o=t.find(function(e){return e.id===a},10));var c=e.map(function(e){return e.folder_id===a?r.a.createElement(f.b,{to:"/notes/".concat(e.id),key:e.id},r.a.createElement("li",{className:e.id===n?"app-btn active":"app-btn"},e.name)):""});return r.a.createElement("nav",{className:"FolderNotesListNav"},r.a.createElement("h1",null,void 0!==o.name?o.name:""),r.a.createElement("ul",{className:"notes-list"},c))}}]),t}(a.Component));v.contextType=h;var N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleGoBack=function(){var e=n.props.rprops.history,t=n.context.notes;if(n.props.rprops.match.params.hasOwnProperty("noteId")){var a=parseInt(n.props.rprops.match.params.noteId,10);if(void 0!==a){var r=t.find(function(e){return e.id===a});e.push("/folders/".concat(r.folder_id))}}else e.goBack()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.rprops.location.pathname,n=parseInt(this.props.rprops.match.params.folderId,10),a=this.context.folders.map(function(e){return r.a.createElement("li",{key:e.id,className:n===e.id?"selected":""},r.a.createElement(f.b,{to:"/folders/".concat(e.id)},r.a.createElement("div",{className:"folder-link app-btn"},e.name)))});return r.a.createElement("aside",{className:"SideBarNavigation"},"/"===t||t.includes("/folders/")?r.a.createElement("nav",{className:"folder-nav"},r.a.createElement("h3",null,"Folder List"),r.a.createElement("ul",{className:"folder-list"},a)):r.a.createElement("nav",{className:"go-back-nav"},r.a.createElement("button",{className:"app-btn",onClick:function(){e.handleGoBack()}},"Go Back"),r.a.createElement(E.a,{exact:!0,path:"/notes/:noteId",render:function(e){return r.a.createElement(v,{rprops:e})}})))}}]),t}(a.Component);N.contextType=h,N.defaultProps={rprops:{}};n(40);var b=n(17),g=n.n(b),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onDeleteNote=function(e){var t=n.context.fetchURL;fetch("".concat(t,"/notes/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(e){if(!e.ok)return e.json().then(function(e){throw e})}).then(function(t){n.context.deleteNote(e)}).catch(function(e){console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.rprops,n=this.context.notes,a=this.context.folders,o="Empty Folder",c=t.location.pathname,l=n.map(function(n){if("/"===c)return o="All Notes",r.a.createElement("li",{key:n.id},r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement(f.b,{to:"/notes/".concat(n.id)},n.name)),r.a.createElement("p",{className:"note-last-modified"},"Date Modified: ",r.a.createElement(g.a,{date:n.modified,format:"MM/DD/YYYY"}))),r.a.createElement("div",null,r.a.createElement("button",{className:"delete-btn app-btn",onClick:function(){e.onDeleteNote(n.id)}},"delete")));var l=parseInt(t.match.params.folderId,10);return n.folder_id===l?(o=0!==a.length?a.find(function(e){return e.id===l}).name+" Folder Notes":"No Notes",r.a.createElement("li",{key:n.id},r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement(f.b,{to:"/notes/".concat(n.id)},n.name)),r.a.createElement("p",{className:"note-last-modified"},"Date Modified: ",r.a.createElement(g.a,{date:n.modified,format:"MM/DD/YYYY"}))),r.a.createElement("div",null,r.a.createElement("button",{className:"delete-btn app-btn",onClick:function(){e.context.deleteNote(n.id)}},"delete")))):""});return r.a.createElement("section",{className:"NotesSection"},r.a.createElement("h3",null,o),r.a.createElement("ul",{className:"notes-list"},l))}}]),t}(a.Component);j.contextType=h,j.defaultProps={rprops:{}};n(43);var y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onDeleteNote=function(e){var t=n.context.fetchURL;fetch("".concat(t,"/notes/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(e){if(!e.ok)return e.json().then(function(e){throw e})}).then(function(t){n.props.rprops.history.push("/"),n.context.deleteNote(e)}).catch(function(e){console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.context.notes,n=parseInt(this.props.rprops.match.params.noteId,10),a=t.find(function(e){return e.id===n});return r.a.createElement("section",{className:"Note"},void 0!==a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"note-header"},r.a.createElement("h3",{className:"note-title"},a.name),r.a.createElement("button",{className:"delete-btn app-btn",onClick:function(){return e.onDeleteNote(a.id)}},"Delete")),r.a.createElement("div",{className:"note-content"},r.a.createElement("p",null,a.content))))}}]),t}(a.Component);y.contextType=h,y.defaultProps={rprops:{}};n(44);function O(e){return e.message?r.a.createElement("div",{className:"error"},e.message):r.a.createElement(r.a.Fragment,null)}var x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).validateFolderName=function(){0===n.folderNameInput.current.value.trim().length?n.context.setFolderPageError(!0,"Folder name is required"):n.context.setFolderPageError(!1,"")},n.handleAddFolderSumbit=function(e){e.preventDefault();var t=n.folderNameInput.current.value,a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t})};fetch("".concat(n.context.fetchURL,"/folders"),a).then(function(e){if(!e.ok)throw new Error("Folder could not be added");return e}).then(function(e){n.folderNameInput.current.value="",n.context.addFolder(),n.context.setFolderPageError(!1,""),n.props.rprops.history.push("/")}).catch(function(e){console.log(e.message)})},n.folderNameInput=r.a.createRef(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.context.setFolderPageError(!1,""),this.folderNameInput.current.value=""}},{key:"render",value:function(){var e=this,t=this.context.folderPageError;return r.a.createElement("div",{className:"AddFolder"},r.a.createElement("form",{className:"add-folder-form",onSubmit:function(t){e.handleAddFolderSumbit(t)}},r.a.createElement("label",{htmlFor:"foldername"},"Folder Name"),r.a.createElement("div",{className:"input-div"},r.a.createElement("input",{type:"text",placeholder:"Enter your folder name here",id:"foldername",name:"foldername",className:"foldername-textbox",ref:this.folderNameInput,onChange:function(){e.validateFolderName()},required:!0,"aria-label":"folder name","aria-required":"true","aria-invalid":t.hasError})),r.a.createElement(O,{message:t.errorMessage}),r.a.createElement("div",{className:"add-btn-div"},r.a.createElement("button",{type:"submit",className:"app-btn",disabled:t.hasError},"Add Folder"))))}}]),t}(a.Component);x.contextType=h,x.defaultProps={rprops:{},error:!0};n(45);var F=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).validateInput=function(){var e=n.context.setNotePageError,t=n.nameInputBox.current.value.trim(),a=n.selectedFolder.current.value,r={hasError:!1,nameErrorMessage:"",fodlerSelectErrorMessage:""};0===t.length&&(r.hasError=!0,r.nameErrorMessage="Name is required"),"none"===a&&(r.hasError=!0,r.fodlerSelectErrorMessage="Select the folder to save the note in."),e(r)},n.handleSubmit=function(e){if(e.preventDefault(),n.validateInput(),!n.context.notePageError.hasError){var t=n.nameInputBox.current.value.trim(),a=n.content.current.value,r=parseInt(n.selectedFolder.current.value,10),o={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,folder_id:r,content:a})};fetch("".concat(n.context.fetchURL,"/notes"),o).then(function(e){if(!e.ok)throw new Error("Could not add the note at this time");return e}).then(function(e){n.context.addNote(),n.props.rprops.history.push("/")}).catch(function(e){console.log(e)})}},n.nameInputBox=r.a.createRef(),n.content=r.a.createRef(),n.selectedFolder=r.a.createRef(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.nameInputBox.current.value="",this.selectedFolder.current.value="none",this.content.current.value="",this.context.setNotePageError(!1,"","")}},{key:"render",value:function(){var e=this,t=this.context,n=t.folders,a=t.notePageError,o=n.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)});return r.a.createElement("div",{className:"AddNote"},r.a.createElement("form",{className:"add-note-form",onSubmit:function(t){e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:"note-name"},r.a.createElement("span",{className:"required-label"},"*")," Note Name"),r.a.createElement("div",{className:"input-div"},r.a.createElement("input",{required:!0,id:"note-name",name:"note-name",className:"note-name",placeholder:"Enter the name of your note",ref:this.nameInputBox,onChange:function(){e.validateInput()}})),r.a.createElement(O,{message:a.nameErrorMessage}),r.a.createElement("label",{htmlFor:"note-content",className:"text-box-header"},"Note Content"),r.a.createElement("div",{className:"input-div"},r.a.createElement("textarea",{id:"note-content",name:"note-content",placeholder:"Enter your Note Content Here...",ref:this.content})),r.a.createElement("label",{htmlFor:"folder-select"},r.a.createElement("span",{className:"required-label"},"*")," Select Folder"),r.a.createElement("select",{id:"folder-select",name:"folder-select",ref:this.selectedFolder,onChange:function(){e.validateInput()}},r.a.createElement("option",{value:"none"},"Select One..."),o),r.a.createElement(O,{message:a.fodlerSelectErrorMessage}),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"app-btn",disabled:a.hasError},"Add Note"))))}}]),t}(a.Component);F.contextType=h;var P=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"main-error"},"Something, went wrong !! ",r.a.createElement("br",null),"We are currently fixing the issue and should be up and running shortly !"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log(e),{hasError:!0}}}]),t}(a.Component),I=n(18),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).updateFolders=function(){n.setFolders("".concat(n.state.fetchURL,"/folders/"))},n.updateNotes=function(){n.setNotes("".concat(n.state.fetchURL,"/notes/"))},n.handleDeleteNote=function(e){var t=n.state.notes.filter(function(t){return t.id!==e});n.setState({notes:t})},n.setFolderPageError=function(e,t){n.setState({folderPageError:{hasError:e,errorMessage:t}})},n.setNotePageError=function(e){n.setState({notePageError:e})},n.setNotes=function(e){return new Promise(function(t,n){fetch(e).then(function(e){return e.ok||n("Could Not Fetch Notes From API"),e.json()}).then(function(e){t(e)})}).then(function(e){n.setState({notes:e})}).catch(function(e){console.log(e)})},n.setFolders=function(e){return new Promise(function(t,n){fetch(e).then(function(e){return e.ok||n("Error: Could Not Fetch Folders From API"),e.json()}).then(function(e){t(e)})}).then(function(e){n.setState({folders:e})}).catch(function(e){console.log(e)})},n.componentDidMount=function(){var e=n.state.fetchURL;Promise.all([n.setNotes("".concat(e,"/notes/")),n.setFolders("".concat(e,"/folders/"))]).then(function(e){var t=Object(l.a)(e,2);t[0],t[1]}).catch(function(e){console.log(e.message)})},n.renderSideNavRoutes=function(){return["/","/folders/:folderId","/add-folder/","/add-note/","/notes/:noteId"].map(function(e,t){return r.a.createElement(E.a,{exact:!0,key:t,path:e,render:function(e){return r.a.createElement(N,{rprops:e})}})})},n.renderNotesSectionRoutes=function(){return["/","/folders/:folderId"].map(function(e,t){return r.a.createElement(E.a,{key:t,exact:!0,path:e,render:function(e){return r.a.createElement(j,{rprops:e})}})})},n.renderNoteRoute=function(){return["/notes/:noteId"].map(function(e,t){return r.a.createElement(E.a,{key:t,exact:!0,path:e,render:function(e){return r.a.createElement(y,{rprops:e})}})})},n.state={notes:[],folders:[],API_KEY:I.API_KEY,fetchURL:I.API_ENDPOINT,folderPageError:{hasError:!1,errorMessage:""},notePageError:{hasError:!1,nameErrorMessage:"",fodlerSelectErrorMessage:""}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={notes:this.state.notes,folders:this.state.folders,fetchURL:this.state.fetchURL,deleteNote:this.handleDeleteNote,addFolder:this.updateFolders,addNote:this.updateNotes,setFolderPageError:this.setFolderPageError,folderPageError:this.state.folderPageError,setNotePageError:this.setNotePageError,notePageError:this.state.notePageError};return r.a.createElement(h.Provider,{value:e},r.a.createElement(f.a,null,r.a.createElement(P,null,r.a.createElement("main",{className:"App"},r.a.createElement(p,null),r.a.createElement("div",{className:"flex-div"},this.renderSideNavRoutes(),this.renderNotesSectionRoutes(),this.renderNoteRoute(),r.a.createElement(E.a,{exact:!0,path:"/add-folder/",render:function(e){return r.a.createElement(x,{rprops:e})}}),r.a.createElement(E.a,{exact:!0,path:"/add-note/",render:function(e){return r.a.createElement(F,{rprops:e})}}))))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.cc267aae.chunk.js.map