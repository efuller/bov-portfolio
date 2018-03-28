import Sidebar from './components/sidebar';
import Random from './components/random';
import Cookie from './components/cookies';
window.onload = function() {
	Sidebar.init();
	Random.init();
	Cookie();
};

if (module.hot) {
	module.hot.accept();
}