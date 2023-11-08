import { saveToLs, loadFromLs } from './helpers';

const refs = {
  formElem: document.querySelector('.js-form'),
};

refs.formElem.addEventListener('input', onFormElemImput);

function onFormElemImput(event) {
  const userForm = {};

  const formData = new FormData(refs.formElem);

  formData.forEach((value, key) => {
    userForm[key] = value;
  });

  saveToLs('userData', userForm);
}
function onLoad() {
  const data = loadFromLs('userData') || {};

  for (const key of Object.keys(data)) {
    refs.formElem.elements[key].value = data[key];
  }
}

function onFormElemSubmit(event) {
  event.preventDefault();

  const data = loadFromLs('userData');
  localStorage.removeItem('userData');
  event.target.reset();
  console.log(data);
}

refs.formElem.addEventListener('submit', onFormElemSubmit);

onLoad();
