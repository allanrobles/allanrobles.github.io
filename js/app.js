const menuBtn = document.getElementById('menu-btn');
const calculateBtn = document.getElementById('calculate');
const curValue = document.getElementById('cur-value');
const pontosValue = document.getElementById('pontos-value');
const rangeValue = document.getElementById('range-value');
const body = document.body;
const valorSelector = document.getElementById("valor-val");

document.addEventListener("DOMContentLoaded", function (event) {
  let input = SimpleMaskMoney.setMask('#valor-val', {
    prefix: '',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.'
  });
})

function showVal(val) {
  curValue.innerText = val + " ";
}

menuBtn.addEventListener('click', function () {
  document.body.classList.toggle('menuOpen');
});

function moneyFormat(valor) {
  var numero = (valor).toLocaleString('pt-BR');
  return numero;
}

document.querySelectorAll('.modal-btn').forEach(modalBtn => {
  modalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeAllModal();
    document.body.classList.add('modalOpen');
    document.getElementById(this.dataset.modal).classList.add('modal--active');
  });
});

document.querySelectorAll('.modal-close').forEach(modalClose => {
  modalClose.addEventListener('click', function (e) {
    e.preventDefault();
    closeAllModal();
  });
});

function closeAllModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('modal--active');
    document.body.classList.remove('modalOpen');
  });
}

calculateBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let val = valorSelector.value.replace(".", "").replace(",", ".");
  console.log(val);

  if (val > 0) {
    pontosValue.value = moneyFormat(val / 1000 * rangeValue.value * 2)
  } else {
    pontosValue.value = moneyFormat(0)
  }
});

document.querySelectorAll(".anchor-link").forEach(function (current) {
  if (!current.hash) return;
  if (current.origin + current.pathname != self.location.href) return;
  (function (anchorPoint) {
    if (anchorPoint) {
      current.addEventListener("click", function (e) {
        anchorPoint.scrollIntoView({ behavior: "smooth" });
        e.preventDefault();
        document.body.classList.remove('menuOpen');
      }, false);
    }
  })(document.querySelector(current.hash));

});


