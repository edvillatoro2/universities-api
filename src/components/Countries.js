import React from 'react'
import UniversityItems from './UniversityItems'

const countriesGrid = ({items, isLoading}) => {
    return isLoading ? (<h1 className="center">Loading...</h1>) : <section className="cards">
        {items.map(item => (
            <UniversityItems key={item.id} item={item}></UniversityItems>
        ))}
    </section>
}

export default countriesGrid