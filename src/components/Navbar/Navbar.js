import React, { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'

const Navbar = () => {

    const { fetchWiki, replaceWiki } = useContext(ApiContext)

    const searchResults = e => {
        e.preventDefault()
        const searchButton = e.target.search.value
        fetchWiki(searchButton)
    }

    const replaceAll = () => {
        const replaceInput = document.querySelector('#replace').value
        fetchWiki(replaceInput)
    }

    const replaceOne = () => {
        const replaceInput = document.querySelector('#replace').value
        replaceWiki(replaceInput)
    }

    return (
        <nav className="navbar">
            <h1>Wiki API - results request</h1>
            <form className="navbar__form" onSubmit={searchResults}>
                <input className="navbar__input" name="search" id="search" placeholder="search" />
                <input className="navbar__input" name="replace" id="replace" placeholder="replace with" />
                <button className="navbar__button" type="submit">search</button>
                <button className="navbar__button" type="button" onClick={replaceOne}>replace</button>
                <button className="navbar__button" type="button" onClick={replaceAll}>replace all</button>
            </form>
        </nav>
    )
}

export default Navbar