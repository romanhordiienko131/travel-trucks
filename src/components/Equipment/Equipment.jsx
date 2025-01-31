import s from "./Equipment.module.css";

const Equipment = ({ name, type }) => {
  function geticon(iconName) {
    let icon = "";

    switch (iconName) {
      case "Transmission":
        icon = "/svg/diagram.svg";
        break;
      case "Engine":
        icon = "/svg/fuel-pump.svg";
        break;
      case "AC":
        icon = "/svg/wind.svg";
        break;
      case "Bathroom":
        icon = "/svg/shower.svg";
        break;
      case "Kitchen":
        icon = "/svg/cup-hot.svg";
        break;
      case "TV":
        icon = "/svg/tv.svg";
        break;
      case "Radio":
        icon = "/svg/radio.svg";
        break;
      case "Refrigerator":
        icon = "/svg/fridge.svg";
        break;
      case "Microwave":
        icon = "/svg/microwave.svg";
        break;
      case "Gas":
        icon = "/svg/gas-stove.svg";
        break;
      case "Water":
        icon = "/svg/water.svg";
    }

    return icon;
  }

  return (
    <div className={s.equipment}>
      <img src={geticon(name)} alt={name} width={20} height={20} />
      {type ? (
        <p className={(s.name, s.type)}>{type}</p>
      ) : (
        <p className={s.name}>{name}</p>
      )}
    </div>
  );
};

export default Equipment;
