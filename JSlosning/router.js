/*
* npm install --save @vaadin/router
*/
import './index.html';
import './frontPage.js';
import './template.js';
import './Get.js';
import './Set.js';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'template-tp',
    children: [
        {path: '/', component: 'front-page'},    
        {path: '/Get', component: 'Get'},
        {path: '/Set', component: 'Set'},
        {path: '(.*)', component: 'not-found'}
    ]}
]);