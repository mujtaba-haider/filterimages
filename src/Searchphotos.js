import React, { useState } from "react";
// import { createApi } from 'unsplash-js';
import Unsplash, { toJson } from "unsplash-js";

// const unsplash = createApi({ accessKey: '' });
const unsplash = new Unsplash({
    accessKey: "JkqHkXzdOy03qTjY6iFNQ42Pm2Wn6fOlXfpihR2te1E",
  });

const Searchphotos = () => {

    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    
    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search
        .photos(query)
        .then(toJson)
        .then((json) => {
          setPics(json.results);
        });
      };

  return (
    <div>
      <form className="form" onSubmit={searchPhotos}> 
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try to search something`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list" value={pics}>
      {
          pics.map((pic) => 
            <div className="card" key={pic.id}>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>)
        }
      </div>
    </div>
  )
}

export default Searchphotos