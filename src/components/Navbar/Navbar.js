import React, { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'

const Navbar = () => {
    const { results, fetchWiki } = useContext(ApiContext)

    const searchResults = e => {
        e.preventDefault()
        console.log(e.target.search.value, 'value')
        const searchButton = e.target.search.value
        fetchWiki(searchButton)
    }

    return (
        <nav className="navbar">
            <form className="navbar__form" onSubmit={searchResults}>
                <input className="navbar__input" name="search" id="search" placeholder="search" />
                <input className="navbar__input" name="replace" id="replace" placeholder="replace with" />
                <button className="navbar__button" type="submit">search</button>
                <button className="navbar__button" type="button">replace</button>
                <button className="navbar__button" type="button">replace all</button>
            </form>
        </nav>
    )
}

export default Navbar