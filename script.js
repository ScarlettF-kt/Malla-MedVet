<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Malla Curricular Medicina Veterinaria</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background: #f9f9f9;
  }
  h1, h2 {
    color: #2c3e50;
  }
  section.semestre {
    background: white;
    padding: 15px 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 0 6px #ccc;
  }
  ul.materias {
    list-style: none;
    padding-left: 0;
  }
  ul.materias li {
    padding: 6px 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    position: relative;
  }
  ul.materias li:last-child {
    border-bottom: none;
  }
  ul.materias li:hover {
    background-color: #dff0d8;
  }
  /* Tooltip oculto por defecto */
  ul.materias li .tooltip {
    visibility: hidden;
    background-color: #333;
    color: #fff;
    text-align: left;
    border-radius: 6px;
    padding: 5px 10px;
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 105%;
    transform: translateY(-50%);
    width: max-content;
    max-width: 320px;
    font-size: 0.9em;
    transition: visibility 0.2s ease-in-out;
    box-shadow: 0 0 8px rgba(0,0,0,0.3);
  }
</style>
</head>
<body>

<h1>Malla Curricular Medicina Veterinaria</h1>

<!-- Primer Año -->
<section>
  <h2>Primer Año</h2>

  <section class="semestre">
    <h3>1er Semestre</h3>
    <ul class="materias">
      <li>
        BIMI030 - BIOLOGÍA CELULAR
        <span class="tooltip">Abre: FARM101 - BIOQUÍMICA VETERINARIA, HIPA104 – HISTOLOGÍA, FARM155 - INMUNOLOGÍA</span>
      </li>
      <li>
        CIAN040 - ZOOLOGÍA Y ECOLOGÍA APLICADA
        <span class="tooltip">Abre: CIAN141 – ZOOTECNIA</span>
      </li>
      <li>DYRE070 - EDUCACIÓN FÍSICA Y SALUD</li>
      <li>ELECT12 - OFG 1</li>
      <li>
        MATM003 - ELEMENTOS DE CÁLCULO
        <span class="tooltip">Abre: MEPR132 - BIOESTADÍSTICA</span>
      </li>
      <li>
        MVET013 - PRÁCTICA INTRODUCCIÓN A LA MEDICINA VETERINARIA I
        <span class="tooltip">Abre: MVET053 - PRÁCTICA INTRODUCCIÓN A LA MEDICINA VETERINARIA II</span>
      </li>
      <li>QUIM007 - QUÍMICA GENERAL</li>
    </ul>
  </section>

  <section class="semestre">
    <h3>2do Semestre</h3>
    <ul class="materias">
      <li>
        ANAV051 - ANATOMÍA VETERINARIA
        <span class="tooltip">Abre: ANAV140 - MORFOLOGÍA VETERINARIA APLICADA</span>
      </li>
      <li>
        ANAV131 - EMBRIOLOGÍA VETERINARIA
        <span class="tooltip">Abre: CIAN161 - FISIOLOGÍA REPRODUCTIVA (junto a MORFOLOGÍA VETERINARIA APLICADA)</span>
      </li>
      <li>ELECT13 - OFG 2</li>
      <li>
        FARM101 - BIOQUÍMICA VETERINARIA
        <span class="tooltip">Abre: BIMI165 - MICROBIOLOGÍA GENERAL, FARM151 - FISIOLOGÍA VETERINARIA</span>
      </li>
      <li>
        HIPA104 – HISTOLOGÍA
        <span class="tooltip">Abre: PANI142 - PATOLOGÍA GENERAL (junto a INMUNOLOGÍA)</span>
      </li>
      <li>MVET053 - PRÁCTICA INTRODUCCIÓN A LA MEDICINA VETERINARIA II</li>
    </ul>
  </section>
</section>

