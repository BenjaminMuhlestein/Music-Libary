
import { useState } from 'react'

const Gallery = function(){
    let dataContext =useContext(DataContext)

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
        </div>
    )
}



export default GalleryItem
