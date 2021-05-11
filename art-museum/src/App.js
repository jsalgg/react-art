import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/galleryNavigation";
import GalleryView from "./components/GalleryView"
import { Route, Switch} from "react-router-dom";
function App() {
  const galleries = harvardArt.records;
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={galleries} />
    <Switch>
      <Route path='/galleries/:galleryid'>
        <GalleryView galleries={galleries}/>
      </Route>
      <Route exact path='/'>
        <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
      </Route>
      <Route path='*'>
        <h1>Page Not Found</h1>
      </Route>
    </Switch>
    </div>

  );
}

export default App;
