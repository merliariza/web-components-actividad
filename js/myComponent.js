class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<p>¡Hola desde un Web Component!</p>`;
    }
}
customElements.define('my-component',MyComponent);
