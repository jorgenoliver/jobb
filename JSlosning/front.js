import { LitElement, html, css } from 'lit-element';

class FrontPage  extends LitElement {

  static get styles() {
    return css``;
  }

  static get properties() {
  	return {};
  }

  constructor() {
	  super();
  }

  render() {
  return html`
    <div>
      <h1>Rules/Info</h1>
      <ul>
        <li>
          <p><strong>Don't be rude</strong> but being nude is fine, as long as you're at home</p>
        </li>
        <li>
          <p><strong>Do not walk around naked in the public</strong> people generally dont appreciate that</p>
        </li>
        <li>
          <p><strong>Read the rules of a community before poting</strong> these rules right here</p>
        </li>
        <li>
          <p><strong>Don't break the law</strong> The police wil get sad</p>
        </li>
        <li>
          <p><strong>Fianlly, don't make people sad</strong></p>
        </li>
      </ul>
    </div>
`;
  }
}

customElements.define('front-page', FrontPage);