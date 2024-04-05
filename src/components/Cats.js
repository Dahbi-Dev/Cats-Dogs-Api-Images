import React, { useEffect, useState } from 'react'


export default function Cats() {
    const [images, setImages] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const catApiKey = process.env.REACT_APP_CAT_API_KEY;
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&breed_ids=beng&api_key=${catApiKey}`);
        const data = await res.json();
        setImages(data);
        // console.log(data)
      }
  
      fetchData();
    }, []);
  
  return (
    <div>
         <header className="header">
        <h1>Cat Images Api</h1>
      </header>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={`image${index + 1}`} />
        ))}
      </div>
    </div>
  )
}
