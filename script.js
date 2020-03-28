// Create Textarea
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.setAttribute('autofocus', '');
document.body.append(textarea);
const textareaContent = document.querySelector('.textarea');
// Create Container
const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const containerBoard = document.querySelector('.container');

const keyLayoutEnglishUnShift = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const keyLayoutEnglishShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const keyLayoutEnglishKeys = [
  'backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', '|',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', 'Shift', 'Up',
  'Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', 'Left', 'Down', 'Right',
];

const keyLayoutRussianUnShift = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const keyLayoutRussianShift = ['', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
const keyLayoutRussianKeys = [
  'backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', '[', ']', '\\', '|',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up',
  'Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', 'Left', 'Down', 'Right',
];


// Create English Keys
function createEnglishKeys(keyLayoutUnShift, keyLayoutShift, keyLayoutKeys) {
  for (let i = 0; i < keyLayoutUnShift.length; i += 1) {
    const div = document.createElement('div');
    div.className = 'key tap-shift';
    containerBoard.append(div);
    const sup = document.createElement('sup');
    sup.innerHTML = keyLayoutShift[i];
    div.append(sup);
    const span = document.createElement('span');
    span.innerHTML = keyLayoutUnShift[i];
    div.append(span);
  }

  keyLayoutKeys.forEach((key) => {
    const div = document.createElement('div');
    div.className = 'key';
    if (key === 'backspace') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'CapsLock') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Tab') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Shift') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Ctrl') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Win') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Alt') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'space') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Left') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Up') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Right') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Down') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    if (key === 'Enter') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    div.innerHTML = key;
    containerBoard.append(div);
  });
}

createEnglishKeys(keyLayoutEnglishUnShift, keyLayoutEnglishShift, keyLayoutEnglishKeys);


// Virtual field input
containerBoard.addEventListener('mousedown', (event) => {
  let activeButton = event.target.closest('div');
  if (activeButton.classList.contains('special')) return;
  if (!activeButton.classList.contains('key')) return;
  if (!activeButton) return;
  activeButton.classList.add('active');
  textarea.value += activeButton.querySelector('span') ? activeButton.querySelector('span').textContent : activeButton.textContent;
  activeButton.onmouseup = () => activeButton.classList.remove('active');
});


//
const keyShift = containerBoard.querySelector('.shift');
keyShift.addEventListener('mousedown', () => {
  keyShift.classList.toggle('active');
  const keys = containerBoard.querySelectorAll('div');
  if (keyShift.classList.contains('active')) {
    keys.forEach((letter) => {
      if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
        letter.textContent = letter.textContent.toUpperCase();
      }
    });
  } else {
    keys.forEach((letter) => {
      if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
        letter.textContent = letter.textContent.toLowerCase();
      }
    });
  }

  const tapShiftKeys = containerBoard.querySelectorAll('.tap-shift');
  tapShiftKeys.forEach((key) => {

  });
});







// document.addEventListener('keydown', (event) => {
//   let a = containerBoard.querySelectorAll('div');
//   a.forEach((elem) => {
//     if (elem.textContent === event.key) elem.classList.add('active');
//   });
// });

// document.addEventListener('keyup', (event) => {
//   let a = containerBoard.querySelectorAll('div');
//   a.forEach((elem) => {
//     if (elem.textContent === event.key) elem.classList.toggle('active');
// });
// });
