import { useState } from 'react'
import './App.css'
import FeedVideos from './components/FeedVideos'
import VideoPlayer from './components/VideoPlayer'

function App () {
  return (
    <div className='App'>
      <main>
        <FeedVideos />
      </main>
    </div>
  )
}

export default App
