import Up from "../../assets/like-facebook-social-media-hand-thumb-gesture-svgrepo-com.svg";
import Down from "../../assets/dislike-down-hand-thumb-facebook-social-media-svgrepo-com.svg";
import Arrow from "../../assets/arrow-direction-right-pointer-next-svgrepo-com.svg";
import { Level } from "../../helpers/imc";

type FeedbackProps = {
  level: Level;
  handleReset: () => void;
};

const FeedbackOnly: React.FC<FeedbackProps> = ({ level, handleReset }) => {
  return (
    <div className="w-full xl:w-2/3 h-full lg:h-2/4 p-2 gap-2 text-white">
      <div
        className={`relative w-full h-full ${level.color} rounded-xl flex flex-col items-center justify-around`}
      >
        <figure className="flex flex-col gap-5 items-center justify-center">
          <button
            className="p-2 bg-black/20 rounded-full"
            onClick={handleReset}
          >
            <img
              src={Arrow}
              alt=""
              className="absolute w-20 xl:h-28 h-20 xl:w-28 rotate-90 xl:rotate-180 -bottom-12 xl:-left-20 xl:top-[40%] hover:bg-black/10 rounded-full cursor-pointer"
            />
            <img
              src={level.icon === "up" ? Up : Down}
              alt={level.title}
              className="w-14 h-14"
            />
          </button>
          <div className="flex flex-col gap-5 items-center">
            <h2 className="text-2xl md:text-4xl font-semibold">
              {level.title}
            </h2>
            <p className="text-sm md:text-lg font-semibold">{`Seu IMC é de ${level.yourImc} Kg/m²`}</p>
          </div>
        </figure>
        <p className="text-sm md:text-lg font-semibold">{`IMC está entre ${level.imc[0]} e ${level.imc[1]}`}</p>
      </div>
    </div>
  );
};

export default FeedbackOnly;
