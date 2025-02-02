import s from "./CamperGallery.module.css";

const CamperGallery = ({ images }) => {
  return (
    <ul className={s.list}>
      {images.map((image, index) => (
        <li className={s.item} key={index}>
          <img className={s.image} src={image.original} alt="Camper" />
        </li>
      ))}
    </ul>
  );
};

export default CamperGallery;
