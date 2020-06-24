import React from 'react';
import { Route ,Link } from 'react-router-dom'
import Header from "./Header"
import STORE from './store'
import Folders from "./dynamicFolderRoute/Folders"
import Notes from "./dynamicNoteRoute/Notes"
import NoteDetails from './dynamicNoteRoute/NoteDetails'
import './App.css'

class App extends React.Component {

  state = {
    folders : STORE.folders , 
    notes : STORE.notes, 
  }




    render(){
     return (
      <main className='App'>
        <Header/>

          {/**** home ***/}

          <Route exact path="/" 
            render={(props) => {return (
            <div>
              <Folders 
              folders={this.state.folders}
              />
              <Notes
              notes={this.state.notes}              
              />
            </div>) } }  
          />

          {/*****if folder is clicked*******/}
          
          <Route
          exact path ="/folders/:folderId"
              render={(props) => {
                return (
                  <div>
                    <Folders
                      folders={this.state.folders}
                    />
                      <Notes
                        notes={this.state.notes.filter(note => 
                          props.match.params.folderId === note.folderId)}
                        />
                  </div>
                )
              }}
          />
          
          {/****if note is clicked****/}
          
          <Route
            exact path="/note/:noteId"
                render={(props) => {
                  const note = this.state.notes.find(note =>
                    props.match.params.noteId === note.id)

                  const folder = this.state.folders.find(folder => 
                      folder.id === note.folderId)
                  return (
                    <div>
                      <h2>{folder.name}</h2>
                      <NoteDetails
                        notes={note}
                        />
                      
                    </div>
                  )
                  
                }}
            />
      </main>
    );
  } 
}

  

export default App;
