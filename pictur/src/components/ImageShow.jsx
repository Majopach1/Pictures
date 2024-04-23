import React from 'react'
import './ImageList.css'
function ImageShow  ({image}) {
  return (
    <div className='image-list'>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  )
}

export default ImageShow