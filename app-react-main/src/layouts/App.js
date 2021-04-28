import React, { useState } from 'react'
import {Link  } from 'react-router-dom'

const App = ({ children }) => {
  return (
    <main >
      <nav class="container-sm">
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <Link role="tabpanel" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link role="tabpanel" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link to="/react">React</Link>
          </li>
          <li class="nav-item">
            <Link to="/angular">Angular</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  )
}

export default App