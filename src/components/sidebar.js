export default (function() {
	const DOM = {};

	const dimensions = {};

	function init() {
		cacheDOM();
		setDimensions();
		if (window.innerWidth <= 1024) {
			setMobileSidebarPosition();
		} else {
			setSidebarPosition();
		}
		bindEvents();
	}

	function setMobileSidebarPosition() {
		DOM.sidebar.classList.add('sidebar--mobile');
		DOM.sidebar.style.transform = `translateY(${DOM.sidebar.offsetHeight - 42}px)`;
		DOM.sidebar.style.right = 'auto';
		DOM.sidebar.style.top = 'auto';
		DOM.sidebar.style.bottom = 0;
	}

	function setSidebarPosition(bottomPosition) {
		const bottom = bottomPosition || dimensions.aboutHeader.bottom;
		if (pageYOffset > bottom) {
			DOM.sidebar.style.position = 'fixed';
			DOM.sidebar.style.top = dimensions.header.bottom + 'px';
			DOM.sidebar.style.right = 0;
			DOM.sidebar.style.bottom = 'auto';
			DOM.sidebar.style.transform = 'none';

		} else {
			DOM.sidebar.style.position = 'absolute';
			DOM.sidebar.style.top = dimensions.aboutHeader.bottom + pageYOffset + 'px';
			DOM.sidebar.style.right = 0;
			DOM.sidebar.style.bottom = 'auto';
			DOM.sidebar.style.transform = 'none';
		}
	}

	function setDimensions() {
		dimensions.sidebar = DOM.sidebar.getBoundingClientRect();
		dimensions.header = DOM.header.getBoundingClientRect();
		dimensions.aboutHeader = DOM.aboutHeader.getBoundingClientRect();
	}

	function cacheDOM() {
		DOM.sidebar = document.getElementById('sidebar');
		DOM.header = document.querySelector( '.header--site' );
		DOM.aboutHeader = document.querySelector('#about .section__header');
		DOM.mobileTrigger = DOM.sidebar.querySelector('.trigger');
	}

	function bindEvents() {
		document.addEventListener( 'scroll', function() {
			if (window.innerWidth <= 1024) {
				return;
			}
			setDimensions();
			setSidebarPosition(dimensions.header.bottom);
		});

		DOM.mobileTrigger.addEventListener('click', function() {
			if (! DOM.sidebar.classList.contains('opened')) {
				DOM.sidebar.style.transform = `translateY(0)`;
				DOM.sidebar.classList.add('opened');
			} else {
				DOM.sidebar.style.transform = `translateY(${DOM.sidebar.offsetHeight - 42}px)`;
				DOM.sidebar.classList.remove('opened');
			}
		});

		window.addEventListener('resize', function() {
			if (window.innerWidth <= 1024) {
				setMobileSidebarPosition();
			} else {
				DOM.sidebar.classList.remove('sidebar--mobile');
				setSidebarPosition();
			}
		})
	}

	return {
		init: init
	}
})();