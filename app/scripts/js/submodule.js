(function() {
  const isOnSubmodule = window.location.pathname.includes('submodule.html');

  if (isOnSubmodule) {
    // Bacon
    const cloneBacon = () => {
      const baconImg = [...document.getElementsByTagName('img')]
        .find((img) => img.alt === 'Bacon');
      const baconContainer = baconImg.parentElement;
      const newBaconImgElement = baconImg.cloneNode(false);
      baconContainer.appendChild(newBaconImgElement);
    };

    const addMoreBaconBtn = [...document.getElementsByTagName('button')]
      .find((btn) => btn.textContent === 'Yeah, I want more bacon!');

    if (addMoreBaconBtn) addMoreBaconBtn.addEventListener('click', cloneBacon);

    // Add stylesheet
    const checkoutStylesheet = document.createElement('link');
    checkoutStylesheet.rel = 'stylesheet';
    checkoutStylesheet.type = 'text/css';
    checkoutStylesheet.href = 'styles/checkout.css';
    document.getElementsByTagName('head')[0].appendChild(checkoutStylesheet);

    // Insert checkout partial
    const checkoutElement = document.createElement('div');
    checkoutElement.classList.add('mdl-layout__tab-panel', 'checkout');
    checkoutElement.id = 'checkout';
    checkoutElement.innerHTML = checkoutTemplate;
    const footer = document.getElementsByTagName('footer')[0];
    document.querySelector('.mdl-layout__content')
      .insertBefore(checkoutElement, footer);

    // Add chevron rotation dynamic classes
    const formCountrySelect = document.getElementById('formCountry');
    const formSelectArrow = document.getElementById('countrySelectArrowIcon');
    const addArrowActiveClass = () => {
      formSelectArrow.classList.add('checkout__input-select-arrow--active');
    };
    const removeArrowActiveClass = () => {
      formSelectArrow.classList.remove('checkout__input-select-arrow--active');
    };
    formCountrySelect.addEventListener('focus', addArrowActiveClass);
    formCountrySelect.addEventListener('blur', removeArrowActiveClass);

    // Expand nav
    const navTabItem = document.querySelector('.mdl-layout__tab');
    const checkoutNavTab = navTabItem.cloneNode(true);
    checkoutNavTab.textContent = 'Checkout';
    checkoutNavTab.classList.remove('is-active');
    checkoutNavTab.href = '#checkout';
    navTabItem.parentElement.appendChild(checkoutNavTab);
  };
})();
