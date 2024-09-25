export type Level = {
  title: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
  color: string;
};

// Definindo níveis de IMC
// Definindo níveis de IMC
export const levels: Level[] = [
  { title: "Magreza", icon: "down", color: "bg-zinc-500", imc: [0, 18.5] },
  { title: "Normal", icon: "up", color: "bg-green-500", imc: [18.5, 24.9] },
  { title: "Sobrepeso", icon: "down", color: "bg-yellow-500", imc: [24.9, 30] }, // Corrigido "yellow"
  { title: "Obesidade", icon: "down", color: "bg-red-500", imc: [30, 99] },
];

// Função para calcular IMC
export const calculateImc = (altura: number, peso: number) => {
  // Corrigindo o cálculo do IMC
  const imc = peso / (altura * altura);

  // Verificando em qual nível o IMC se encaixa
  for (const i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      levels[i].yourImc = parseFloat(imc.toFixed(2)); // Atualizando o IMC no nível
      return levels[i];
    }
  }
  return null; // Caso não encontre um nível adequado
};
