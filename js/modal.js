(() => {
  const mobileMenu = document.querySelector('.mob-menu');
  const openMenuBtn = document.querySelector('.header-open-btn');
  const closeMenuBtn = document.querySelector('.mob-close-btn');
    const closeMenuLink = document.querySelectorAll('.mob-nav-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  document.querySelector(".section-hero-button").addEventListener("click", toggleOrderServiceModal);
	document.querySelector(".modal-close-btn").addEventListener("click", toggleOrderServiceModal);

	function toggleOrderServiceModal() {
        document.querySelector(".backdrop").classList.toggle("is-open");
        document.body.classList.toggle("no-scroll");
	}
})();
