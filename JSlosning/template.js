import { LitElement, html, css } from 'lit-element';

class Template  extends LitElement {

  static get styles() {
    return css`
      .fakeimg {
        height: 200px;
        background: #aaa;
      }
      .navbar-custom {
        background-color: #5D5C61;
      }
      .jumbotron-custom {
        background-color: #B1A296;
        margin-bottom: 0;
      }
        .jumbotron-custom-header{
        background-color: #379683;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <!DOCTYPE html>
	<html lang="en">
    <head>
      <title>Control Panel</title>
    </head>
	<body>   
    <div class="jumbotron text-center jumbotron-custom-header" style="margin-bottom:0">
      <h1>XYZ</h1>
      <p>- The world leading forum</p> 
    </div>
    
    <nav class="navbar navbar-expand-sm navbar-dark navbar-custom sticky-top">
      <a class="navbar-brand" href="/">XYZ</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="/newPost">Create New Post</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/List">PostList</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/userpage">User Page</a>
        </li>    
      </ul>
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/login"><span class="fas fa-sign-in-alt"></span>Login</a></li>
        </ul>
      </div>    
    </nav>
    <!--Main div-->
    <div class="container" style="margin-top:30px">
      <div class="row">
        <slot></slot>
      </div>
    </div>
    <!--Add links-->
    <div class="jumbotron text-center jumbotron-custom">
      <table class="table table-borderless">
        <thead>
          <tr>
          <th>Information</th>
          <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>About us</td>
          <td>Request mod</td>
          </tr>
          <tr>
          <td><a class="nav-link" href="/admin">Admin list</a></td>
          <td>Report user</td>
          </tr>
          <tr>
          <td>Mod list</td>
          </tr>
        </tbody>
        </table>
      </div>
    </body>
	</html>`;
  }
}

customElements.define('template-tp', Template);