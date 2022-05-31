import { memo } from "react";
import { Link } from "react-router-dom";
import { MODELS } from "../../Data/Data";
import "./models.scss";

const Models = () => {
  const baseURL = process.env.PUBLIC_URL + "./assets/logo/";

  return (
    <div className="models container">
      {MODELS.map((item, i) => (
        <Link to={"product/" + item.id} key={i}>
          <img src={`${baseURL + item.img}.png`} alt="" className="item" />
        </Link>
      ))}
    </div>
  );
};

export default memo(Models);
