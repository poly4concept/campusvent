import React from 'react'
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
import './loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <Hypnosis color='#df861d' />
        </div>
    )
}

export default Loading
