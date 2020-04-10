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
                if(this.innerHTML.length==0) {
                    this.innerHTML = this.createCheckboxElement(data);
                } else {
                    this.innerHTML += this.createCheckboxElement(data);
                }
            } else if (data != null && data.action === 'delete') {
                for(let i of data.values) {
                    this.removeChild(document.getElementById("div" + i));
                } 
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

        return `<div id="div${nextId}">
        <input type="checkbox" name="${name}" value="${nextId}"><label id="lbl${nextId}">${label}</label>
        </div>`;
    }
}
window.customElements.define('checkbox-group-comp', CheckboxGroupComp);