<!-- Segundo Año -->
<section>
  <h2>Segundo Año</h2>

  <section class="semestre">
    <h3>3er Semestre</h3>
    <ul class="materias">
      <li>
        ANAV140 - MORFOLOGÍA VETERINARIA APLICADA
        <span class="tooltip">Abre: CIAN161 - FISIOLOGÍA REPRODUCTIVA (junto a EMBRIOLOGÍA VETERINARIA)</span>
      </li>
      <li>
        BIMI165 - MICROBIOLOGÍA GENERAL
        <span class="tooltip">Abre: MEPR235 - ENFERMEDADES INFECCIOSAS DE LOS ANIMALES DOMÉSTICOS</span>
      </li>
      <li>
        CIAN141 – ZOOTECNIA
        <span class="tooltip">Abre: CIAN113 - ETÓLOGIA Y BIENESTAR ANIMAL, CIAN243 - NUTRICIÓN Y ALIMENTACIÓN</span>
      </li>
      <li>
        FARM151 - FISIOLOGÍA VETERINARIA
        <span class="tooltip">Abre: FARM202 - FISIOPATOLOGÍA VETERINARIA</span>
      </li>
      <li>
        FARM155 – INMUNOLOGÍA
        <span class="tooltip">Abre: PANI142 - PATOLOGÍA GENERAL (junto a HISTOLOGÍA)</span>
      </li>
      <li>
        MEPR132 – BIOESTADÍSTICA
        <span class="tooltip">Abre: CIAN240 - ECONOMÍA Y FUNDAMENTOS DE ADMINISTRACIÓN PECUARIA, CIAN244 - GENÉTICA PECUARIA (junto a PRODUCCIÓN DE NO RUMIANTES)</span>
      </li>
    </ul>
  </section>

  <section class="semestre">
    <h3>4to Semestre</h3>
    <ul class="materias">
      <li>CIAN113 - ETÓLOGIA Y BIENESTAR ANIMAL</li>
      <li>
        CIAN161 - FISIOLOGÍA REPRODUCTIVA
        <span class="tooltip">Abre: CIAN262 - REPRODUCCIÓN ANIMAL I, CIAN233 - REPRODUCCIÓN ANIMAL II</span>
      </li>
      <li>CIDI023 - INGLÉS I (Abre INGLÉS II)</li>
      <li>
        FARM202 - FISIOPATOLOGÍA VETERINARIA
        <span class="tooltip">Abre: FARM211 - FARMACOLOGÍA VETERINARIA, PANI238 - ENFERMEDADES PARASITARIAS, HOVE272 - EXPLORACIÓN CLÍNICA</span>
      </li>
      <li>MEPR235 - ENFERMEDADES INFECCIOSAS DE LOS ANIMALES DOMÉSTICOS</li>
      <li>
        PANI142 - PATOLOGÍA GENERAL
        <span class="tooltip">Abre: PANI238 - ENFERMEDADES PARASITARIAS, PANI239 - PATOLOGÍA ESPECIAL E INMUNOPATOLOGÍA (junto a FISIOPATOLOGÍA VETERINARIA)</span>
      </li>
    </ul>
  </section>
</section>

