class CiudadComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
      <style>
        @import url('components/ciudad/style.css');
      </style>
      <div class="contenedor">
        Hola, soy un componente con CSS externo
      </div>
    `;
        //   // Crear el enlace al CSS externo
        // const link = document.createElement('link');
        // link.rel = 'stylesheet';
        // link.href = 'components/ciudad/style.css';
        // const div = document.createElement('div');
        // div.classList.add('contenedor');
        // div.textContent = 'Hola, soy un componente con CSS externo';
    
        // // Añadir el enlace y el contenido al Shadow DOM
        // shadow.appendChild(link);
        // shadow.appendChild(div);
    //     shadow.appendChild(link);
    //   shadow.innerHTML = `
    //     <div class="contenedor">
    //       Hola, soy un componente con CSS externo
    //     </div>
    //   `;
    }
  }
  
  customElements.define('my-ciudad', CiudadComponent);