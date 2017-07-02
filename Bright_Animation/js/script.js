// Main parameters - image width and space between images (in px)
var personWidth = 151;
var personMargin = 42;

var personArr = document.querySelectorAll('.person');
var btnPrev = document.querySelector('.btn-prev');
var btnNext = document.querySelector('.btn-next');
var firstPerson = document.querySelector('.person');

// Constants to prevent calling the function again when it is running
var onPrevWork = false;
var onNextWork = false;

personArr.forEach(function(item, i, arr) {
  item.setAttribute('id', 'person-' + i);
  if (i > 2) {
    item.style.display = 'none';
  }
});

var personId = firstPerson.getAttribute('id');
var i = (personId.match(/\d{1,}/))[0];
var midPerson = document.getElementById('person-' + (+ i + 1));

document.getElementById('person-' + i).style.left = `calc(50% - ${ 1.5 * personWidth}px - ${personMargin}px)`;
document.getElementById('person-' + (+ i + 2)).style.left = `calc(50% + ${ 0.5 * personWidth}px + ${personMargin}px)`;
midPerson.classList.add('person-active');
midPerson.childNodes[0].classList.add('person-active-img');

btnPrev.onclick = function() {
  if (!onPrevWork) {
    onPrevWork = true;

    var prevPersonId = 'person-' + (+ i - 1);
    var thisPersonId = 'person-' + i;
    var nextPersonId = 'person-' + (+ i + 1);
    var nextSecondPersonId = 'person-' + (+ i + 2);

    if (+ i === 0) {
      prevPersonId = 'person-' + (personArr.length - 1);
      i = personArr.length;
    } else if (i === personArr.length - 1) {
      nextPersonId = 'person-' + 0;
      nextSecondPersonId = 'person-' + 1;
    } else if (i === personArr.length - 2) {
      nextSecondPersonId = 'person-' + 0;
    }

    document.getElementById(nextPersonId).classList.remove('person-active');
    document.getElementById(nextPersonId).childNodes[0].classList.remove('person-active-img');

    document.getElementById(nextSecondPersonId).style.left = '105%';
    document.getElementById(prevPersonId).style.display = 'block';
    document.getElementById(prevPersonId).style.left = `calc(0px - ${personWidth}px - 5%)`;

    setTimeout(function() {
      document.getElementById(prevPersonId).style.left = `calc(50% - ${ 2.5 * personWidth}px - ${ 2 * personMargin}px)`;
    }, 100);

    setTimeout(function() {
      document.getElementById(prevPersonId).style.left = `calc(50% - ${ 1.5 * personWidth}px - ${personMargin}px)`;
      document.getElementById(thisPersonId).style.left = `calc(50% - ${ 0.5 * personWidth}px`;
      document.getElementById(nextPersonId).style.left = `calc(50% + ${ 0.5 * personWidth}px + ${personMargin}px)`;

      document.getElementById(thisPersonId).classList.add('person-active');
      document.getElementById(thisPersonId).childNodes[0].classList.add('person-active-img');

      document.getElementById(nextSecondPersonId).style.left = `calc(50% - ${ 0.5 * personWidth}px)`;
      document.getElementById(nextSecondPersonId).style.display = 'none';

      onPrevWork = false;
    }, 700);

    i = +i - 1;
  }

};

btnNext.onclick = function() {
  if (!onNextWork) {
    onNextWork = true;

    var thisPerson = 'person-' + i;
    var nextPerson = 'person-' + (+ i + 1);
    var nextSecondPerson = 'person-' + (+ i + 2);
    var nextThirdPerson = 'person-' + (+ i + 3);

    if (i === personArr.length - 3) {
      nextThirdPerson = 'person-' + 0;
    } else if (i === personArr.length - 2) {
      nextSecondPerson = 'person-' + 0;
      nextThirdPerson = 'person-' + 1;
    } else if (i === personArr.length - 1) {
      nextPerson = 'person-' + 0;
      nextSecondPerson = 'person-' + 1;
      nextThirdPerson = 'person-' + 2;
    } else if (i === personArr.length) {
      thisPerson = 'person-' + 0;
      nextPerson = 'person-' + 1;
      nextSecondPerson = 'person-' + 2;
      nextThirdPerson = 'person-' + 3;
      i = 0;
    }

    document.getElementById(nextPerson).classList.remove('person-active');
    document.getElementById(nextPerson).childNodes[0].classList.remove('person-active-img');

    document.getElementById(thisPerson).style.left = `calc(0px - ${personWidth}px - 5%)`;
    document.getElementById(nextThirdPerson).style.left = '105%';
    document.getElementById(nextThirdPerson).style.display = 'block';

    setTimeout(function() {
      document.getElementById(nextThirdPerson).style.left = `calc(50% + ${ 1.5 * personWidth}px + ${ 2 * personMargin}px)`;
    }, 100);

    setTimeout(function() {
      document.getElementById(nextPerson).style.left = `calc(50% - ${ 1.5 * personWidth}px - ${personMargin}px)`;
      document.getElementById(nextSecondPerson).style.left = `calc(50% - ${ 0.5 * personWidth}px`;
      document.getElementById(nextThirdPerson).style.left = `calc(50% + ${ 0.5 * personWidth}px + ${personMargin}px)`;

      document.getElementById(nextSecondPerson).classList.add('person-active');
      document.getElementById(nextSecondPerson).childNodes[0].classList.add('person-active-img');

      document.getElementById(thisPerson).style.left = `calc(50% - ${ 0.5 * personWidth}px`;
      document.getElementById(thisPerson).style.display = 'none';

      onNextWork = false;
    }, 700);

    i = +i + 1;
  }
};
