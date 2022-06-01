import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class UserL extends LitElement {
  static get properties() {
    return {
      User: { type: Object }
    };
  }

  constructor() {
    super();

    // sett default verdier
    this.User = { // den brukeren som er valgt fra lista (klikket på)
      "Navn": "",
      "Address": "",
      "Telefon": "",
      "Fodsel": ""
    };

    // hent brukere fra server og legg de inn i this.user propertien
    fetch('Get')
    .then(response => response.json())
    .then(data => this.User = data);
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
      <div class="row">
        <div class="column">
            <label id="Navn" runat="server">${this.User.Navn}</label><br>
            <label id="Address" runat="server">${this.User.Address}</label><br>
            <label id="Telefon" runat="server">${this.User.Telefon}</label><br>
            <label id="Fodsel" runat="server">${this.User.Fodsel}</label>
        </div>
      </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('Userl', UserL);