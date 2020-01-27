import React, { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'

const List = () => {

    const { results } = useContext(ApiContext)

    let displayList

    if (results) {
        displayList = results.map((item, i) =><li key={i}><strong>{item.title}</strong> - {item.snippet}</li>)
    }
 
    return (
        <ul>
            {displayList}
        </ul>
    )
}

export default List