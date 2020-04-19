// Create Textarea
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.placeholder = '1) Use Ctrl+Alt to change the language\n2) Use left and right arrows to move through the text\n3) The button Win is optional and only changes the style of the virtual keyboard\n4) Down and up arrows display themselves\n5) Buttons Ctrl, Alt, Shift, CapsLock are "sticky"\n6) Other buttons correspond to the real keyboard layout on windows ';
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
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', 'Shift', 'Up', 'Del',
  'Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', 'Left', 'Down', 'Right',
];

const keyLayoutRussianUnShift = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const keyLayoutRussianShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
const keyLayoutRussianKeys = [
  'backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', '|',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up', 'Del',
  'Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', 'Left', 'Down', 'Right',
];

const eventWhich = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', '', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Delete', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const keyToLanguage = 'keyboard';
const englishValue = 'eng';
const russianValue = 'ru';

// Create Keys
function createKeys(keyLayoutUnShift, keyLayoutShift, keyLayoutKeys) {
  if (keyLayoutUnShift === keyLayoutEnglishUnShift) {
    containerBoard.classList.add('english');
  }
  if (keyLayoutUnShift === keyLayoutRussianUnShift) {
    containerBoard.classList.add('russian');
  }
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
    const divClassList = (f, a) => {
      div.classList.add(f);
      div.classList.add(a);
    };
    if (key === 'backspace') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'CapsLock') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Tab') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Shift') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Ctrl') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Win') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Alt') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'space') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Left') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Up') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Right') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Down') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Enter') {
      divClassList(key.toLowerCase(), 'special');
    }
    if (key === 'Del') {
      divClassList(key.toLowerCase(), 'special');
    }
    div.innerHTML = key;
    containerBoard.append(div);
  });

  document.querySelector('.right').textContent = '';
  document.querySelector('.up').textContent = '';
  document.querySelector('.left').textContent = '';
  document.querySelector('.down').textContent = '';
}


if (localStorage.getItem(keyToLanguage) === englishValue) {
  createKeys(keyLayoutEnglishUnShift, keyLayoutEnglishShift, keyLayoutEnglishKeys);
} else if (localStorage.getItem(keyToLanguage) === russianValue) {
  createKeys(keyLayoutRussianUnShift, keyLayoutRussianShift, keyLayoutRussianKeys);
} else {
  createKeys(keyLayoutEnglishUnShift, keyLayoutEnglishShift, keyLayoutEnglishKeys);
}


// Language Change
function languageChange() {
  if (containerBoard.classList.contains('russian')) {
    containerBoard.classList.remove('russian');
    containerBoard.innerHTML = '';
    createKeys(keyLayoutEnglishUnShift, keyLayoutEnglishShift, keyLayoutEnglishKeys);
    localStorage.setItem(keyToLanguage, englishValue);
  } else if (containerBoard.classList.contains('english')) {
    containerBoard.classList.remove('english');
    containerBoard.innerHTML = '';
    createKeys(keyLayoutRussianUnShift, keyLayoutRussianShift, keyLayoutRussianKeys);
    localStorage.setItem(keyToLanguage, russianValue);
  }
}

