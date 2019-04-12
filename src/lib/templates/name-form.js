const changeHash = (hash) => {
  location.hash = hash;
};

export const firstForm = () => {
  const namesForm = `
    <div class="container first-form-box">
      <p class="instructions">Set an email and SMS reminder to purchase tickets when they go on sale <span class="underline">April 12 at 10am PDT</span></p>
      <form class="firstpage-form">
          <h3 class="input-label fname-label">What is your first name?</h3>
          <h3 class="input-label lname-label">What is your last name, ?</h3>
          <h3 class="input-label email-label">What is your email adress?</h3>
          <input type="text" placeholder="First Name" class="fname-input">
          <input type="text" placeholder="Last Name" class="lname-input">
          <button type="button" class="next-btn" id="disabled-btn">NEXT</button>
          <hr>
          <input type="text" placeholder="Email" class="email-input" id="disabled-input">
          <button type="button" class="next-btn to-nextform" id="disabled-btn">NEXT</button>
          <hr>
          <p class="description name-description">We collect your name to provided personalize alerts.</p>
          <p class="description email-description">We collect your email adress to deliver notifications.</p>
          <h4 class="warning"><i class="fas fa-check-circle"></i> I confirm that I am 13 years of age or older</h4>
          <h4 class="warning"><i class="fas fa-check-circle"></i> I agree to receive news, tour dates, and special announcements from Interpol</h4>
      </form>
    </div>
  `;
  const namesFormElement = document.createElement('div');
  namesFormElement.innerHTML = namesForm;

  const btnToNextForm = namesFormElement.querySelector('.to-nextform');
  btnToNextForm.addEventListener('click', () => {
    changeHash('/phone-number');
  });

  return namesFormElement;
};