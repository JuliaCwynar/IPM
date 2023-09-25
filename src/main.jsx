import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Post from './components/Post.jsx'
import Sidebar from './components/Sidebar.jsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main'>
    <Sidebar />
    <div className='right'>
    <Header />
      <Post />
    </div>
    </div>
  </React.StrictMode>,
)
