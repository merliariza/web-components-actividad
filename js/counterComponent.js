class CounterComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = /* html */ `
        <style>
            .contador {
                font-size: 24px;
                color: green;
            }
            button {
                margin : 5px;
            }
        </style>
        <div>
            <p class= "contador">Contador: <span id= "valor">0</span></p>
            <button id="incrementar">Incrementar</button>
            <button id="resetear">Resetear</button>
        </div>
    `;
        this.contador = 0;
    }

    connectedCallback() {
            this.shadowRoot.querySelector('#incrementar').addEventListener('click',() => {
            this.contador++;
            this.actualizarContador();
        });
            this.shadowRoot.querySelector('#resetear').addEventListener('click',() => {
            this.contador = 0;
            this.actualizarContador();
        });
    }

    actualizarContador() {
        this.shadowRoot.querySelector(`#valor`).textContent = this.contador;
    }
}
customElements.define('contador-componente', CounterComponent);