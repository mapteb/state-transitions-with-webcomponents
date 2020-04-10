class CheckboxGroupComp extends HTMLElement {
    static get observedAttributes() {
        return ['data-request'];
    }
    constructor() {
        super();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (newVal != null && newVal != undefined && newVal.length > 0 && name === 'data-request') {
            let data = JSON.parse(newVal);
            if (data != null && data.action === 'create') {
                this.appendChild(this.createCheckboxElement(data));
            } else if (data != null && data.action === 'delete') {
                console.log(">>> checkbox delete request: ", data.values);
                data.values.forEach(i => this.removeChild(document.getElementById("div" + i)));
            } else if (data != null && data.action === 'update') {
                for(let el of this.getElementsByTagName('input')) {
                    if(el.value === data.value) {
                        if (el.checked) el.checked = false;
                        else el.checked = true;
                    }
                }
            }

            //update data-response
            //get the selectedItems and itemsCount
            let nodesArray = Array.from(this.querySelectorAll('input'));

            let total = nodesArray.length;
            let selected = nodesArray.filter(n => n.checked).map(n => Number(n.value));
            let allItems = nodesArray.map(n => Number(n.value));
            let maxVal = Math.max(...allItems);
            let resp = { itemsCount: total, selectedItems: selected, maxId: maxVal }
            this.setAttribute("data-response", JSON.stringify(resp));
        }
    }

    createCheckboxElement(data) {
        const name = data.name;
        const nextId = data.value;
        const label = data.todoText;

        let de = document.createElement("div");
        de.setAttribute("id", "div" + nextId);
        let e = document.createElement("input");

        e.setAttribute("name", name);
        e.setAttribute("type", "checkbox");
        e.setAttribute("value", nextId);
        e = de.appendChild(e);

        let lbl = document.createElement("label");
        lbl.setAttribute("id", "lbl" + nextId);
        lbl.innerText = label;
        e.insertAdjacentElement("afterEnd", lbl)
        return de;
    }

    deleteCheckboxElements(data) {
        data.values.forEach(i => this.removeChild(document.getElementById("div" + i)));
    }
}
window.customElements.define('checkbox-group-comp', CheckboxGroupComp);