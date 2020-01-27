import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ApiContext = createContext()

const ApiContextProvider = props => {
    const [results, setResults] = useState([])


    const fetchWiki = async (search) => {
        try {
            const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=%22${search}%22&srlimit=10`
            console.log(url)
            const result = await axios.get(url)
            .then(res => {
                console.log(res.data.query.search.map(item => item.title), 'drugie res')
                return res.data.query.search
            })
            console.log(result)
            setResults(result)
        }
        catch (e) {
            if (e){
                console.log(e)
            }
        }
    }

  

    return (
        <ApiContext.Provider value={{ results, fetchWiki }}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider