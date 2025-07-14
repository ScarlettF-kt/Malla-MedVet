// script.js

const ramos = [
  // Primer año - 1 semestre
  { codigo: "BIMI030", nombre: "BIOLOGIA CELULAR", abre: ["FARM101", "HIPA104", "FARM155"], requisitos: [], semestre: 1 },
  { codigo: "CIAN040", nombre: "ZOOLOGIA Y ECOLOGIA APLICADA", abre: ["CIAN141"], requisitos: [], semestre: 1 },
  { codigo: "DYRE070", nombre: "EDUCACIÓN FÍSICA Y SALUD", abre: [], requisitos: [], semestre: 1 },
  { codigo: "ELECT12", nombre: "OFG 1", abre: [], requisitos: [], semestre: 1 },
  { codigo: "MATM003", nombre: "ELEMENTOS DE CALCULO", abre: ["MEPR132"], requisitos: [], semestre: 1 },
  { codigo: "MVET013", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA I", abre: ["MVET053"], requisitos: [], semestre: 1 },
  { codigo: "QUIM007", nombre: "QUIMICA GENERAL", abre: [], requisitos: [], semestre: 1 },

  // Segundo año - 2 semestre
  { codigo: "ANAV051", nombre: "ANATOMIA VETERINARIA", abre: ["ANAV140"], requisitos: [], semestre: 2 },
  { codigo: "ANAV131", nombre: "EMBRIOLOGIA VETERINARIA", abre: ["CIAN161"], requisitos: [], semestre: 2 },
  { codigo: "ELECT13", nombre: "OFG 2", abre: [], requisitos: [], semestre: 2 },
  { codigo: "FARM101", nombre: "BIOQUIMICA VETERINARIA", abre: ["BIMI165", "FARM151"], requisitos: ["BIMI030"], semestre: 2 },
  { codigo: "HIPA104", nombre: "HISTOLOGIA", abre: ["PANI142"], requisitos: ["BIMI030"], semestre: 2 },
  { codigo: "MVET053", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA II", abre: [], requisitos: ["MVET013"], semestre: 2 }
];

function crearRamoHTML(ramo) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.id = ramo.codigo;
  div.innerHTML = `
    <div class="nombre">${ramo.nombre}</div>
    <div class="codigo">${ramo.codigo}</div>
  `;
  div.onclick = () => aprobarRamo(ramo);
  return div;
}

function aprobarRamo(ramo) {
  const div = document.getElementById(ramo.codigo);
  if (div.classList.contains("aprobado")) return;

  div.classList.add("aprobado");

  ramos.forEach(r => {
    if (r.requisitos.includes(ramo.codigo)) {
      const desbloqueado = r.requisitos.every(req => document.getElementById(req)?.classList.contains("aprobado"));
      if (desbloqueado) {
        document.getElementById(r.codigo)?.classList.remove("bloqueado");
      }
    }
  });
}

function inicializarMalla() {
  const contenedor = document.getElementById("malla");

  // Agrupar ramos por semestre
  const semestres = {};
  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
    semestres[ramo.semestre].push(ramo);
  });

  Object.keys(semestres).sort((a, b) => a - b).forEach(num => {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>Semestre ${num}</h2>`;

    semestres[num].forEach(ramo => {
      const div = crearRamoHTML(ramo);
      if (ramo.requisitos.length === 0) div.classList.remove("bloqueado");
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });
}

document.addEventListener("DOMContentLoaded", inicializarMalla);
