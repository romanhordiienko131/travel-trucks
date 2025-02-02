import s from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <form className={s.form}>
      <div className={s.text}>
        <h3 className={s.heading}>Book your campervan now</h3>
        <p className={s.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={s.inputs}>
        <input className={s.input} type="text" placeholder="Name*" />
        <input className={s.input} type="email" placeholder="Email*" />
        <input className={s.input} type="text" placeholder="Booking date*" />
        <textarea
          className={`${s.input} ${s.textarea}`}
          placeholder="Comment"
        ></textarea>
      </div>
      <button className={s.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookingForm;