// Click on Caps Lock
function clickOnCapsLock() {
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

let cursor = 0;
let text = 0;
const cursorPosition = () => {
  textarea.selectionEnd = textarea.selectionStart;
  cursor = textarea.selectionEnd;
  text = textarea.value.split('');
};

const textareaToString = () => {
  textarea.value = text.join('');
};

// Click on Backspace
function clickOnBackspace() {
  if (textarea.selectionStart === 0) {
    return;
  }
  cursorPosition();
  text.splice(textarea.selectionEnd - 1, 1);
  textareaToString();
  textarea.selectionEnd = cursor - 1;
}

// Click on Ctrl
function clickOnCtrl() {
  this.target.classList.toggle('active');
}

// Click on Del
function clickOnDel() {
  if (textarea.selectionStart === textarea.value.length) {
    return;
  }
  cursorPosition();
  text.splice(textarea.selectionEnd, 1);
  textareaToString();
  textarea.selectionEnd = cursor;
}

// Click on Right Arrow
function clickOnRightArrow() {
  if (textarea.selectionEnd === textarea.value.length) {
    return;
  }
  cursorPosition();
  textarea.selectionStart = cursor + 1;
}

// Click on Left Arrow
function clickOnLeftArrow() {
  if (textarea.selectionStart === 0) {
    return;
  }
  cursorPosition();
  textarea.selectionEnd = cursor - 1;
}

// Click on Up Arrow
function clickOnUpArrow() {
  const up = document.querySelector('.up');
  up.classList.toggle('active');
  up.innerHTML = '&uarr;';
  cursorPosition();
  text.splice(textarea.selectionEnd, 0, document.querySelector('.up').textContent);
  textareaToString();
  textarea.selectionEnd = cursor + 1;
  up.innerHTML = '';
}

// Click on Down Arrow
function clickOnDownArrow() {
  const down = document.querySelector('.down');
  down.classList.toggle('active');
  down.innerHTML = '&darr;';
  cursorPosition();
  text.splice(textarea.selectionEnd, 0, document.querySelector('.down').textContent);
  textareaToString();
  textarea.selectionEnd = cursor + 1;
  down.innerHTML = '';
}

// Click on Space
function clickOnSpace() {
  cursorPosition();
  text.splice(textarea.selectionEnd, 0, ' ');
  textareaToString();
  textarea.selectionEnd = cursor + 1;
}

// Click on Tab
function clickOnTab() {
  cursorPosition();
  text.splice(textarea.selectionEnd, 0, '  ');
  textareaToString();
  textarea.selectionEnd = cursor + 2;
}

// Click on Enter
function clickOnEnter() {
  cursorPosition();
  const textSplice = text.splice(textarea.selectionEnd, textarea.value.length
    - textarea.selectionStart);
  textarea.value = `${text.join('')}\n${textSplice.join('')}`;
  textarea.selectionEnd = cursor + 1;
}

// Focus on Textarea
textarea.onblur = () => textarea.focus();

// Virtual field input
containerBoard.addEventListener('mousedown', (event) => {
  const activeButton = event.target.closest('div');

  if (activeButton.classList.contains('space')) {
    clickOnSpace();
  }
  if (activeButton.classList.contains('tab')) {
    clickOnTab();
  }
  if (activeButton.classList.contains('enter')) {
    clickOnEnter();
  }
  if (activeButton.classList.contains('special')) {
    return;
  }
  if (!activeButton.classList.contains('key')) {
    return;
  }
  if (!activeButton) {
    return;
  }
  activeButton.classList.remove('active');
  activeButton.classList.add('active');

  cursorPosition();
  text.splice(textarea.selectionEnd, 0, (activeButton.querySelector('span') ? activeButton.querySelector('span').textContent : activeButton.textContent));
  textarea.value = text.join('');
  textarea.selectionEnd = cursor + 1;

  containerBoard.onmouseup = () => activeButton.classList.remove('active');
});

// Click on Special Keys

const changeToUpperCase = (keys) => {
  keys.forEach((letter) => {
    const letterF = letter;
    if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
      letterF.textContent = letter.textContent.toUpperCase();
    }
  });
};

const changeToLowerCase = (keys) => {
  keys.forEach((letter) => {
    const letterF = letter;
    if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
      letterF.textContent = letter.textContent.toLowerCase();
    }
  });
};

const tapOnShiftSpecial = (keys) => {
  keys.forEach((key) => {
    const keyS = key;
    const supKeyContent = key.querySelector('sup').textContent;
    const spanKeyContent = key.querySelector('span').textContent;
    keyS.querySelector('sup').textContent = spanKeyContent;
    keyS.querySelector('span').textContent = supKeyContent;
  });
};


containerBoard.addEventListener('mousedown', (event) => {
  const keysAlt = containerBoard.querySelectorAll('.alt');
  const keysCtrl = containerBoard.querySelectorAll('.ctrl');

  // Click on CapsLock
  if (event.target.classList.contains('capslock')) {
    clickOnCapsLock();
  }

  // Click on Shift
  if (event.target.classList.contains('shift')) {
    event.target.classList.toggle('active');
    const keys = containerBoard.querySelectorAll('div');
    if (event.target.classList.contains('active')) {
      changeToUpperCase(keys);
    } else {
      changeToLowerCase(keys);
    }
    const tapShiftKeys = containerBoard.querySelectorAll('.tap-shift');
    tapOnShiftSpecial(tapShiftKeys);
  }

  // Click on Alt
  if (event.target.classList.contains('alt')) {
    event.target.classList.toggle('active');
    if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysCtrl[0].classList.contains('active') || keysCtrl[1].classList.contains('active'))) {
      languageChange();
    }
  }

  // Click on Backspace
  if (event.target.classList.contains('backspace')) {
    clickOnBackspace();
  }

  // Click on Ctrl
  if (event.target.classList.contains('ctrl')) {
    clickOnCtrl.apply(event);
    if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysCtrl[0].classList.contains('active') || keysCtrl[1].classList.contains('active'))) {
      languageChange();
    }
  }

  // Click on Win
  if (event.target.classList.contains('win')) {
    event.target.classList.toggle('active');
    containerBoard.querySelectorAll('.key').forEach((elem) => {
      elem.classList.toggle('other-keys');
    });
  }

  // Click on Del
  if (event.target.classList.contains('del')) {
    clickOnDel();
  }

  // Click on Right Arrow
  if (event.target.classList.contains('right')) {
    clickOnRightArrow();
  }

  // Click on Left Arrow
  if (event.target.classList.contains('left')) {
    clickOnLeftArrow();
  }

  // Click on Up Arrow
  if (event.target.classList.contains('up')) {
    clickOnUpArrow();
    this.onmouseup = () => document.querySelector('.up').classList.remove('active');
  }

  // Click on Down Arrow
  if (event.target.classList.contains('down')) {
    clickOnDownArrow();
    this.onmouseup = () => document.querySelector('.down').classList.remove('active');
  }
});


