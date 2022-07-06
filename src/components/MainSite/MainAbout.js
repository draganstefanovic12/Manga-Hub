import { useState } from "react";
import yotsuba from "../../assets/yotsumainbackground/yotsumain.png";
import yotsubaClicked from "../../assets/yotsumainbackground/yotsuhurt.png";

const MainAbout = () => {
  const [yotsuClick, setYotsuClick] = useState(true);
  return (
    <div className="div-cont">
      {yotsuClick ? (
        <img
          onClick={() => {
            setYotsuClick(!yotsuClick);
          }}
          className="yotsu-main"
          src={yotsuba}
          alt="yotsu"
        />
      ) : (
        <img
          onClick={() => {
            setYotsuClick(!yotsuClick);
          }}
          className="yotsu-main"
          src={yotsubaClicked}
          alt="yotsu-hit"
        />
      )}
      <div className="text-cont">
        <h3>
          Created using MangaDEX API. Enjoy and have a good time reading your
          favorite mangas.
        </h3>
      </div>
    </div>
  );
};

export default MainAbout;
