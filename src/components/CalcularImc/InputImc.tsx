import React from "react";

// Definindo os tipos das propriedades
type InputImcProps = {
  inputPeso: number;
  setInputPeso: (peso: number) => void;
  inputAltura: number;
  setInputAltura: (altura: number) => void;
};

// Componente InputImc
const InputImc: React.FC<InputImcProps> = ({
  setInputPeso,
  setInputAltura,
  inputAltura,
  inputPeso,
}) => {
  return (
    <div className="flex flex-col w-full">
      <input
        value={inputAltura > 0 ? inputAltura : ""}
        type="number"
        placeholder="Digite a sua altura. Ex 1.5 (em métros)"
        className="border-b outline-none p-2 my-3"
        onChange={({ target }) => setInputAltura(parseFloat(target.value) || 0)}
      />
      <input
        value={inputPeso > 0 ? inputPeso : ""}
        type="number"
        placeholder="Digite o seu peso. Ex 75.3 (em Kg)"
        className="border-b outline-none p-2 my-3"
        onChange={({ target }) => setInputPeso(parseFloat(target.value) || 0)}
      />
    </div>
  );
};

export default InputImc;
