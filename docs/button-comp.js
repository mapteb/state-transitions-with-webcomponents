class ButtonComp extends HTMLElement {
    static get observedAttributes() {
        return ['data-request'];
    }
    constructor() {
      super();
      // Attach a shadow root to the element.
      //this = this.attachShadow({ mode: 'open' });
    }

    attributeChangedCallback(name, oldVal, newVal) {
            if (newVal != null && newVal != undefined && newVal.length > 0 && name === 'data-request') {
                const data = JSON.parse(newVal);
                if(this.querySelector('button')==undefined){
                    this.innerHTML = this.createInputButtonElement(data);
                }   
            }  
    }

    connectedCallback() {

        let el = this.querySelector('button');
        if (el != undefined) {
            el.addEventListener('click', (e) => {
                //consol.log(">>> dispatching click evt: ");
                this.dispatchEvent(
                    new CustomEvent('onClick', {
                        detail: { eventData: e.target.value }
                    })
                );
            });
        }


    }

    createInputButtonElement(data) {
        let res = '<input name="' + data.name + '"  class="pure-button" value="' + data.value + '" onclick="handleAppEvent(\'' + data.name + '\', this.value)">';
        //consol.log(res);
        return res;
    }    
  }

  window.customElements.define('button-comp', ButtonComp);