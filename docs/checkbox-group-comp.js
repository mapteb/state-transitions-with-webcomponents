class CheckboxGroupComp extends HTMLElement {
    static get observedAttributes() {
        return ['data-request'];
    }
    constructor() {
        super();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (newVal != null && newVal != undefined && newVal.length > 0 && name === 'data-request') {
            var data = JSON.parse(newVal);
            if (data != null && data.action === 'create') {
                //consol.log(">>> checkbox create request: ", data);
                this.appendChild(this.createCheckboxElement(data));
            } else if (data != null && data.action === 'delete') {
                console.log(">>> checkbox delete request: ", data.values);
                data.values.forEach(i => this.removeChild(document.getElementById("div" + i)));
            } else if (data != null && data.action === 'update') {
                for (let cn of this.childNodes) {
                    if (cn.nodeType == 1 && cn.nodeName == 'INPUT' && cn.value === data.value) {
                        //consol.log(">>> checkbox updating: ", cn.value);
                        cn.checked = !cn.checked;
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
            //consol.log(">>> maxVal: ", allItems, maxVal);
            let resp = { itemsCount: total, selectedItems: selected, maxId: maxVal }
            this.setAttribute("data-response", JSON.stringify(resp));
        }
    }

    createCheckboxElement(data) {
        const name = data.name;
        const nextId = data.value;
        const label = data.todoText;

        var de = document.createElement("div");
        de.setAttribute("id", "div" + nextId);
        var e = document.createElement("input");

        e.setAttribute("name", name);
        e.setAttribute("type", "checkbox");
        e.setAttribute("value", nextId);
        e.setAttribute("onchange", "handleAppEvent(\'" + data.name + "', this.value)");
        e = de.appendChild(e);

        var lbl = document.createElement("label");
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