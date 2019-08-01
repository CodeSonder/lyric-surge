import React from 'react'
import Data from './QuoteData'
import Layout from './QuoteLayout'

function QuoteList(){
    const list = Data.map(words => <Layout key={words.id} quote={words.quote}/>)
    

    return(
        <div className='quote-list'>{list}</div>
    )

}

export default QuoteList