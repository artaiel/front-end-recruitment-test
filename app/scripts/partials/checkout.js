/* eslint-disable */
const checkoutTemplate = `
<div class="checkout__container">
  <form class="checkout__form">
    <div class="checkout__form-group">
      <div class="checkout__form-header">
        <div class="checkout__form-header-number">
          <span>
            1
          </span>
        </div>
        <div class="checkout__form-header-title">
          Personal information
        </div>
      </div>
      <div class="checkout__form-row">
        <label for="formName" class="checkout__input-label">
          <h5 class="checkout__input-title">
            First name
          </h5>
          <input
            id="formName"
            type="text"
            placeholder="Elon"
            autocomplete="given-name"
            class="checkout__input-text"
          >
        </label>
        <label for="formSurname" class="checkout__input-label">
          <h5 class="checkout__input-title">
            Last name
          </h5>
          <input
            id="formSurname"
            type="text"
            placeholder="Musk"
            autocomplete="family-name"
            class="checkout__input-text"
          >
        </label>
      </div>
      <div class="checkout__form-row">
        <label for="formEmail" class="checkout__input-label checkout__input-label--single">
          <h5 class="checkout__input-title">
            Email
          </h5>
          <input
            id="formEmail"
            type="email"
            placeholder="elon@spacex.com"
            class="checkout__input-text"
          >
        </label>
      </div>
      <div class="checkout__form-row">
        <label for="formCountry" class="checkout__input-label">
          <h5 class="checkout__input-title">
            Country
          </h5>
          <select
            id="formCountry"
            placeholder="USA"
            class="checkout__input-select"
          >
            <option value="USA" selected="selected">USA</option>
            <option value="PL">Poland</option>
            <option value="other">Other</option>
          </select>
          <img
            id="countrySelectArrowIcon"
            src="images/chevron.svg"
            class="checkout__input-select-arrow"
          >
        </label>
        <label for="formPostalCode" class="checkout__input-label">
          <h5 class="checkout__input-title">
            Postal Code
          </h5>
          <input
            id="formPostalCode"
            type="text"
            placeholder="10001"
            class="checkout__input-text"
          >
        </label>
      </div>
      <div class="checkout__form-row">
        <label for="formPhoneNumber" class="checkout__input-label checkout__input-label--single">
          <h5 class="checkout__input-title">
            Phone Number
          </h5>
          <input
            id="formPhoneNumber"
            type="tel"
            placeholder="(212) 692-93-92"
            class="checkout__input-text"
          >
        </label>
      </div>
    </div>

    <div class="checkout__form-group">
      <div class="checkout__form-header">
        <div class="checkout__form-header-number">
          <span>
            2
          </span>
        </div>
        <div class="checkout__form-header-title">
          Payment details
        </div>
        <img class="checkout__form-header-icon" src="images/padlock.svg" alt="Padlock icon signifying safe connection">
      </div>
        <div class="checkout__form-row">
        <label
          for="formCardNumber"
          class="checkout__input-label checkout__input-label--single checkout__input-label--shorter">
          <h5 class="checkout__input-title">
            Credit Card Number
          </h5>
          <input
            id="formCardNumber"
            type="tel"
            placeholder="0000 - 0000 - 0000 - 0000"
            class="checkout__input-text"
          >
          <img class="checkout__visa-logo" src="images/visa.png" alt="VISA logo">
        </label>
      </div>
      <div class="checkout__form-row">
        <label for="formCardCode" class="checkout__input-label">
          <h5 class="checkout__input-title">
            Security code
          </h5>
          <input
            id="formCardCode"
            type="tel"
            placeholder="***"
            class="checkout__input-text"
          >
        </label>
        <label for="formCardExpiration" class="checkout__input-label">
          <h5 class="checkout__input-title">
            Expiration date
          </h5>
          <input
            id="formCardExpiration"
            type="text"
            placeholder="MM / YY"
            class="checkout__input-text"
          >
        </label>
      </div>
    </div>

    <div class="checkout__form-control">
      <button
        id="checkoutFormSubmitButton"
        class="checkout__form-submit-btn"
      >
        <img class="checkout__form-submit-icon" src="images/cart.svg" alt="Shopping cart icon">
        <span>
          Complete purchase
        </span>
      </button>
    </div>
  </form>

  <div class="summary">
    <div class="summary__outer-container">
      <div class="summary__inner-container">
        <div class="summary__header">
          Your order
        </div>
        <div class="summary__row">
          <div>
            Apple Watch Sport
          </div>
          <div>
            $ 580
          </div>
        </div>
        <div class="summary__row">
          <div>
            Modern buckle
          </div>
          <div>
            $ 380
          </div>
        </div>
        <div class="summary__divider"></div>
        <div class="summary__row">
          <div>
            Total purchases
          </div>
          <div>
            $ 960
          </div>
        </div>
        <div class="summary__row">
          <div>
            Estimated tax
          </div>
          <div>
            $ 0
          </div>
        </div>
        <div class="summary__divider"></div>
        <div class="summary__row">
          <div class="summary__title-total">
            Total
          </div>
          <div class="summary__value-total">
            $ 960
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
