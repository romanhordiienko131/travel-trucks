import s from "./EquipmentList.module.css";
import Equipment from "../Equipment/Equipment";

const EquipmentList = ({ camper }) => {
  const transmissionAndEngine = [
    {
      name: "Transmission",
      type: camper.transmission,
    },
    {
      name: "Engine",
      type: camper.engine,
    },
  ];

  const camperEquipment = [
    { name: "AC", condition: camper.AC },
    { name: "Bathroom", condition: camper.bathroom },
    { name: "Kitchen", condition: camper.kitchen },
    { name: "TV", condition: camper.TV },
    { name: "Radio", condition: camper.radio },
    { name: "Refrigerator", condition: camper.refrigerator },
    { name: "Microwave", condition: camper.microwave },
    { name: "Gas", condition: camper.gas },
    { name: "Water", condition: camper.water },
  ];

  return (
    <ul className={s.list}>
      {transmissionAndEngine.map(({ name, type }, index) => (
        <li key={index}>
          <Equipment name={name} type={type} />
        </li>
      ))}
      {camperEquipment.map(({ name, condition }, index) =>
        condition ? (
          <li key={index + camperEquipment.length}>
            <Equipment name={name} />
          </li>
        ) : null
      )}
    </ul>
  );
};

export default EquipmentList;
