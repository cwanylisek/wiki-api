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

    const replaceWiki = async (search) => {
        try {
            const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=%22${search}%22&srlimit=1`
            console.log(url)
            const result = await axios.get(url)
            .then(res => {
                return res.data.query.search
            })
            console.log(result[0])
            let newArr = [...results]
            newArr[0] = result[0]
            console.log(newArr, 'newarr')
            setResults(newArr)
        }
        catch (e) {
            if (e){
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