// Tap on real keyboard
document.addEventListener('keydown', (event) => {
  if (eventWhich.includes(event.code)) {
    event.preventDefault();
  }
  event.target.classList.remove('active');
  const keysAlt = containerBoard.querySelectorAll('.alt');
  const keys = containerBoard.querySelectorAll('div');
  const keysCtrl = containerBoard.querySelectorAll('.ctrl');

  // Tap on CapsLock
  if (event.code === 'CapsLock') {
    clickOnCapsLock();
  }

  // Tap on Del
  if (event.code === 'Delete') {
    document.querySelector('.del').classList.add('active');
    clickOnDel();
    this.onkeyup = () => document.querySelector('.del').classList.remove('active');
  }

  // Tap on Win
  if (event.code === 'MetaLeft') {
    event.preventDefault();
    event.target.classList.toggle('active');
    containerBoard.querySelectorAll('.key').forEach((elem) => {
      elem.classList.toggle('other-keys');
    });
  }

  // Tap on Right Arrow
  if (event.code === 'ArrowRight') {
    document.querySelector('.right').classList.add('active');
    clickOnRightArrow();
    this.onkeyup = () => document.querySelector('.right').classList.remove('active');
  }

  // Tap on Left Arrow
  if (event.code === 'ArrowLeft') {
    document.querySelector('.left').classList.add('active');
    clickOnLeftArrow();
    this.onkeyup = () => document.querySelector('.left').classList.remove('active');
  }

  // Tap on Up Arrow
  if (event.code === 'ArrowUp') {
    clickOnUpArrow();
    this.onkeyup = () => document.querySelector('.up').classList.remove('active');
  }

  // Tap on Down Arrow
  if (event.code === 'ArrowDown') {
    clickOnDownArrow();
    this.onkeyup = () => document.querySelector('.down').classList.remove('active');
  }

  for (let i = 0; i < eventWhich.length; i += 1) {
    const activeButton = keys[i];
    if (eventWhich[i] === event.code) {
      // Tap on Shift
      if (keys[i].classList.contains('shift')) {
        keys[i].classList.toggle('active');
        if (keys[i].classList.contains('active')) {
          changeToUpperCase(keys);
        } else {
          changeToLowerCase(keys);
        }
        const tapShiftKeys = containerBoard.querySelectorAll('.tap-shift');
        tapOnShiftSpecial(tapShiftKeys);
      }

      const allKeys = containerBoard.querySelectorAll('div');
      // Tap on Alt
      if (allKeys[i].classList.contains('alt')) {
        allKeys[i].classList.toggle('active');
        if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysCtrl[0].classList.contains('active') || keysCtrl[1].classList.contains('active'))) {
          languageChange();
        }
      }

      // Tap on Ctrl
      if (allKeys[i].classList.contains('ctrl')) {
        allKeys[i].classList.toggle('active');
        if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysCtrl[0].classList.contains('active') || keysCtrl[1].classList.contains('active'))) {
          languageChange();
        }
      }


      // Virtual field input
      if (activeButton.classList.contains('space')) {
        clickOnSpace();
        activeButton.classList.add('active');
        this.onkeyup = () => activeButton.classList.remove('active');
      }
      if (activeButton.classList.contains('tab')) {
        clickOnTab();
        activeButton.classList.add('active');
        this.onkeyup = () => activeButton.classList.remove('active');
      }
      if (activeButton.classList.contains('enter')) {
        clickOnEnter();
        activeButton.classList.add('active');
        this.onkeyup = () => activeButton.classList.remove('active');
      }
      if (activeButton.classList.contains('backspace')) {
        clickOnBackspace();
      }
      if (activeButton.classList.contains('special')) {
        return;
      }
      if (!activeButton.classList.contains('key')) {
        return;
      }
      if (!activeButton) {
        return;
      }
      activeButton.classList.add('active');
      cursorPosition();
      text.splice(textarea.selectionEnd, 0, (activeButton.querySelector('span') ? activeButton.querySelector('span').textContent : activeButton.textContent));
      textareaToString();
      textarea.selectionEnd = cursor + 1;
      this.onkeyup = () => activeButton.classList.remove('active');
    }
  }
});
