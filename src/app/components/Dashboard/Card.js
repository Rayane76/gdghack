import React from 'react'
import './Card.css';
export default function Card({number,icon,title,time}) {
  return (
    <div className='wrap'>
        <div className="card">
            <div className="card-top">
                <h1>{number}</h1>
                {icon}
            </div>
            <div className="card-bottom">
                <p className='bold'>{title}</p>
                <p>{time}</p>
            </div>
        </div>
    </div>
  )
}
