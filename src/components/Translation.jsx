import React from 'react'

export default function Translation({doStuff ,setInput ,result}) {
  return (
    <div>
        <textarea className='textarea' 
        cols={50} 
        rows={10} 
        onChange={(e) =>setInput(e.target.value)}/>
        <button className='action-btn' onClick={doStuff}>Do your stuff</button>
        <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>

  )
}
  