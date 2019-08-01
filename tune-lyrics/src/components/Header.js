import React from 'react'
import { Link } from 'react-router-dom'








function Header() {

    return (

        <header className='header-tag'>

            <h1 className='title'>Lyric
                <span className='surge-title'>Surge</span>
            </h1>

                <Link to='/' className='links' >Home</Link>
                <Link to='/' className='links' >Trending</Link>
                <Link to='/' className='links' >Hot 100</Link>
           

            <Link to='/quotes' className='links' >Quotes</Link>

            <form>
                <label>

                    <input type="text" />

                </label>

                <input className='search-button' type="submit" value="Search" />
            </form>



        </header>

    )
}







export default Header



