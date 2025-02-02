import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <ClipLoader
      color={"#E44848"}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
