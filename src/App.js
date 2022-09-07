import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CardGrid from "./containers/CardGrid";
import { secret } from './secret';

// photos: https://www.pexels.com/api/
// https://api.pexels.com/v1/photos/:id

const obj = {  
  method: 'GET',
  headers: {
    'Authorization': secret.API_KEY
  }
}

function App() {
  const [loading, setLoading] = useState(true);
  const [imagesResponse, setImagesResponse] = useState({});
  const [gameImages, populateGameImages] = useState([]);

  useEffect(() => {
    fetch('https://api.pexels.com/v1/search?query=animals&per_page=6', obj)
      .then(response => response.json())
      .then((data) => {
        setImagesResponse(data);
        console.log(data)
      })
      .finally(() => {
        if(imagesResponse) {
          for(let i = 0; i < 6; ++i) {
            populateGameImages(gameImages.concat(imagesResponse.photos[i].src.medium))
          }
        }

        setLoading(false);
        console.log('imagesResponse: ', imagesResponse);
      })
      .catch((e) => {
        console.error('Error when fetching the data: ', e);
      })
      console.log('final data: ', gameImages);
  });

  return (
    <React.Fragment>
      <Header />
      <main>{loading ? "Loading..." : <CardGrid />}</main>
    </React.Fragment>
  );
}

export default App;
