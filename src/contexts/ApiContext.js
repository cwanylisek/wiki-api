import React, { createContext, useState } from 'react'
import axios from 'axios'

export const ApiContext = createContext()

const ApiContextProvider = props => {
    const [results, setResults] = useState([])


    const fetchWiki = async (search) => {
        try {
            const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=%22${search}%22&srlimit=10`
            const result = await axios.get(url)
                .then(res => {
                    return res.data.query.search
                })
            setResults(result)
        }
        catch (e) {
            if (e) {
                console.log(e)
            }
        }
    }

    const replaceWiki = async (search) => {
        try {
            const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=%22${search}%22&srlimit=1`
            const result = await axios.get(url)
                .then(res => {
                    return res.data.query.search
                })
            let newArr = [...results]
            newArr[0] = result[0]
            setResults(newArr)
        }
        catch (e) {
            if (e) {
                console.log(e)
            }
        }
    }



    return (
        <ApiContext.Provider value={{ results, fetchWiki, replaceWiki }}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider