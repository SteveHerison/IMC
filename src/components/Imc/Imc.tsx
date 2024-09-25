import InputImc from "../CalcularImc/InputImc";
import { Level } from "../../helpers/imc"; // Assegure-se de que o Level está importado

// Definição do tipo para as props que o Imc recebe
type ImcProps = {
  handleCalc: (altura: number, peso: number) => void;
  inputAltura: number;
  setInputAltura: (altura: number) => void;
  inputPeso: number;
  setInputPeso: (peso: number) => void;
  level: Level | null; // Adicione esta linha
};

const Imc: React.FC<ImcProps> = ({
  handleCalc,
  inputAltura,
  setInputAltura,
  inputPeso,
  setInputPeso,
  level,
}) => {
  const isDisabled = !!level; // O botão é desabilitado se houver feedback

  return (
    <section className="w-full h-full p-2 pb-10">
      <figure className="flex flex-col justify-around gap-10 lg:justify-around items-center h-full">
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex justify-start w-full">
            <p className="bg-blue-600 px-4 text-white font-semibold text-start">
              IMC
            </p>
          </div>
          <h2 className="text-3xl">Calcule o seu IMC.</h2>
          <p className="text-center">
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial da Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
        </div>

        <InputImc
          inputPeso={inputPeso}
          setInputPeso={setInputPeso}
          inputAltura={inputAltura}
          setInputAltura={setInputAltura}
        />

        <button
          disabled={isDisabled} // Usa isDisabled para habilitar/desabilitar
          className={`${
            isDisabled
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700/95"
          } text-white text-xl p-2 w-full rounded-xl`}
          onClick={() => handleCalc(inputAltura, inputPeso)}
        >
          Calcular
        </button>
      </figure>
    </section>
  );
};

export default Imc;
