/* Crea una función encargada de generar el contenido de la vista. 
Esta función debe devolver un elemento DOM para que pueda ser utilizado por el enrutador.*/

import { cards } from "../components/Cards.js";
//import { homeHeader } from "../components/homeHeader.js";
import { filterBar } from "../components/filterBar.js";
import { stats } from "../components/stats.js";
import dataset from "../data/dataset.js";
import { filterData, sortData } from "../lib/dataFunctions.js";
import { blackHeader } from "../components/blackHeader.js";

const Home = (props) => {
  console.log("AQUI ES HOME ", props);
  // HOME ES LA VISTA INICIAL-DEBE CONTENER TODO LO QUE SE VA A RENDERIZAR EN EL INICIO HTML, RENDERCARD DEBEN IR AQUI
  const viewEl = document.createElement("div");

  const header = document.createElement("header");
  header.innerHTML = blackHeader();
  viewEl.appendChild(header);

  const controlBar = document.createElement("div");
  controlBar.innerHTML = filterBar();
  viewEl.appendChild(controlBar);

  const cardsContainer = document.createElement("div"); // *1. CREAR UN NUEVO CONTENEDOR EXCLUSIVO PARA LAS CARDS (UL)
  const renderCards = cards(dataset);
  cardsContainer.appendChild(renderCards); // *2. AL CONTENEDOR CREADO, INSERTAMOS LAS CARDS RENDERIZADAS (UL) 
  viewEl.appendChild(cardsContainer); // *3. AL CONTENEDOR PADRE DE NUESTRA VISTA HOME.JS (A SU VEZ, HIJO DE ROOT) LE INSERTAMOS EL CONTENEDOR CON LAS CARDS RENDERIZADAS
  //viewEl.textContent = `Welcome to the home page! ${props.bella}`; --pruebas de Nico--

  //*_______ENTONCES, PARA QUE NUESTROS EVENTOS SEAN FUNCIONALES, DEBEMOS UTILIZARLOS EN RELACIÓN A LOS NUEVOS CONTENEDORES QUE ALMACENAN LA DATA REFACTORIZADA (ES DECIR, DEBEMOS CAMBIAR LOS CONTENEDORES INVOCADOS QUE SE AFECTAN POR EL EVENTO, POR LOS NUEVOS _____________*
  const selectfilterOcupation = viewEl.querySelector("#filter-ocupation"); // *No sirve la referencia a document, hay que cambiarla a viewEl que es el nuevo contenedor padre de la vista Home
  const nenSelect = viewEl.querySelector("#select-filter");
  const sortSelect = viewEl.querySelector("#sort-select");

  selectfilterOcupation.addEventListener("change", function (event) {
    let result = [];
    const optionFilter = event.target.value;
    result = filterData(dataset, "ocupation", optionFilter);
    const nenTypeSelect = nenSelect.value;
    if (nenTypeSelect !== "") {
      result = filterData(result, "nenType", nenTypeSelect);
    }
    const sortSelection = sortSelect.value;
    if (sortSelection !== "") {
      result = sortData(result, "name", sortSelection);
    }
    // const root = document.querySelector("#root");  *NO LA NECESITAMOS PORQ YA TENEMOS LA REFERENCIA AL CONTENEDOR PADRE DE HOME
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(cards(result));
  });

  nenSelect.addEventListener("change", (e) => {
    let result = [];
    result = filterData(dataset, "nenType", e.target.value);
    const ocupationSelect = selectfilterOcupation.value;
    if (ocupationSelect !== "") {
      result = filterData(result, "ocupation", ocupationSelect);
    }
    const sortSelection = sortSelect.value;
    if (sortSelection !== "") {
      result = sortData(result, "name", sortSelection);
    }
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(cards(result));
  });
  
  sortSelect.addEventListener("change", function (event) {
    let result = dataset;
    const optionFilter = selectfilterOcupation.value;
    if (optionFilter !== "") {
      result = filterData(dataset, "ocupation", optionFilter);
    }
    const nenTypeSelect = nenSelect.value;
    if (nenTypeSelect !== "") {
      result = filterData(result, "nenType", nenTypeSelect);
    }
    const sortOrder = event.target.value;
    const originalData = Array.from(result);
    const sortCards = sortData(originalData, "name", sortOrder);
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(cards(sortCards));
  });

  const cleanerButton = viewEl.querySelector("#cleaner-button");
  cleanerButton.addEventListener("click", () => {
    selectfilterOcupation.value = "";
    nenSelect.value = "";
    sortSelect.value = "";
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(cards(dataset));
  });

  const statButton = viewEl.querySelector("#stats-button");
  statButton.addEventListener("click", function () {
    window.location.href = "index.html#stats-h";
  });
  
  const newSection = document.createElement("section");
  const renderStats = stats(dataset);
  newSection.innerHTML = renderStats;
  viewEl.appendChild(newSection);
  
  return viewEl;
};

export default Home;
