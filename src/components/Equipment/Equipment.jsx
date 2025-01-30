import s from "./Equipment.module.css";

const Equipment = ({ name, type }) => {
  function getIconUrl(iconName) {
    let iconUrl = "";

    switch (iconName) {
      case "Transmission":
        iconUrl = "/svg/diagram.svg";
        break;
      case "Engine":
        iconUrl = "/svg/fuel-pump.svg";
        break;
      case "AC":
        iconUrl = "/svg/wind.svg";
        break;
      case "Bathroom":
        iconUrl = "/svg/shower.svg";
        break;
      case "Kitchen":
        iconUrl = "/svg/cup-hot.svg";
        break;
      case "TV":
        iconUrl = "/svg/tv.svg";
        break;
      case "Radio":
        iconUrl = "/svg/radio.svg";
        break;
      case "Refrigerator":
        iconUrl = "/svg/fridge.svg";
        break;
      case "Microwave":
        iconUrl = "/svg/microwave.svg";
        break;
      case "Gas":
        iconUrl = "/svg/gas-stove.svg";
        break;
      case "Water":
        iconUrl = "/svg/water.svg";
    }

    return iconUrl;
  }

  return (
    <div className={s.equipment}>
      <img src={getIconUrl(name)} alt={name} width={20} height={20} />
      {type ? (
        <p className={(s.name, s.type)}>{type}</p>
      ) : (
        <p className={s.name}>{name}</p>
      )}
    </div>
  );
};

export default Equipment;
