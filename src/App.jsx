 import React from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";

function App() {

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Mountain Lake",
      description: "A beautiful mountain landscape with a peaceful lake."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Forest Road",
      description: "A beautiful road surrounded by green trees."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      title: "Nature",
      description: "A peaceful view of nature and mountains."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      title: "Green Forest",
      description: "A fresh and beautiful green forest."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Mountain View",
      description: "A stunning mountain view under the blue sky."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      title: "Rocky Mountains",
      description: "Amazing rocky mountains surrounded by nature."
    }
  ];

  return (
    <>
      <h1>Dynamic Image Gallery</h1>

      <div className="gallery">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
          />
        ))}
      </div>
    </>
  );
}

export default App;