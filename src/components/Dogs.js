import React, { useEffect, useState } from 'react'

export default function Dogs() {
    const [images, setImages] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const dogApiKey = process.env.REACT_APP_DOG_API_KEY;
        const res = await fetch(`https://api.thedogapi.com/v1/images/search?limit=12&api_key=${dogApiKey}`);
        const data = await res.json();
        setImages(data);
        // console.log(data)
      }
  
      fetchData();
    }, []);
  return (
    <div>
         <header className="header">
        <h1>Dog Images Api</h1>
      </header>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={`image${index + 1}`} />
        ))}
      </div>
    </div>
  )
}
