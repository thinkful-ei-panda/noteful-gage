import React from 'react';
import { Route ,Link } from 'react-router-dom'
import Header from "./Header"
import STORE from './store'
import Folders from "./dynamicFolderRoute/Folders"
import Notes from "./dynamicNoteRoute/Notes"
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
                      <Notes
                        notes={this.state.notes.filter(note => 
                          props.match.params.folderId === note.folderId)}
                        />
                        <Folders
                          folders={this.state.folders}
                        />
                  </div>
                )
              }}
          />
          
          {/****if note is clicked****/}
          
          <Route
            exact path="note/:noteId"
                render={(props) => {
                  return (
                    <div>
                      <Link to='/'>
                        <div>
                          Go back  
                        </div> 
                      </Link>
                      <Notes
                        notes={this.state.notes.filter(note =>
                          props.match.params.id === note.id)}
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
