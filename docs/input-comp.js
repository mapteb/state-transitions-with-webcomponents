class InputComp extends HTMLElement {
    static get observedAttributes() {
        return ['data-request'];
    }
    constructor() {
        super();
    }

    attributeChangedCallback(name, oldVal, newVal) {

        if (newVal != null && newVal != undefined && newVal.length > 0 && name === 'data-request') {
            const data = JSON.parse(newVal);
            if (data != null && data.action === 'create') {
                this.innerHTML = this.createInputTxtElem(data);
            }
        }
    }

    createInputTxtElem(data) {
        return `<div id="${data.name}_div">
                  <input type="text" name="${data.name}" placeholde="Enter text..." value="${data.todoText}">
                </div>`  
    }
}
window.customElements.define('input-comp', InputComp);

