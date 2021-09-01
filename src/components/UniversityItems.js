import React from 'react'

const UniversityItems = ({item}) => {
    return (
    <div className='card'>
        <div className='card-inner'>
            <h1>{item.name}</h1>
            <ul>
                <li>
                <strong>Name:</strong> {item.name}
                </li>
                <li><strong>Web Page:</strong> {item.web_pages[0]}</li>
                <li><strong>Country:</strong> {item.country}</li>
            </ul>
        </div>
    </div>
    )
}

export default UniversityItems