const Error = () => {
  const viewEl = document.createElement("div");
  const errorPage = `
  <div class='error-page'>
    <img src='https://github.com/MilenPG/DEV014-dataverse-chat/blob/final-details/src/assets/knuckle-creature.transp.png?raw=true' alt='Potclean' class='error-img'>
      <h1 class='error-h1'>¡Error!</h1>
      <p>Para regresar a la página de inicio, haz click en el banner</p>
  </div>
  `
  viewEl.innerHTML = errorPage;
  return viewEl;
};

export default Error;
