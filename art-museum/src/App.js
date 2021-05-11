import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/galleryNavigation";
function App() {
  const galleries = harvardArt.records;
  return (
    <div>
      <GalleryNavigation galleries={galleries} />
    </div>
  );
}

export default App;
