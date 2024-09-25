import Up from "../../assets/like-facebook-social-media-hand-thumb-gesture-svgrepo-com.svg";
import Down from "../../assets/dislike-down-hand-thumb-facebook-social-media-svgrepo-com.svg";
import { levels } from "../../helpers/imc";

const Feedback = () => {
  return (
    <section className="w-full xl:w-2/3 h-full lg:h-2/4 p-2 gap-2 text-white">
      <div className=" gap-2 grid grid-cols-2 w-full h-full">
        {levels.map((level, index) => (
          <div
            key={index}
            className={`${level.color} rounded-xl flex flex-col items-center justify-around`}
          >
            {/* Usando o índice como chave */}
            <div className="p-2 bg-black/30 rounded-full">
              <img
                src={level.icon === "up" ? Up : Down}
                alt={level.title}
                className="w-14 h-14"
              />
            </div>
            <h2 className="text-3xl font-semibold">{level.title}</h2>
            <p className="text-sm font-semibold">{`IMC está entre ${level.imc[0]} e ${level.imc[1]}`}</p>{" "}
            {/* Exibindo os valores de IMC */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
