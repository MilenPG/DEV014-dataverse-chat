import { setApiKey } from "../lib/apiKey";

const ApiKey = () => {
  const viewEl = document.createElement("div");
  const viewApiKey = `
<div class='view-api-key'>
  <div class='form-api-key'>
      <h1>API Key</h1>
    <div class='body-api-key'>
      <p>Introduce aquí tu API Key</p>
      <input class= 'input-api-key' id="input-api-key"/>
    </div>
    <button class="button-api-key" id="api-key-button">INGRESAR</button>
  </div> 
</div>
   
`;

  viewEl.innerHTML = viewApiKey;

  const apiKeyButton = viewEl.querySelector("#api-key-button");
  apiKeyButton.addEventListener("click", function () {
    const apiKeyInput = viewEl.querySelector("#input-api-key").value;
    setApiKey(apiKeyInput); // Al hacer click, estamos invocando esta función que guardará la API Key en el local Storage. 
    
    //Aquí también deberíamos agregar los if-else para crear los innerHTML con <span> de acceso válido o inválido en caso respectivo.
  });

  return viewEl;
};

export default ApiKey;
