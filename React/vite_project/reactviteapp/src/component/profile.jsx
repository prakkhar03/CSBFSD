import React from 'react'
import './profile.css'

function Profile() {
  return (
    <div className='profile-card'>
      <h2>Profile Component</h2>
      <h3>Name: Prakkhar</h3>
      <h3>Branch: CS</h3>
      <img src="https://pics.craiyon.com/2023-11-12/bwUacS6GSViLJx6m1dDCFQ.webp" alt="profile-pic" style={{width:"200px", height:"200px", borderRadius:"50%"}}/>
      
    </div>
  )
}

export default Profile
