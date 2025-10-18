import classImg from "../../../assets/class.png";
import playGround from "../../../assets/playground.png";
import swimming from "../../../assets/swimming.png";
const QJon = () => {
  return (
    <div className="bg-[#F3F3F3] p-5 my-5">
      <h1 className="text-xl  font-semibold">Q-zon</h1>
      <div className="flex flex-col justify-center gap-3 items-center ">
        <div>
          <img src={classImg} alt="" />
        </div>

        <div>
          <img src={playGround} alt="" />
        </div>
        <div>
          <img src={swimming} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QJon;
