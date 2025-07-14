const ramos = [
  // Primer año - 1 semestre
  { codigo: "BIMI030", nombre: "BIOLOGIA CELULAR", semestre: 1, abre: ["FARM101", "HIPA104", "FARM155"], requisitos: [] },
  { codigo: "CIAN040", nombre: "ZOOLOGIA Y ECOLOGIA APLICADA", semestre: 1, abre: ["CIAN141"], requisitos: [] },
  { codigo: "DYRE070", nombre: "EDUCACIÓN FÍSICA Y SALUD", semestre: 1, abre: [], requisitos: [] },
  { codigo: "ELECT12", nombre: "OFG 1", semestre: 1, abre: [], requisitos: [] },
  { codigo: "MATM003", nombre: "ELEMENTOS DE CALCULO", semestre: 1, abre: ["MEPR132"], requisitos: [] },
  { codigo: "MVET013", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA I", semestre: 1, abre: ["MVET053"], requisitos: [] },
  { codigo: "QUIM007", nombre: "QUIMICA GENERAL", semestre: 1, abre: [], requisitos: [] },

  // Primer año - 2 semestre
  { codigo: "ANAV051", nombre: "ANATOMIA VETERINARIA", semestre: 2, abre: ["ANAV140"], requisitos: [] },
  { codigo: "ANAV131", nombre: "EMBRIOLOGIA VETERINARIA", semestre: 2, abre: ["CIAN161"], requisitos: [] },
  { codigo: "ELECT13", nombre: "OFG 2", semestre: 2, abre: [], requisitos: [] },
  { codigo: "FARM101", nombre: "BIOQUIMICA VETERINARIA", semestre: 2, abre: ["BIMI165", "FARM151"], requisitos: ["BIMI030"] },
  { codigo: "HIPA104", nombre: "HISTOLOGIA", semestre: 2, abre: ["PANI142"], requisitos: ["BIMI030"] },
  { codigo: "MVET053", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA II", semestre: 2, abre: [], requisitos: ["MVET013"] },

  // ... sigue para los demás semestres, asignando `semestre` con el número correcto
];

// Objeto para llevar el estado de aprobado
const aprobado = new Set();

function crearRamoDiv(ramo) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.id = ramo.codigo;
  div.textContent = `${ramo.codigo} - ${ramo.nombre}`;
  div.onclick = () => toggleAprobado(ramo);
  return div;
}

function toggleAprobado(ramo) {
  const div = document.getElementById(ramo.codigo);

  // Si está bloqueado no se puede aprobar (porque requisitos no cumplidos)
  if (div.classList.contains("bloqueado") && !aprobado.has(ramo.codigo)) return;

  if (aprobado.has(ramo.codigo)) {
    aprobado.delete(ramo.codigo);
    div.classList.remove("aprobado");
  } else {
    aprobado.add(ramo.codigo);
    div.classList.add("aprobado");
  }

  actualizarEstados();
}

function actualizarEstados() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.codigo);
    const requisitosAprobados = ramo.requisitos.every(r => aprobado.has(r));

    if (requisitosAprobados) {
      div.classList.remove("bloqueado");
    } else {
      // Si no está aprobado, bloquear
      if (!aprobado.has(ramo.codigo)) div.classList.add("bloqueado");
    }
  });
}

function inicializarMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  // Agrupar por semestre
  const semestres = {};

  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) {
      const divSem = document.createElement("div");
      divSem.className = "semestre";
      divSem.id = "semestre-" + ramo.semestre;
      const h2 = document.createElement("h2");
      h2.textContent = `Semestre ${ramo.semestre}`;
      divSem.appendChild(h2);
      semestres[ramo.semestre] = divSem;
      contenedor.appendChild(divSem);
    }
    const divRamo = crearRamoDiv(ramo);
    semestres[ramo.semestre].appendChild(divRamo);
  });

  actualizarEstados();
}

document.addEventListener("DOMContentLoaded", inicializarMalla);
