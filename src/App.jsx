import React, { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Body from './components/Body'
import { TwitterContext } from './utils/contexs'

function App() {

  const [user, setUser] = useState({
    name: 'James',
    avatar: 'https://gravatar.com/avatar/00000000000000000000000000000000?d=monsterid'
  })

  const [stats, setStats] = useState({
    followers: 100,
    following: 1000
  })

  const changeAvatar = url => {
    setUser(user => ({ ...user, avatar: url || user.avatar }));
  }

  const changeName = name => {
    setUser(user => ({ ...user, name: name || user.name }));
  }

  const incrementFollowers = () => {
    setStats((prevStats) => ({ ...prevStats, followers: prevStats.followers + 1 }));
  }

  const decrementFollowers = () => {
    if (stats.followers > 0) {
      setStats((prevStats) => ({ ...prevStats, followers: prevStats.followers - 1 }));
    }
  }

  const incrementFollowing = () => {
    setStats((prevStats) => ({ ...prevStats, following: prevStats.following + 1 }));
  }

  const decrementFollowing = () => {
    if (stats.following > 0) {
      setStats((prevStats) => ({ ...prevStats, following: prevStats.following - 1 }));
    }
  }

  return (
    <div className="app">
      <TwitterContext.Provider value={{
        user, stats,
        changeAvatar,
        changeName,
        incrementFollowers,
        decrementFollowers,
        incrementFollowing,
        decrementFollowing
      }}>
        <Navigation />
        <Body />
      </TwitterContext.Provider>
    </div>
  )
}

export default App
