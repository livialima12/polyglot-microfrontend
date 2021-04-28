import React, { useState } from 'react';
import Parcel from 'single-spa-react/parcel';
import * as singleSpa from 'single-spa';
import App from '../layouts/App'
import { v4 as uuid } from 'uuid'

const ReactChild = () => {
  const [task, updateTask] = useState('')

  const handleChange = event => {
    updateTask(event.target.value)
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    dispatchEvent(new CustomEvent(
      'nomedoevento',
      {
        detail: {
          id: uuid(),
          describe: task

        }
      }
    ))
    updateTask('')
  }

  return(
    <App>
      {/* <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task}/>
        <button>Add</button>
      </form> */}

      <Parcel 
        mountParcel={singleSpa.mountRootParcel}  
        config = {() => System.import("@lc/app-child-react")}>
      </Parcel>
    </App>
  )
}

export default ReactChild
