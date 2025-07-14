const ramos = [
  // Primer año - 1 semestre
  { codigo: "BIMI030", nombre: "BIOLOGIA CELULAR", abre: ["FARM101", "HIPA104", "FARM155"], requisitos: [] },
  { codigo: "CIAN040", nombre: "ZOOLOGIA Y ECOLOGIA APLICADA", abre: ["CIAN141"], requisitos: [] },
  { codigo: "DYRE070", nombre: "EDUCACIÓN FÍSICA Y SALUD", abre: [], requisitos: [] },
  { codigo: "ELECT12", nombre: "OFG 1", abre: [], requisitos: [] },
  { codigo: "MATM003", nombre: "ELEMENTOS DE CALCULO", abre: ["MEPR132"], requisitos: [] },
  { codigo: "MVET013", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA I", abre: ["MVET053"], requisitos: [] },
  { codigo: "QUIM007", nombre: "QUIMICA GENERAL", abre: [], requisitos: [] },

  // Primer año - 2 semestre
  { codigo: "ANAV051", nombre: "ANATOMIA VETERINARIA", abre: ["ANAV140"], requisitos: [] },
  { codigo: "ANAV131", nombre: "EMBRIOLOGIA VETERINARIA", abre: ["CIAN161"], requisitos: [] },
  { codigo: "ELECT13", nombre: "OFG 2", abre: [], requisitos: [] },
  { codigo: "FARM101", nombre: "BIOQUIMICA VETERINARIA", abre: ["BIMI165", "FARM151"], requisitos: ["BIMI030"] },
  { codigo: "HIPA104", nombre: "HISTOLOGIA", abre: ["PANI142"], requisitos: ["BIMI030"] },
  { codigo: "MVET053", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA II", abre: [], requisitos: ["MVET013"] },

  // Segundo año - 3 semestre
  { codigo: "ANAV140", nombre: "MORFOLOGÍA VETERINARIA APLICADA", abre: ["CIAN161"], requisitos: ["ANAV051", "ANAV131"] },
  { codigo: "BIMI165", nombre: "MICROBIOLOGÍA GENERAL", abre: ["MEPR235"], requisitos: ["FARM101"] },
  { codigo: "CIAN141", nombre: "ZOOTECNIA", abre: ["CIAN113", "CIAN243"], requisitos: ["CIAN040"] },
  { codigo: "FARM151", nombre: "FISIOLOGÍA VETERINARIA", abre: ["FARM202"], requisitos: ["FARM101"] },
  { codigo: "FARM155", nombre: "INMUNOLOGÍA", abre: ["PANI142"], requisitos: ["HIPA104"] },
  { codigo: "MEPR132", nombre: "BIOESTADISTICA", abre: ["CIAN240", "CIAN244"], requisitos: ["MATM003"] },

  // Segundo año - 4 semestre
  { codigo: "CIAN113", nombre: "ETOLOGIA Y BIENESTAR ANIMAL", abre: [], requisitos: ["CIAN141"] },
  { codigo: "CIAN161", nombre: "FISIOLOGIA REPRODUCTIVA", abre: ["CIAN262", "CIAN233"], requisitos: ["ANAV140", "ANAV131"] },
  { codigo: "CIDI023", nombre: "INGLES I", abre: [], requisitos: [] },
  { codigo: "FARM202", nombre: "FISIOPATOLÓGIA VETERINARIA", abre: ["FARM211", "PANI238", "HOVE272"], requisitos: ["FARM151", "PANI142"] },
  { codigo: "MEPR235", nombre: "ENFERMEDADES INFECCIOSAS DE LOS ANIMALES DOMÉSTICOS", abre: [], requisitos: ["BIMI165"] },
  { codigo: "PANI142", nombre: "PATOLOGÍA GENERAL", abre: ["PANI238", "PANI239"], requisitos: ["HIPA104", "FARM155"] },

  // Tercer año - 5 semestre
  { codigo: "CIAN243", nombre: "NUTRICIÓN Y ALIMENTACIÓN", abre: ["CIAN249", "MEPR200", "CIAN246"], requisitos: ["CIAN141"] },
  { codigo: "CIAN262", nombre: "REPRODUCCION ANIMAL I", abre: ["CIAN246"], requisitos: ["CIAN161"] },
  { codigo: "CIDI123", nombre: "INGLES II", abre: [], requisitos: ["CIDI023"] },
  { codigo: "FARM211", nombre: "FARMACOLOGIA VETERINARIA", abre: ["HOVE215", "HOVE278"], requisitos: ["FARM202"] },
  { codigo: "MVET102", nombre: "PRÁCTICA BÁSICA", abre: ["MEPR209"], requisitos: ["BIMI030", "CIAN040", "DYRE070", "ELECT12", "MATM003", "MVET013", "QUIM007", "ANAV051", "ANAV131", "ELECT13", "FARM101", "HIPA104", "MVET053", "ANAV140", "BIMI165", "CIAN141", "FARM151", "FARM155", "MEPR132", "CIAN113", "CIAN161", "FARM202", "MEPR235", "PANI142", "CIAN243", "CIAN262", "CIDI123", "FARM211", "PANI238", "PANI239"] },
  { codigo: "PANI238", nombre: "ENFERMEDADES PARASITARIAS", abre: ["PANI254", "MEPR209", "MEPR216"], requisitos: ["FARM202", "PANI142"] },
  { codigo: "PANI239", nombre: "PATOLOGIA ESPECIAL E INMUNOPATOLOGIA", abre: ["MEPR200", "PANI254", "HOVE272", "HOVE278", "HOVE292", "MEPR216"], requisitos: ["PANI142", "CIAN243", "FARM211"] },

  // Tercer año - 6 semestre
  { codigo: "CIAN233", nombre: "REPRODUCCIÓN ANIMAL II", abre: [], requisitos: ["CIAN161"] },
  { codigo: "CIAN240", nombre: "ECONOMIA Y FUNDAMENTOS DE ADMINISTRACION PECUARIA", abre: ["CIAN248"], requisitos: ["MEPR132"] },
  { codigo: "CIAN249", nombre: "PRODUCCIÓN DE NO RUMIANTES", abre: ["CIAN244", "CIAN235"], requisitos: ["CIAN243"] },
  { codigo: "CIDI223", nombre: "INGLES III", abre: [], requisitos: ["CIDI123"] },
  { codigo: "MEPR200", nombre: "EPIDEMIOLOGÍA VETERINARIA", abre: ["MEPR209", "MEPR216"], requisitos: ["CIAN243", "PANI239"] },
  { codigo: "PANI253", nombre: "ACUICULTURA Y ENFERMEDADES DE PECES", abre: [], requisitos: [] },
  { codigo: "PANI254", nombre: "ENFERMEDADES DE AVES", abre: [], requisitos: ["PANI238", "PANI239"] },

  // Cuarto año - 7 semestre
  { codigo: "CIAN244", nombre: "GENETICA PECUARIA", abre: [], requisitos: ["MEPR132", "CIAN249"] },
  { codigo: "CIAN246", nombre: "PRODUCCIÓN DE RUMIANTES I", abre: ["CIAN235", "CIAN248"], requisitos: ["CIAN243", "CIAN262"] },
  { codigo: "ELECT100", nombre: "OPTATIVO DE ESPECIALIZACIÓN I", abre: [], requisitos: ["CIAN249", "CIAN233", "CIAN240", "MEPR200", "PANI254"] },
  { codigo: "HOVE215", nombre: "CIRUGÍA GENERAL Y ANESTESIOLOGÍA VETERINARIA", abre: ["HOVE293"], requisitos: ["FARM211"] },
  { codigo: "HOVE272", nombre: "EXPLORACIÓN CLINICA", abre: ["HOVE279", "HOVE293"], requisitos: ["FARM202", "PANI239"] },
  { codigo: "HOVE278", nombre: "MEDICINA INTERNA I", abre: ["HOVE294", "HOVE295", "HOVE296"], requisitos: ["FARM211", "PANI239"] },
  { codigo: "MEPR209", nombre: "PRÁCTICA TRANSFERENCIA TECNOLÓGICA Y SERVICIO VETERINARIO A LA SOCIEDAD", abre: [], requisitos: ["MVET102", "PANI238", "MEPR200"] },

  // Cuarto año - 8 semestre
  { codigo: "CIAN235", nombre: "PRODUCTOS ANIMALES", abre: ["CIAN255"], requisitos: ["CIAN249", "CIAN246"] },
  { codigo: "CIAN248", nombre: "PRODUCCIÓN DE RUMIANTES II", abre: ["CIAN255"], requisitos: ["CIAN246", "CIAN240"] },
  { codigo: "ELECT101", nombre: "OPTATIVO DE ESPECIALIZACIÓN II", abre: [], requisitos: ["CIAN249", "CIAN233", "CIAN240", "MEPR200", "PANI254"] },
  { codigo: "HOVE279", nombre: "MÉTODOS COMPLEMENTARIOS DE DIAGNÓSTICO", abre: ["HOVE294", "HOVE295", "HOVE296"], requisitos: ["HOVE272"] },
  { codigo: "HOVE292", nombre: "MEDICINA INTERNA II", abre: ["HOVE294", "HOVE295", "HOVE296"], requisitos: ["PANI239"] },
  { codigo: "HOVE293", nombre: "PATOLOGÍA QUIRÚRGICA Y CIRUGÍA ESPECIAL", abre: ["HOVE294", "HOVE295", "HOVE296"], requisitos: ["HOVE215", "HOVE272"] },
  { codigo: "MEPR216", nombre: "CONTROL SANITARIO E INOCUIDAD DE ALIMENTOS", abre: ["MEPR210", "MVET207"], requisitos: ["PANI238", "MEPR200", "PANI239"] },

  // Quinto año - 9 semestre
  { codigo: "CIAN255", nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", abre: [], requisitos: ["CIAN235", "CIAN248"] },
  { codigo: "ELECT112", nombre: "OPTATIVO DE PROFUNDIZACIÓN I", abre: [], requisitos: ["CIAN235", "HOVE278"] },
  { codigo: "HOVE294", nombre: "CLÍNICA DE RUMIANTES", abre: ["HOVE297"], requisitos: ["HOVE278", "HOVE279", "HOVE292", "HOVE293"] },
  { codigo: "HOVE295", nombre: "CLÍNICA DE EQUINOS", abre: ["HOVE297"], requisitos: ["HOVE278", "HOVE279", "HOVE292", "HOVE293"] },
  { codigo: "HOVE296", nombre: "CLÍNICA DE PEQUEÑOS ANIMALES", abre: ["HOVE297"], requisitos: ["HOVE278", "HOVE279", "HOVE292", "HOVE293"] },
  { codigo: "MEPR210", nombre: "SALUD PÚBLICA VETERINARIA", abre: [], requisitos: ["MEPR216"] },

  // Quinto año - 10 semestre
  { codigo: "ELECT116", nombre: "OPTATIVO DE PROFUNDIZACIÓN II", abre: [], requisitos: ["HOVE296"] },
  { codigo: "HOVE297", nombre: "INTERNADO CLÍNICO", abre: [], requisitos: ["HOVE294", "HOVE295", "HOVE296"] },
  { codigo: "MVET207", nombre: "PRACTICA PROFESIONAL DE INSPECCION VETERINARIA DE ALIMENTOS", abre: [], requisitos: ["MEPR216"] },
  { codigo: "MVET208", nombre: "PRÁCTICA PROFESIONAL", abre: [], requisitos: ["HOVE297"] },
  { codigo: "MVET299", nombre: "PROYECTO DE TÍTULO (a)", abre: [], requisitos: ["HOVE297"] }
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
  ramos.forEach(ramo => {
    const div = crearRamoHTML(ramo);
    if (ramo.requisitos.length === 0) div.classList.remove("bloqueado");
    contenedor.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", inicializarMalla);