<!-- Tercer Año -->
<section>
  <h2>Tercer Año</h2>

  <section class="semestre">
    <h3>5to Semestre</h3>
    <ul class="materias">
      <li>
        CIAN243 - NUTRICIÓN Y ALIMENTACIÓN
        <span class="tooltip">Abre: CIAN249 - PRODUCCIÓN DE NO RUMIANTES, MEPR200 - EPIDEMIOLOGÍA VETERINARIA (junto a PAT. ESPECIAL E INMUNOPATOLOGÍA), CIAN246 - PRODUCCIÓN DE RUMIANTES I (junto a REPRODUCCIÓN ANIMAL I)</span>
      </li>
      <li>
        CIAN262 - REPRODUCCIÓN ANIMAL I
        <span class="tooltip">Abre: CIAN246 - PRODUCCIÓN DE RUMIANTES I (junto a NUTRICIÓN Y ALIMENTACIÓN)</span>
      </li>
      <li>CIDI123 - INGLÉS II (Abre INGLÉS III)</li>
      <li>
        FARM211 - FARMACOLOGÍA VETERINARIA
        <span class="tooltip">Abre: HOVE215 - CIRUGÍA GENERAL Y ANESTESIOLOGÍA VETERINARIA, HOVE278 - MEDICINA INTERNA I (junto a PAT. ESPECIAL E INMUNOPATOLOGÍA)</span>
      </li>
      <li>
        MVET102 - PRÁCTICA BÁSICA
        <span class="tooltip">Se abre al aprobar materias de 1er a 4to semestre. Abre: MEPR209 - PRÁCTICA TRANSFERENCIA TECNOLÓGICA Y SERVICIO VETERINARIO A LA SOCIEDAD (junto a ENF. PARASITARIAS y EPIDEMIOLOGÍA VETERINARIA)</span>
      </li>
      <li>
        PANI238 - ENFERMEDADES PARASITARIAS
        <span class="tooltip">Abre: PANI254 - ENFERMEDADES DE AVES, MEPR209 - PRÁCTICA TRANSFERENCIA TECNOLÓGICA (junto a PRÁCTICA BÁSICA y EPIDEMIOLOGÍA VETERINARIA), MEPR216 - CONTROL SANITARIO E INOCUIDAD DE ALIMENTOS (junto a EPIDEMIOLOGÍA VETERINARIA y PATOLOGÍA ESPECIAL E INMUNOPATOLOGÍA)</span>
      </li>
      <li>
        PANI239 - PATOLOGÍA ESPECIAL E INMUNOPATOLOGÍA
        <span class="tooltip">Abre: MEPR200 - EPIDEMIOLOGÍA VETERINARIA (junto a NUTRICIÓN Y ALIMENTACIÓN), PANI254 - ENFERMEDADES DE AVES, HOVE272 - EXPLORACIÓN CLÍNICA (junto a FISIOPATOLOGÍA VETERINARIA), HOVE278 - MEDICINA INTERNA I (junto a FARMACOLOGÍA VETERINARIA), HOVE292 - MEDICINA INTERNA II (junto a ENFERMEDADES PARASITARIAS y EPIDEMIOLOGÍA VETERINARIA)</span>
      </li>
    </ul>
  </section>

  <section class="semestre">
    <h3>6to Semestre</h3>
    <ul class="materias">
      <li>CIAN233 - REPRODUCCIÓN ANIMAL II</li>
      <li>
        CIAN240 - ECONOMÍA Y FUNDAMENTOS DE ADMINISTRACIÓN PECUARIA
        <span class="tooltip">Abre: CIAN248 - PRODUCCIÓN DE RUMIANTES II (junto a PRODUCCIÓN DE RUMIANTES I)</span>
      </li>
      <li>
        CIAN249 - PRODUCCIÓN DE NO RUMIANTES
        <span class="tooltip">Abre: CIAN244 - GENÉTICA PECUARIA (junto a BIOESTADÍSTICA), CIAN235 - PRODUCTOS ANIMALES (junto a PRODUCCIÓN DE RUMIANTES I)</span>
      </li>
      <li>CIDI223 - INGLÉS III</li>
      <li>
        MEPR200 - EPIDEMIOLOGÍA VETERINARIA
        <span class="tooltip">Abre: MEPR209 - PRÁCTICA TRANSFERENCIA TECNOLÓGICA (junto a ENFERMEDADES PARASITARIAS y PATOLOGÍA ESPECIAL E INMUNOPATOLOGÍA), MEPR216 - CONTROL SANITARIO E INOCUIDAD DE ALIMENTOS (junto a ENFERMEDADES PARASITARIAS y PATOLOGÍA ESPECIAL E INMUNOPATOLOGÍA)</span>
      </li>
      <li>PANI253 - ACUICULTURA Y ENFERMEDADES DE PECES</li>
      <li>PANI254 - ENFERMEDADES DE AVES</li>
    </ul>
  </section>
</section>

