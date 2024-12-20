import Chip from "@mui/material/Chip";
import { Rating } from "../components/Rating/Rating";

export const GameDetails = () => {
  return (
    <div className="flex gap-20">
      <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co94j3.jpg" />
      <div>
        <h2>Marvel Rivals</h2>
        <p>released on Sep 15, 2015 by Marvel</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci
          metus, vestibulum quis sapien nec, facilisis eleifend nisi. Fusce
          sagittis vulputate turpis, in elementum neque mollis ut. Pellentesque
          eget risus ac mi ultricies tincidunt. Curabitur mattis sem sed ligula
          semper, in suscipit nibh suscipit. Mauris egestas ac metus non
          commodo. Curabitur consequat felis id laoreet porttitor. Suspendisse
          blandit fringilla justo sed varius. Curabitur blandit lorem id turpis
          sodales, egestas euismod magna tempor. Vivamus velit neque, accumsan
          eget nibh eget, placerat venenatis urna. Pellentesque vel tortor
          tellus. Vestibulum faucibus ipsum non sagittis sollicitudin.
        </p>
      </div>
      <div>
        <div className="border rounded-md p-5 text-center">
          <h3>Rating</h3>
          <Rating />
        </div>
        <div>
          <h3>Platforms</h3>
          <div>
            <Chip label="Playstation" variant="outlined" />
            <Chip label="Windows" variant="outlined" />
            <Chip label="Xbox" variant="outlined" />
          </div>
        </div>
        <div>
          <h3>Genres</h3>
          <div>
            <Chip label="Aventura" variant="outlined" />
            <Chip label="Ação" variant="outlined" />
          </div>
        </div>
      </div>
    </div>
  );
};
