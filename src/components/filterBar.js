export const filterBar = () => {
  const renderFilterBar = `
    <div class="filter-bar">
        <label for="sort-select">Ordenar por: </label>
        <select name="name" id="sort-select" data-testid="select-sort">
          <option value="" disabled selected>Seleccionar</option>
          <option value="asc">Asc [A-Z]</option>
          <option value="desc">Desc [Z-A]</option>
        </select>

        <label for="filter-ocupation">Ocupación: </label>
        <select name="filterByOcupation" id="filter-ocupation">
          <option value="" disabled selected>Seleccionar</option>
          <option value="Cazador">Cazador</option>
          <option value="Hormiga quimera">Hormiga Quimera</option>
          <option value="Asesino">Asesino</option>
          <option value="Brigada Fantasma">Brigada Fantasma</option>
        </select>

        <label for="select-filter">Tipo de Nen: </label>
        <select name="filterByNen" id="select-filter" data-testid="select-filter">
          <option value="" disabled selected>Seleccionar</option>
          <option value="Intensificador">Intensificación</option>
          <option value="Transmutador">Transmutación</option>
          <option value="Materializador">Materialización</option>
          <option value="Emisor">Emisión</option>
          <option value="Manipulador">Manipulación</option>
          <option value="Especialista">Especialización</option>
        </select>
        <button id="cleaner-button" data-testid="button-clear">LIMPIAR FILTROS</button>
        <button id="stats-button">
          <img src="https://static.wikia.nocookie.net/villains/images/1/19/The_Phantom_Troupe_Logo.png/" 
          alt="spider-button" class="button-img"></button>
    </div>
`;
  //const divFilterBar = document.createElement("div"); 
  //divFilterBar.innerHTML = renderFilterBar;
  
  return renderFilterBar;
}