<!-- Cuarto Año -->
<section>
  <h2>Cuarto Año</h2>

  <section class="semestre">
    <h3>7mo Semestre</h3>
    <ul class="materias">
      <li>CIAN244 - GENÉTICA PECUARIA</li>
      <li>
        CIAN246 - PRODUCCIÓN DE RUMIANTES I
        <span class="tooltip">Abre: CIAN235 - PRODUCTOS ANIMALES (junto a PRODUCCIÓN DE NO RUMIANTES), CIAN248 - PRODUCCIÓN DE RUMIANTES II (junto a ECONOMÍA Y FUNDAMENTOS DE ADMINISTRACIÓN PECUARIA)</span>
      </li>
      <li>ELECT100 - OPTATIVO DE ESPECIALIZACIÓN I (Requiere aprobación 1° a 6° semestre)</li>
      <li>
        HOVE215 - CIRUGÍA GENERAL Y ANESTESIOLOGÍA VETERINARIA
        <span class="tooltip">Abre: HOVE293 - PATOLOGÍA QUIRÚRGICA Y CIRUGÍA ESPECIAL (junto a EXPLORACIÓN CLÍNICA)</span>
      </li>
      <li>
        HOVE272 - EXPLORACIÓN CLÍNICA
        <span class="tooltip">Abre: HOVE279 - MÉTODOS COMPLEMENTARIOS DE DIAGNÓSTICO, HOVE293 - PATOLOGÍA QUIRÚRGICA Y CIRUGÍA ESPECIAL (junto a CIRUGÍA GENERAL Y ANESTESIOLOGÍA)</span>
      </li>
      <li>
        HOVE278 - MEDICINA INTERNA I
        <span class="tooltip">Abre: HOVE294 - CLÍNICA DE RUMIANTES, HOVE295 - CLÍNICA DE EQUINOS, HOVE296 - CLÍNICA DE PEQUEÑOS ANIMALES (junto a MEDICINA INTERNA II, MÉTODOS COMPLEMENTARIOS Y PATOLOGÍA QUIRÚRGICA)</span>
      </li>
      <li>MEPR209 - PRÁCTICA TRANSFERENCIA TECNOLÓGICA Y SERVICIO VETERINARIO A LA SOCIEDAD</li>
    </ul>
  </section>

  <section class="semestre">
    <h3>8vo Semestre</h3>
    <ul class="materias">
      <li>
        CIAN235 - PRODUCTOS ANIMALES
        <span class="tooltip">Abre: CIAN255 - FORMULACIÓN Y EVALUACIÓN DE PROYECTOS (junto a PRODUCCIÓN DE RUMIANTES II)</span>
      </li>
      <li>
        CIAN248 - PRODUCCIÓN DE RUMIANTES II
        <span class="tooltip">Abre: CIAN255 - FORMULACIÓN Y EVALUACIÓN DE PROYECTOS (junto a PRODUCTOS ANIMALES)</span>
      </li>
      <li>ELECT101 - OPTATIVO DE ESPECIALIZACIÓN II (Requiere aprobación 1° a 6° semestre)</li>
      <li>
        HOVE279 - MÉTODOS COMPLEMENTARIOS DE DIAGNÓSTICO
        <span class="tooltip">Abre: HOVE294 - CLÍNICA DE RUMIANTES, HOVE295 - CLÍNICA DE EQUINOS, HOVE296 - CLÍNICA DE PEQUEÑOS ANIMALES (junto a MEDICINA INTERNA I y II y PATOLOGÍA QUIRÚRGICA)</span>
      </li>
      <li>
        HOVE292 - MEDICINA INTERNA II
        <span class="tooltip">Abre: HOVE294 - CLÍNICA DE RUMIANTES, HOVE295 - CLÍNICA DE EQUINOS, HOVE296 - CLÍNICA DE PEQUEÑOS ANIMALES (junto a MEDICINA INTERNA I, MÉTODOS COMPLEMENTARIOS Y PATOLOGÍA QUIRÚRGICA)</span>
      </li>
      <li>
        HOVE293 - PATOLOGÍA QUIRÚRGICA Y CIRUGÍA ESPECIAL
        <span class="tooltip">Abre: HOVE294 - CLÍNICA DE RUMIANTES, HOVE295 - CLÍNICA DE EQUINOS, HOVE296 - CLÍNICA DE PEQUEÑOS ANIMALES (junto a MEDICINA INTERNA I y II, MÉTODOS COMPLEMENTARIOS)</span>
      </li>
      <li>
        MEPR216 - CONTROL SANITARIO E INOCUIDAD DE ALIMENTOS
        <span class="tooltip">Abre: MEPR210 - SALUD PÚBLICA VETERINARIA, MVET207 - PRÁCTICA PROFESIONAL DE INSPECCIÓN VETERINARIA DE ALIMENTOS</span>
      </li>
    </ul>
  </section>
