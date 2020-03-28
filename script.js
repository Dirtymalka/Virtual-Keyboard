// Create Textarea
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.setAttribute('autofocus', '');
document.body.append(textarea);

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
const keyLayoutRussianShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
const keyLayoutRussianKeys = [
  'backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', '[', ']', '\\', '|',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up',
  'Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', 'Left', 'Down', 'Right',
];


// Create English Keys
function createKeys(keyLayoutUnShift, keyLayoutShift, keyLayoutKeys) {
  if (keyLayoutUnShift === keyLayoutEnglishUnShift) containerBoard.classList.add('english');
  if (keyLayoutUnShift === keyLayoutRussianUnShift) containerBoard.classList.add('russian');
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

createKeys(keyLayoutRussianUnShift, keyLayoutRussianShift, keyLayoutRussianKeys);

// Language Change
function languageChange() {
  if (containerBoard.classList.contains('russian')) {
    containerBoard.classList.remove('russian');
    containerBoard.innerHTML = '';
    createKeys(keyLayoutEnglishUnShift, keyLayoutEnglishShift, keyLayoutEnglishKeys);
  } else if (containerBoard.classList.contains('english')) {
    containerBoard.classList.remove('english');
    containerBoard.innerHTML = '';
    createKeys(keyLayoutRussianUnShift, keyLayoutRussianShift, keyLayoutRussianKeys);
  }
}


// Virtual field input
containerBoard.addEventListener('mousedown', (event) => {
  document.querySelector('.textarea').focus();
  const activeButton = event.target.closest('div');
  if (activeButton.classList.contains('space')) {
    textarea.value += ' ';
  }
  if (activeButton.classList.contains('tab')) {
    textarea.value += '  ';
  }
  if (activeButton.classList.contains('enter')) {
    textarea.value += '\n';
  }
  if (activeButton.classList.contains('special')) return;
  if (!activeButton.classList.contains('key')) return;
  if (!activeButton) return;
  activeButton.classList.add('active');
  textarea.value += activeButton.querySelector('span') ? activeButton.querySelector('span').textContent : activeButton.textContent;
  activeButton.onmouseup = () => activeButton.classList.remove('active');
});


// Click on Special Keys

containerBoard.addEventListener('mousedown', (event) => {
  // Click on CapsLock
  if (event.target.classList.contains('capslock')) {
    const keyCapsLock = containerBoard.querySelector('.capslock');
    keyCapsLock.classList.toggle('active');
    const keys = containerBoard.querySelectorAll('div');
    if (keyCapsLock.classList.contains('active')) {
      keys.forEach((letter) => {
        const letterF = letter;
        if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
          letterF.textContent = letter.textContent.toUpperCase();
        }
      });
    } else {
      keys.forEach((letter) => {
        const letterF = letter;
        if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
          letterF.textContent = letter.textContent.toLowerCase();
        }
      });
    }
  }

  const keysAlt = containerBoard.querySelectorAll('.alt');
  // Click on Shift
  const keysShift = containerBoard.querySelectorAll('.shift');
  if (event.target.classList.contains('shift')) {
    event.target.classList.toggle('active');
    const keys = containerBoard.querySelectorAll('div');
    if (event.target.classList.contains('active')) {
      keys.forEach((letter) => {
        const letterF = letter;
        if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
          letterF.textContent = letter.textContent.toUpperCase();
        }
      });
    } else {
      keys.forEach((letter) => {
        const letterF = letter;
        if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
          letterF.textContent = letter.textContent.toLowerCase();
        }
      });
    }

    const tapShiftKeys = containerBoard.querySelectorAll('.tap-shift');
    tapShiftKeys.forEach((key) => {
      const keyS = key;
      const supKeyContent = key.querySelector('sup').textContent;
      const spanKeyContent = key.querySelector('span').textContent;
      keyS.querySelector('sup').textContent = spanKeyContent;
      keyS.querySelector('span').textContent = supKeyContent;
    });

    if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysShift[0].classList.contains('active') || keysShift[1].classList.contains('active'))) {
      languageChange();
    }
  }

  // Click on Alt
  if (event.target.classList.contains('alt')) {
    event.target.classList.toggle('active');
    if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysShift[0].classList.contains('active') || keysShift[1].classList.contains('active'))) {
      languageChange();
    }
  }
  if (event.target.classList.contains('backspace')) {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  }

  // Click on Ctrl
  if (event.target.classList.contains('ctrl')) {
    event.target.classList.toggle('active');
  }

  // Click on Win
  if (event.target.classList.contains('win')) {
    event.target.classList.toggle('active');
    containerBoard.querySelectorAll('.key').forEach((elem) => {
      elem.classList.toggle('other-keys');
    });
  }
});

// const backspace = containerBoard.querySelector('.backspace');
// backspace.addEventListener('click', () => {
//   textarea.value = textarea.value
// });

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
