import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MODELS } from "../../Data/Data";
import "./models.scss";

const baseURL = process.env.PUBLIC_URL + "./assets/logo/";

const Models = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const models = MODELS.sort((a, b) => a.img.localeCompare(b.img));
    setModels(models);
  }, []);

  return (
    <div className="models container">
      {models.map((item, i) => (
        <Link to={"product/" + item.id} key={i}>
          <img src={`${baseURL + item.img}.png`} alt="" className="item" />
        </Link>
      ))}
    </div>
  );
};

export default memo(Models);
