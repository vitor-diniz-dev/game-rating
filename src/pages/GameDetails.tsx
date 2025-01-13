import { Chip } from "../components/Chip/Chip";
import { Rating } from "../components/Rating/Rating";

export const GameDetails = () => {
  return (
    <div className="flex gap-16">
      <div className="w-1/4">
        <div>
          <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co94j3.jpg" />
          <Rating className="mt-1" readOnly />
        </div>
      </div>
      <div>
        <h2 className="text-4xl">Marvel Rivals</h2>
        <p className="italic">released on Sep 15, 2015 by Marvel</p>
        <p className="mt-4">
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
        <div className="border rounded-md px-7 py-5 text-center mb-4">
          <h3>Your Rating</h3>
          <Rating size="large" />
        </div>
        <div className="mb-2">
          <h3>Platforms</h3>
          <div>
            <Chip label="Playstation" />
            <Chip label="Windows" />
            <Chip label="Xbox" />
          </div>
        </div>
        <div>
          <h3>Genres</h3>
          <div>
            <Chip label="Aventura" />
            <Chip label="Ação" />
          </div>
        </div>
      </div>
    </div>
  );
};
