const changeHash = (hash) => {
  location.hash = hash;
};

export const firstForm = () => {
  const namesForm = `
    <div class="container first-form-box">

      <p class="instructions">Set an email and SMS reminder to purchase tickets when they go on sale <span class="underline">April 12 at 10am PDT</span></p>

      <form class="firstpage-form" onsubmit="return false">

          <div id="questions-container">
          <h3 class="input-label fname-label first-view">What is your first name?</h3>
          <h3 class="input-label lname-label second-view">What is your last name, <span id="usr-name"></span> ?</h3>
          <h3 class="input-label email-label third-view" >What is your email adress?</h3>
          </div>
          
          <div id="names-container">
            <input type="text" placeholder="First Name" class="fname-input font-input" id="name-input" required>
            <input type="text" placeholder="Last Name" class="lname-input font-input" required disabled>
            <input type="submit" class="next-btn first-next-btn" id="disable-btn" value="NEXT">
            <hr>
          </div>

          <div id="email-container" class="email-container">
            <input type="email" placeholder="Email" class="email-input font-input" required disabled>
            <input type="submit" class="next-btn to-nextform" value="NEXT">
            <hr>
          </div>

          <div id="descrptions-container">
            <p class="description name-description">We collect your name to provided personalize alerts.</p>
            <p class="description email-description">We collect your email adress to deliver notifications.</p>
           
            <div id="warning-box">
              <h4 class="warning"><i class="fas fa-check-circle"></i> I confirm that I am 13 years of age or older</h4>
              <h4 class="warning"><i class="fas fa-check-circle"></i> I agree to receive news, tour dates, and special announcements from Interpol</h4>
            </div>
            
          </div>
          
      </form>
    </div>
  `;
  
  const namesFormElement = document.createElement('div');
  namesFormElement.innerHTML = namesForm;

  const nameValue = namesFormElement.querySelector('#usr-name');
  const inputFname = namesFormElement.querySelector('#name-input');
  const inputLname = namesFormElement.querySelector('.lname-input');
  const firstNextBtn = namesFormElement.querySelector('.first-next-btn');
  const btnToNextForm = namesFormElement.querySelector('.to-nextform');
  const emailInput = namesFormElement.querySelector('.email-input');

  namesFormElement.querySelector('.second-view').style.display = 'none';
  namesFormElement.querySelector('.third-view').style.display = 'none';
  namesFormElement.querySelector('.email-description').style.display = 'none';
  namesFormElement.querySelector('#email-container').style.display = 'none';
  namesFormElement.querySelector('#warning-box').style.display = 'none';

  firstNextBtn.addEventListener('click', () => {
    if (inputFname.value) {
      namesFormElement.querySelector('.second-view').style.display = 'block';
      namesFormElement.querySelector('.first-view').style.display = 'none';

      nameValue.innerHTML = namesFormElement.querySelector('.fname-input').value;
      inputLname.disabled = false;
    };
    if (inputFname.value && inputLname.value) {
      emailInput.disabled = false;
      namesFormElement.querySelector('#email-container').style.display = 'block';
      namesFormElement.querySelector('#warning-box').style.display = 'block';
      namesFormElement.querySelector('.email-description').style.display = 'block';
      namesFormElement.querySelector('.email-label').style.display = 'block';
      namesFormElement.querySelector('.second-view').style.display = 'none';
      namesFormElement.querySelector('.name-description').style.display = 'none';
      namesFormElement.querySelector('#disable-btn').style.display = 'none';

    }
  });

   
  btnToNextForm.addEventListener('click', () => {
    if (emailInput.value) {
      changeHash('/phone-number');
    };
  });

  return namesFormElement;
};