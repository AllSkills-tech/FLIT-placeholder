const pagePath = window.location.pathname;

function emailLogic() {
  //console.log("Email logic called");
  const btn = document.getElementById('contact-submit-button');
  const response = document.getElementById('submission-response');
  //console.log(response);
  document.getElementById('contact-form').addEventListener(
    'submit', 
    function(event) {
      //console.log("Submit function triggered")
      event.preventDefault();
      if (btn.value === 'Submit'){
        response.innerHTML = 'Submitting form ...';
        //emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
        emailjs.sendForm('service_l3pogah', 'template_sz9ug5t', this)
        .then(() => {
          response.innerHTML = 'Thank you for sharing your thoughts, you should receive an acknowledgement email in the next few minutes...';
          btn.value = 'Clear form';
        }, (err) => {
          response.innerHTML = 'An error has occurred, please try submitting the form again.'
          console.log(JSON.stringify(err));
        });
      } else if (btn.value === 'Clear form'){
        document.getElementById('contact-form').reset();
        btn.value = 'Submit';
        response.innerHTML = '';
      }
    }
  );
}

window.onload = function () {
  const menu_btn = document.querySelector('.burger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  })

  if (pagePath === "/contact.html"){
    //console.log("Currently on the contact page")
    emailLogic();
  }
}