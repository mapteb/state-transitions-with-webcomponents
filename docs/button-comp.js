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
                if(this.querySelector('button')==undefined){
                    this.innerHTML = this.createInputButtonElement(data);
                }   
            }  
    }

    createInputButtonElement(data) {
        let res = '<input type="button" name="' + data.name + '"  class="pure-button" value="' + data.value + '">';
        return res;
    }    
  }
  window.customElements.define('button-comp', ButtonComp);