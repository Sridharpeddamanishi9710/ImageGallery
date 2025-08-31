import React, { useState } from "react";

const ACCESS_KEY = "67p4QjYJJVwCOI8ikS7_3MdJXcwF8NfnyYp6qnoSsHE";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
    );
    const data = await res.json();
    setImages(data.results || []);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Image Gallery</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search images"
      />
      <button onClick={searchImages}>Search</button>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 20 }}>
        {images.map((img) => (
          <img key={img.id} src={img.urls.small} alt={img.alt_description} style={{ width: 300, margin: 10 }} />
        ))}
      </div>
    </div>
  );
}

export default App;
