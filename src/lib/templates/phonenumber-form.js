export const secondForm = () => {
  const phoneNumberForm = `    
    <div class="container second-form-box">
    <p class ="instructions">What is your cel phone number? We'll send you a one-time True Fan Verification Number.</p>
    <form class="secondpage-form">
        <label class="input-label phone-label"><img src="./images/US-Flag-icon.png" alt="usa-flag" class="flag-number"> +1</label>
        <input type="tel" name="phone" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="phone-input font-input" required>
        <button type="button" class="next-btn">VERIFY</button>
        <hr>
        <p class="description">We collect your phone number to verify your identity and deliver a notification.</p>
    </form>
  </div>`;
  
  const phoneNumberFormElement = document.createElement('div');
  phoneNumberFormElement.innerHTML = phoneNumberForm;

  return phoneNumberFormElement;
};