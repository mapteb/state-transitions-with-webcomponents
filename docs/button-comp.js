class ButtonComp extends HTMLElement {
    static get observedAttributes() {
        return ['data-request'];
    }
    constructor() {
        super();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (newVal != null && newVal != undefined && newVal.length > 0 && name === 'data-request') {
            const data = JSON.parse(newVal);
            if (this.getElementsByTagName('input')[0] == undefined) {
                this.innerHTML = this.createInputButtonElement(data);
            }
        }
    }

    createInputButtonElement(data) {
        return '<input type="button" id="button-comp-id" name="' + data.name + '"  class="pure-button" value="' + data.value + '">';
    }
}
window.customElements.define('button-comp', ButtonComp);