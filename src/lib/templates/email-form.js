export const secondForm = () => {
  const emailForm = `    
    <div class="container second-form-box">
    <p>What is your cel phone number? We'll send you a one-time True Fan Verification Number.</p>
    <form>
        <label><img src="./images/US-Flag-icon.png" alt="usa-flag" class="flag-number">+1</label>
        <input type="text" placeholder="Phone Number">
        <button type="button">NEXT</button>
        <hr>
        <p>We collect your phone number to verify your identity and deliver a notification.</p>
    </form>
  </div>`;
  
  const emailFormElement = document.createElement('div');
  emailFormElement.innerHTML = emailForm;

  return emailFormElement;
};