import React from 'react'

function BugTitle({ title }) {
  return (
    <div style={{border: '1px solid black', width: 'max-content'}}>
        <h4>BugTitle</h4>
        {title}
    </div>
  )
}

export default BugTitle