</section>

<!-- Quinto Año -->
<section>
  <h2>Quinto Año</h2>

  <section class="semestre">
    <h3>9no Semestre</h3>
    <ul class="materias">
      <li>CIAN255 - FORMULACIÓN Y EVALUACIÓN DE PROYECTOS</li>
      <li>ELECT112 - OPTATIVO DE PROFUNDIZACIÓN I (Requiere aprobación 1° a 8° semestre)</li>
      <li>
        HOVE294 - CLÍNICA DE RUMIANTES
        <span class="tooltip">Abre: HOVE297 - INTERNADO CLÍNICO (junto a CLÍNICA DE EQUINOS y PEQUEÑOS ANIMALES)</span>
      </li>
      <li>
        HOVE295 - CLÍNICA DE EQUINOS
        <span class="tooltip">Abre: HOVE297 - INTERNADO CLÍNICO (junto a CLÍNICA DE RUMIANTES y PEQUEÑOS ANIMALES)</span>
      </li>
      <li>
        HOVE296 - CLÍNICA DE PEQUEÑOS ANIMALES
        <span class="tooltip">Abre: HOVE297 - INTERNADO CLÍNICO (junto a CLÍNICA DE EQUINOS y RUMIANTES)</span>
      </li>
      <li>MEPR210 - SALUD PÚBLICA VETERINARIA</li>
    </ul>
  </section>

  <section class="semestre">
    <h3>10mo Semestre</h3>
    <ul class="materias">
      <li>ELECT116 - OPTATIVO DE PROFUNDIZACIÓN II (Requiere aprobación 1° a 9° semestre)</li>
      <li>HOVE297 - INTERNADO CLÍNICO</li>
      <li>MVET207 - PRÁCTICA PROFESIONAL DE INSPECCIÓN VETERINARIA DE ALIMENTOS</li>
      <li>
        MVET208 - PRÁCTICA PROFESIONAL
        <span class="tooltip">Se abre al aprobar materias desde 1° a 10° semestre</span>
      </li>
      <li>
        MVET299 - PROYECTO DE TÍTULO (a)
        <span class="tooltip">Se abre al aprobar materias desde 1° a 10° semestre</span>
      </li>
    </ul>
  </section>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const materias = document.querySelectorAll('ul.materias li');

    materias.forEach(li => {
      const tooltip = li.querySelector('.tooltip');
      if(tooltip){
        tooltip.style.visibility = 'hidden';

        li.addEventListener('click', (e) => {
          e.stopPropagation();

          materias.forEach(otherLi => {
            if(otherLi !== li){
              const otherTooltip = otherLi.querySelector('.tooltip');
              if(otherTooltip) otherTooltip.style.visibility = 'hidden';
            }
          });

          tooltip.style.visibility = (tooltip.style.visibility === 'visible') ? 'hidden' : 'visible';
        });
      }
    });

    document.body.addEventListener('click', () => {
      materias.forEach(li => {
        const tooltip = li.querySelector('.tooltip');
        if(tooltip){
          tooltip.style.visibility = 'hidden';
        }
      });
    });
  });
</script>

</body>
</html>
