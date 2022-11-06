import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MODELS } from "../../Data/Data";
import "./product.scss";
import Location from "../../assets/Icons/Location ";
import Phone from "../../assets/Icons/Phone";
import Mail from "../../assets/Icons/Mail";
import ReactGa from "react-ga";

const Product = () => {
  const baseURL = process.env.PUBLIC_URL + "../assets/logo/";
  const { id } = useParams();

  useEffect(() => {
    ReactGa.initialize("UA-141678075-1");
    console.log(1);
    ReactGa.pageview("/product");
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="product">
      {MODELS.map(
        (model, i) =>
          model.id === Number(id) && (
            <div className="description" key={i}>
              <img src={baseURL + "logo.jpg"} alt="" />
              <p>{model.description}</p>
            </div>
          )
      )}
      <div className="contacts">
        <div>
          <Location />
          <p>11301 Dismantle Ct, Rancho Cordova, CA 95742</p>
        </div>
        <div>
          <Phone />
          <p>+1 916-638-2664</p>
        </div>
        <div>
          <Mail />
          <p>gkazaryan04@yahoo.com</p>
        </div>
      </div>
      <div className="slider">
        <Slider {...settings}>
          {MODELS.map(
            (model) =>
              model.id === Number(id) &&
              model.imgs?.map((img, i) => (
                <img src={baseURL + img + ".png"} key={i} alt="" />
              ))
          )}
        </Slider>
      </div>
    </div>
  );
};

export default memo(Product);
