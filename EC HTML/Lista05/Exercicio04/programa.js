const tipoPaciente = document.getElementById("idInTipoPaciente");
const resultado = document.getElementById("idOnResultado");

function calcularDosagem(tipoPaciente) {
      let dosagem = 0;
      let calculoGotas = 0;
   switch (tipoPaciente) {
       case 1:
         dosagem = 600;
         calculoGotas = (dosagem / 400) * 15;
         return "Dosagem: " + dosagem + "mg" + " Gotas: " + calculoGotas;
       case 2:
         dosagem = 1600;
         calculoGotas = (dosagem / 400) * 15;
         return "Dosagem: " + dosagem + "mg" + " Gotas: " + calculoGotas;
       case 3:
           dosagem = 4600;
           calculoGotas = (dosagem / 400) * 15;
           return "Dosagem: " + dosagem + "mg" + " Gotas: " + calculoGotas;
       case 4:
           dosagem = 2450;
           calculoGotas = (dosagem / 400) * 15;
           return "Dosagem: " + dosagem + "mg" + " Gotas: " + calculoGotas;
       default:
           return "Tipo de paciente inválido";
   }
}

function eventoBtnCalcularDosagem() {
    const valorTipoPaciente = Number(tipoPaciente.value);
    const valorFinal = calcularDosagem(valorTipoPaciente);
    resultado.innerText = valorFinal;
}
