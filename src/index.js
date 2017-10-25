import Sidebar from './components/sidebar';


window.onload = function() {
	Sidebar.init();
}
// document.addEventListener( 'DOMContentLoaded', (e) => {
// 	Sidebar.init();
// });

if (module.hot) {
	module.hot.accept();
}