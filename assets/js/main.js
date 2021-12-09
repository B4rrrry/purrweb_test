cookiesInit();
validateForm();
function cookiesInit() {
  const btn = document.querySelector(".cookies__btn"),
        cks = document.querySelector(".cookies");

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      cks.classList.add('cookies-active');
    }, 2000);
  });

  btn.addEventListener("click", function () {
    cks.style.bottom = '-100%';
    setTimeout(() => {
      document.body.removeChild(cks);
    }, 1000);
  });
}

function validateForm() {
    const form = document.querySelector('.git__form'),
          fields = document.querySelectorAll('.git__input-field');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        fields.forEach( field => {
            field.classList.remove('git__input-error')
            console.log(field)
            if(field.value.trim() == '') {
                field.classList.add('git__input-error')
            }
        } )
    })
}