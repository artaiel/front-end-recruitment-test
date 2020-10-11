/* eslint-disable */
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

    // Validation related
    let notificationTimeout = null;
    const showNotification = (messageText, isError) => {
      const removeNotification = msgElement => {
        notificationTimeout = window.setTimeout(() => {
          msgElement.classList.remove('app-message--visible')
          window.setTimeout(() => {
            msgElement.remove()
          }, 500)
        }, 2500)
      }

      if (!document.querySelector('.app-message')) {
        const msg = document.createElement('div')
        msg.classList.add('app-message')
        msg.textContent = messageText
        msg.style.zIndex = 1000
        document.body.appendChild(msg)
        if (isError) msg.classList.add('app-message--error')
        window.setTimeout(() => {
          msg.classList.add('app-message--visible')
        }, 0)
        removeNotification(msg)
      } else {
        window.clearTimeout(notificationTimeout)
        const msg = document.querySelector('.app-message')
        const isCurrentlyAnError = document.querySelector('.app-message--error')
        if (!isCurrentlyAnError && isError) msg.classList.add('app-message--error')
        if (isCurrentlyAnError && !isError) msg.classList.remove('app-message--error')
        msg.textContent = messageText
        removeNotification(msg)
      }
    }

    const checkout = {
      formName: document.getElementById('formName'),
      formSurname: document.getElementById('formSurname'),
      formEmail: document.getElementById('formEmail'),
      formCountry: document.getElementById('formCountry'),
      formPostalCode: document.getElementById('formPostalCode'),
      formPhoneNumber: document.getElementById('formPhoneNumber'),
      formCardNumber: document.getElementById('formCardNumber'),
      formCardCode: document.getElementById('formCardCode'),
      formCardExpiration: document.getElementById('formCardExpiration'),
    }

    const visaRegExp = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const checkValidation = () => {
      const errors = Object.fromEntries(
        Object.entries(checkout).map(el => [el[0], false])
      )
      const showError = (el, error) => {
        if (!el.parentElement.querySelector('.checkout__input-error')) {
          const errorElement = document.createElement('div')
          errorElement.textContent = error
          errorElement.classList.add('checkout__input-error')
          el.parentElement.appendChild(errorElement)
          el.parentElement.classList.add('checkout__input-label--error')
        }
        errors[el.id] = true
      }

      const clearError = el => {
        const errorElement = el.parentElement.querySelector('.checkout__input-error')
        if (errorElement) {
          el.parentElement.classList.remove('checkout__input-label--error')
          errorElement.remove()
        }
      }

      checkout.formName.value === ''
        ? showError(checkout.formName, 'This field can\'t be empty')
        : clearError(checkout.formName)
      checkout.formSurname.value === ''
        ? showError(checkout.formSurname, 'This field can\'t be empty')
        : clearError(checkout.formSurname)
      emailRegExp.test(String(checkout.formEmail.value).toLowerCase())
        ? clearError(checkout.formEmail)
        : showError(checkout.formEmail, 'Invalid email address')
      checkout.formPostalCode.value === ''
        ? showError(checkout.formPostalCode, 'This field can\'t be empty')
        : clearError(checkout.formPostalCode)
      checkout.formPhoneNumber.value === ''
        ? showError(checkout.formPhoneNumber, 'This field can\'t be empty')
        : clearError(checkout.formPhoneNumber)
      visaRegExp.test(String(checkout.formCardNumber.value.replace(/-|\s/g, '')).toLowerCase())
        ? clearError(checkout.formCardNumber)
        : showError(checkout.formCardNumber, 'Invalid Credit Card number');
      /^[0-9]{3}$/.test(String(checkout.formCardCode.value))
        ? clearError(checkout.formCardCode)
        : showError(checkout.formCardCode, 'Invalid card verification code');
      /^(0[1-9]|10|11|12)\/[0-9]{2}$/.test(String(checkout.formCardExpiration.value.replace(/\s/g, '')))
        ? clearError(checkout.formCardExpiration)
        : showError(checkout.formCardExpiration, 'Invalid card expiration date')

      return Object.values(errors).every(value => value === false)
    }

    const submit = event => {
      event.preventDefault()
      if (checkValidation()) {
        showNotification('Form submitted succesfully!')
        console.log('form data: ', Object.fromEntries(Object.entries(checkout)
          .map(el => [el[0], el[1].value]))
        )
      } else {
        showNotification('Failed to submit', true)
      }
    }

    document.getElementById('checkoutFormSubmitButton').addEventListener('click', submit)
  };
})();
