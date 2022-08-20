import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
            {view ? <p> Arist: {props.artist}</p> : <></>}
        </div>
    )
}

export default GalleryItem
