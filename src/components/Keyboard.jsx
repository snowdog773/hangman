import Key from "./Key";
import { alphabet } from "../utils/constants";

const Keyboard = () => {
  return (
    <>
      <div className="keyboard">
        {alphabet.map((e, i) => {
          return <Key letter={e} key={i} />;
        })}
      </div>
    </>
  );
};

export default Keyboard;
