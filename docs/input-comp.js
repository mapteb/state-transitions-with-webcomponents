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
                this.innerHTML = this.createInputTxtElem(data).outerHTML;
            }
        }
    }

    createInputTxtElem(data) {
        let de = document.createElement("div");
        de.setAttribute("id", data.name + "_div");
        let e = document.createElement("input");

        e.setAttribute("name", data.name);
        e.setAttribute("placeholder", "Enter your text...");
        e.setAttribute("type", "text");
        e.setAttribute("value", data.todoText);
        e = de.appendChild(e);

        return de;
    }
}
window.customElements.define('input-comp', InputComp);

