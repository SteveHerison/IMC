import { useState } from "react";
import Imc from "./components/Imc/Imc";
import Feedback from "./components/ImcFeedback/Feedback";
import { Level, calculateImc } from "./helpers/imc";
import FeedbackOnly from "./components/ImcFeedback/FeedbackOnly";

function App() {
  const [feedback, setFeedback] = useState<Level | null>(null);
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  // Função para calcular o IMC e atualizar o estado
  const handleCalc = (altura: number, peso: number) => {
    if (!altura || !peso) {
      alert("Preencha todos os campos");
      setFeedback(null); // Limpa o feedback se os campos não estiverem preenchidos
      return;
    }

    const result = calculateImc(altura, peso);
    setFeedback(result);
  };

  // Função para resetar o estado e os inputs
  const handleReset = () => {
    setFeedback(null); // Reseta o feedback
    setAltura(0); // Reseta a altura
    setPeso(0); // Reseta o peso
  };

  return (
    <main className="w-screen h-screen container mx-auto flex justify-center items-center">
      <section className="flex flex-col lg:flex-row-reverse justify-between items-center w-full h-full lg:gap-20">
        <figure className="flex justify-center items-center lg:w-1/2 w-full h-1/2 lg:h-full">
          {feedback ? (
            <FeedbackOnly level={feedback} handleReset={handleReset} />
          ) : (
            <Feedback />
          )}
        </figure>
        <figure className="flex justify-center items-center lg:w-1/2 w-full lg:h-1/2">
          <Imc
            handleCalc={handleCalc}
            inputAltura={altura}
            setInputAltura={setAltura}
            inputPeso={peso}
            setInputPeso={setPeso}
            level={feedback}
          />
        </figure>
      </section>
    </main>
  );
}

export default App;
