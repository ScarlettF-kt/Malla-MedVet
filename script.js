const ramos = [
  // Primer año - 1 semestre
  { codigo: "BIMI030", nombre: "BIOLOGIA CELULAR", abre: ["FARM101", "HIPA104", "FARM155"], requisitos: [], semestre: 1 },
  { codigo: "CIAN040", nombre: "ZOOLOGIA Y ECOLOGIA APLICADA", abre: ["CIAN141"], requisitos: [], semestre: 1 },
  { codigo: "DYRE070", nombre: "EDUCACIÓN FÍSICA Y SALUD", abre: [], requisitos: [], semestre: 1 },
  { codigo: "ELECT12", nombre: "OFG 1", abre: [], requisitos: [], semestre: 1 },
  { codigo: "MATM003", nombre: "ELEMENTOS DE CALCULO", abre: ["MEPR132"], requisitos: [], semestre: 1 },
  { codigo: "MVET013", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA I", abre: ["MVET053"], requisitos: [], semestre: 1 },
  { codigo: "QUIM007", nombre: "QUIMICA GENERAL", abre: [], requisitos: [], semestre: 1 },

  // Primer año - 2 semestre
  { codigo: "ANAV051", nombre: "ANATOMIA VETERINARIA", abre: ["ANAV140"], requisitos: [], semestre: 2 },
  { codigo: "ANAV131", nombre: "EMBRIOLOGIA VETERINARIA", abre: ["CIAN161"], requisitos: [], semestre: 2 },
  { codigo: "ELECT13", nombre: "OFG 2", abre: [], requisitos: [], semestre: 2 },
  { codigo: "FARM101", nombre: "BIOQUIMICA VETERINARIA", abre: ["BIMI165", "FARM151"], requisitos: ["BIMI030"], semestre: 2 },
  { codigo: "HIPA104", nombre: "HISTOLOGIA", abre: ["PANI142"], requisitos: ["BIMI030"], semestre: 2 },
  { codigo: "MVET053", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA II", abre: [], requisitos: ["MVET013"], semestre: 2 },

  // Segundo año - 3 semestre
  { codigo: "ANAV140", nombre: "MORFOLOGÍA VETERINARIA APLICADA", abre: ["CIAN161"], requisitos: ["ANAV051"], semestre: 3 },
  { codigo: "BIMI165", nombre: "MICROBIOLOGÍA GENERAL", abre: ["MEPR235"], requisitos: ["FARM101"], semestre: 3 },
  { codigo: "CIAN141", nombre: "ZOOTECNIA", abre: ["CIAN113", "CIAN243"], requisitos: ["CIAN040"], semestre: 3 },
  { codigo: "FARM151", nombre: "FISIOLOGÍA VETERINARIA", abre: ["FARM202"], requisitos: ["FARM101"], semestre: 3 },
  { codigo: "FARM155", nombre: "INMUNOLOGÍA", abre: ["PANI142"], requisitos: ["BIMI030"], semestre: 3 },
  { codigo: "MEPR132", nombre: "BIOESTADISTICA", abre: ["CIAN240", "CIAN244"], requisitos: ["MATM003"], semestre: 3 },

  // Segundo año - 4 semestre
  { codigo: "CIAN113", nombre: "ETOLOGIA Y BIENESTAR ANIMAL", abre: [], requisitos: ["CIAN141"], semestre: 4 },
  { codigo: "CIAN161", nombre: "FISIOLOGIA REPRODUCTIVA", abre: ["CIAN262", "CIAN233"], requisitos: ["ANAV140", "ANAV131"], semestre: 4 },
  { codigo: "CIDI023", nombre: "INGLES I", abre: ["CIDI123"], requisitos: [], semestre: 4 },
  { codigo: "FARM202", nombre: "FISIOPATOLOGÍA VETERINARIA", abre: ["FARM211", "PANI238", "HOVE272"], requisitos: ["FARM151"], semestre: 4 },
  { codigo: "MEPR235", nombre: "ENFERMEDADES INFECCIOSAS", abre: [], requisitos: ["BIMI165"], semestre: 4 },
  { codigo: "PANI142", nombre: "PATOLOGÍA GENERAL", abre: ["PANI238", "PANI239"], requisitos: ["HIPA104", "FARM155"], semestre: 4 },

  // (Continúa desde 5º a 10º semestre según malla completa...)
];

function crearRamoHTML(ramo) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.id = ramo.codigo;
  div.innerHTML = `<div class="nombre">${ramo.nombre}</div><div class="codigo">${ramo.codigo}</div>`;
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
  const semestres = {};
  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
    semestres[ramo.semestre].push(ramo);
  });

  Object.keys(semestres).sort((a, b) => a - b).forEach(num => {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>${num}° Semestre</h2>`;

    semestres[num].forEach(ramo => {
      const div = crearRamoHTML(ramo);
      if (ramo.requisitos.length === 0) div.classList.remove("bloqueado");
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });
}

document.addEventListener("DOMContentLoaded", inicializarMalla);
