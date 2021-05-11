import harvardArt from "../../data/harvardArt";
import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";
function GalleryNavigation(props) {
  console.log(props.galleries);

  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink exact to="/">
        {" "}
        Home{" "}
      </NavLink>
      {props.galleries.map((ele) => (
        <NavLink to={`/galleries/${ele.galleryid}`} key={ele.galleryid}>
          {ele.name}
        </NavLink>
      ))}
    </nav>
  );
}
export default GalleryNavigation;
