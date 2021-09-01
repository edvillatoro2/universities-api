import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className="search">
            <form>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Type in Country"
                value={text}
                autoFocus
                onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search