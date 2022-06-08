import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import './Get.js';

class Set extends LitElement {
  static get properties() {
    return {
      User: { type: Object }
    };
  }

  constructor() {
    super();

    this.User = { // den brukeren som er valgt fra lista (klikket på)
        Navn: '',
        Address: '',
        Telefon: '',
        Fodsel: ''
      };
    }
    

  static get styles() {
    return css`
      .row { display: flex; }
      .column { width: 50%; padding: 100px; }
      li { cursor: pointer; font-size: 22px; margin-bottom: 10px; }
    `;
  }

  render() {
    return html`
      <h1>Navn</h1>
      <input type="text" id="Navn">
      <h1>Addresse</h1>
      <input type="text" id="Addresse">
      <h1>TLF</h1>
      <input type="number" id="Telefon">
      <h1>Fodsel</h1>
      <input type="date" id="Fodsel">
      <h1>submit</h1>
      <button @click="${this.register}">Submitt</button>

      <button><UserL .user="${this.User}"></UserL></button>"`
  }

  //updates the information about a user
  register(e){

    var Navn = this.shadowRoot.getElementById("Navn").value;
    var Addresse = this.shadowRoot.getElementById("Addresse").value;
    var Telefon = this.shadowRoot.getElementById("Telefon").value;
    var Fodsel = this.shadowRoot.getElementById("Fodsel").value;

    const data = {Navn, Addresse, Telefon, Fodsel};


    fetch('Set',{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {res.json()}
    )
  }

}

customElements.define('Set', Set);
