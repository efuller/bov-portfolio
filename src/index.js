import Sidebar from './components/sidebar';
import Random from './components/random';
window.onload = function() {
	Sidebar.init();
	Random.init();
};

if (module.hot) {
	module.hot.accept();
}