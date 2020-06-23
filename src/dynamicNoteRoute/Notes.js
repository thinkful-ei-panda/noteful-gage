import React from  'react';
import  {Link, Route} from 'react-router-dom'


    export default function Notes(props){
        
        const notesMaped = props.notes.map( note => 

            <Link key={note.id} to={`/note/${note.id}` }>
                <div className='box' id={note.folderId}>
                    <h2>{note.name}</h2>
                    <p>{note.modified}</p>
                    <button>Delete</button>
                </div>
            </Link>
            )

            return(
                <div className='notes-list'>
                    {notesMaped}
                    <button type="button">add new folder</button>
                </div>


            )
    }