import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import './Get.js';
import './Controllers/UserProController.cs';

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
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <form onsubmit="javascript: return false;" id="userForm" method="POST">
    <div>
            <label for="Navn">Navn:</label>
            <input type="text" runat="server" id="Navn"> <br>
            <label for="Address">Address</label>
            <input type="text" runat="server" id="Address" /> <br>
            <label for="Telefon">Telefon</label>
            <input type="number" runat="server" id="Telefon" min="10000000"/> <br>
            <label for="Fodsel">Fodsel</label>
            <input type="number" runat="server" id="Fodseldag" min="1" max="31"/>
            <input type="number" runat="server" id="Fodselman" min="1" max="12"/>
            <input type="number" runat="server" id="Fodselaar" min="1900" max="2022"/> <br>

        </div>
  <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn btn-info mt-4 ml-2" value="Edit User"></input>

  <button>Skriv</button>
  <Userl></Userl>

</form>
    `;
  }

  //updates the information about a user
  updateUser(e) {
    //data from the HTML form
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('Set', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("The user was updated");
        } else {
            console.log("The user was not updated");
        }
      })
  }

}

customElements.define('Set', Set);
