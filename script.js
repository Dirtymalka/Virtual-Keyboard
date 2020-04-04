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

const eventWich = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', '', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Delete', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];


// Create Keys
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
    if (key === 'Del') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    div.innerHTML = key;
    containerBoard.append(div);
  });

  document.querySelector('.right').textContent = '';
  document.querySelector('.up').textContent = '';
  document.querySelector('.left').textContent = '';
  document.querySelector('.down').textContent = '';
}


if (localStorage.getItem('keyboard') === 'eng') {
  createKeys(keyLayoutEnglishUnShift, keyLayoutEnglishShift, keyLayoutEnglishKeys);
} else if (localStorage.getItem('keyboard') === 'rus') {
  createKeys(keyLayoutRussianUnShift, keyLayoutRussianShift, keyLayoutRussianKeys);
} else createKeys(keyLayoutEnglishUnShift, keyLayoutEnglishShift, keyLayoutEnglishKeys);


// Language Change
function languageChange() {
  if (containerBoard.classList.contains('russian')) {
    containerBoard.classList.remove('russian');
    containerBoard.innerHTML = '';
    createKeys(keyLayoutEnglishUnShift, keyLayoutEnglishShift, keyLayoutEnglishKeys);
    localStorage.setItem('keyboard', 'eng');
  } else if (containerBoard.classList.contains('english')) {
    containerBoard.classList.remove('english');
    containerBoard.innerHTML = '';
    createKeys(keyLayoutRussianUnShift, keyLayoutRussianShift, keyLayoutRussianKeys);
    localStorage.setItem('keyboard', 'rus');
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


// Click on Backspace
function clickOnBackspace() {
  if (textarea.selectionStart === 0) return;
  textarea.selectionEnd = textarea.selectionStart;
  const cursor = textarea.selectionEnd;
  const text = textarea.value.split('');
  text.splice(textarea.selectionEnd - 1, 1);
  textarea.value = text.join('');
  textarea.selectionEnd = cursor - 1;
}

// Click on Ctrl
function clickOnCtrl() {
  this.target.classList.toggle('active');
}

// Focus on Textarea
textarea.onblur = () => textarea.focus();

// Virtual field input
containerBoard.addEventListener('mousedown', (event) => {
  const activeButton = event.target.closest('div');

  if (activeButton.classList.contains('space')) {
    textarea.selectionEnd = textarea.selectionStart;
    const cursor = textarea.selectionEnd;
    const text = textarea.value.split('');
    text.splice(textarea.selectionEnd, 0, ' ');
    textarea.value = text.join('');
    textarea.selectionEnd = cursor + 1;
  }
  if (activeButton.classList.contains('tab')) {
    textarea.selectionEnd = textarea.selectionStart;
    const cursor = textarea.selectionEnd;
    const text = textarea.value.split('');
    text.splice(textarea.selectionEnd, 0, '  ');
    textarea.value = text.join('');
    textarea.selectionEnd = cursor + 2;
  }
  if (activeButton.classList.contains('enter')) {
    textarea.selectionEnd = textarea.selectionStart;
    const cursor = textarea.selectionEnd;
    const text = textarea.value.split('');
    const textSplice = text.splice(textarea.selectionEnd, textarea.value.length
    - textarea.selectionStart);
    textarea.value = `${text.join('')}\n${textSplice.join('')}`;
    textarea.selectionEnd = cursor + 1;
  }
  if (activeButton.classList.contains('special')) return;
  if (!activeButton.classList.contains('key')) return;
  if (!activeButton) return;
  activeButton.classList.remove('active');
  activeButton.classList.add('active');

  textarea.selectionEnd = textarea.selectionStart;
  const cursor = textarea.selectionEnd;
  const text = textarea.value.split('');
  text.splice(textarea.selectionEnd, 0, (activeButton.querySelector('span') ? activeButton.querySelector('span').textContent : activeButton.textContent));
  textarea.value = text.join('');
  textarea.selectionEnd = cursor + 1;

  containerBoard.onmouseup = () => activeButton.classList.remove('active');
});

// Click on Special Keys

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
    if (textarea.selectionStart === textarea.value.length) return;
    textarea.selectionEnd = textarea.selectionStart;
    const cursor = textarea.selectionEnd;
    const text = textarea.value.split('');
    text.splice(textarea.selectionEnd, 1);
    textarea.value = text.join('');
    textarea.selectionEnd = cursor;
  }

  // Click on Right Arrow
  if (event.target.classList.contains('right')) {
    if (textarea.selectionEnd === textarea.value.length) return;
    const cursor = textarea.selectionStart;
    textarea.selectionEnd = textarea.selectionStart;
    textarea.selectionStart = cursor + 1;
  }

  // Click on Left Arrow
  if (event.target.classList.contains('left')) {
    if (textarea.selectionStart === 0) return;
    const cursor = textarea.selectionStart;
    textarea.selectionStart = textarea.selectionEnd;
    textarea.selectionEnd = cursor - 1;
  }

  // Click on Up Arrow
  if (event.target.classList.contains('up')) {
    document.querySelector('.up').classList.toggle('active');
    document.querySelector('.up').innerHTML = '&uarr;';
    textarea.value += document.querySelector('.up').textContent;
    document.querySelector('.up').innerHTML = '';
    this.onmouseup = () => document.querySelector('.up').classList.remove('active');
  }

  // Click on Down Arrow
  if (event.target.classList.contains('down')) {
    document.querySelector('.down').classList.toggle('active');
    document.querySelector('.down').innerHTML = '&darr;';
    textarea.value += document.querySelector('.down').textContent;
    document.querySelector('.down').innerHTML = '';
    this.onmouseup = () => document.querySelector('.down').classList.remove('active');
  }
});


// Tap on real keyboard
document.addEventListener('keydown', (event) => {
  event.preventDefault();
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
    if (textarea.selectionStart === textarea.value.length) return;
    textarea.selectionEnd = textarea.selectionStart;
    const cursor = textarea.selectionEnd;
    const text = textarea.value.split('');
    text.splice(textarea.selectionEnd, 1);
    textarea.value = text.join('');
    textarea.selectionEnd = cursor;
  }

  // Tap on Win
  if (event.code === 'MetaLeft') {
    event.target.classList.toggle('active');
    containerBoard.querySelectorAll('.key').forEach((elem) => {
      elem.classList.toggle('other-keys');
    });
  }

  // Tap on Right Arrow
  if (event.code === 'ArrowRight') {
    if (textarea.selectionEnd === textarea.value.length) return;
    const cursor = textarea.selectionStart;
    textarea.selectionEnd = textarea.selectionStart;
    textarea.selectionStart = cursor + 1;
  }

  // Tap on Left Arrow
  if (event.code === 'ArrowLeft') {
    if (textarea.selectionStart === 0) return;
    const cursor = textarea.selectionStart;
    textarea.selectionStart = textarea.selectionEnd;
    textarea.selectionEnd = cursor - 1;
  }

  // Tap on Up Arrow
  if (event.code === 'ArrowUp') {
    document.querySelector('.up').classList.toggle('active');
    document.querySelector('.up').innerHTML = '&uarr;';
    textarea.value += document.querySelector('.up').textContent;
    document.querySelector('.up').innerHTML = '';
    this.onkeyup = () => document.querySelector('.up').classList.remove('active');
  }

  // Tap on Down Arrow
  if (event.code === 'ArrowDown') {
    document.querySelector('.down').classList.toggle('active');
    document.querySelector('.down').innerHTML = '&darr;';
    textarea.value += document.querySelector('.down').textContent;
    document.querySelector('.down').innerHTML = '';
    this.onkeyup = () => document.querySelector('.down').classList.remove('active');
  }

  for (let i = 0; i < eventWich.length; i += 1) {
    const activeButton = keys[i];
    if (eventWich[i] === event.code) {
      // Tap on Shift
      if (keys[i].classList.contains('shift')) {
        keys[i].classList.toggle('active');
        if (keys[i].classList.contains('active')) {
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
      }

      // Tap on Alt
      if (containerBoard.querySelectorAll('div')[i].classList.contains('alt')) {
        containerBoard.querySelectorAll('div')[i].classList.toggle('active');
        if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysCtrl[0].classList.contains('active') || keysCtrl[1].classList.contains('active'))) {
          languageChange();
        }
      }

      // Tap on Ctrl
      if (containerBoard.querySelectorAll('div')[i].classList.contains('ctrl')) {
        containerBoard.querySelectorAll('div')[i].classList.toggle('active');
        if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysCtrl[0].classList.contains('active') || keysCtrl[1].classList.contains('active'))) {
          languageChange();
        }
      }


      // Virtual field input
      if (activeButton.classList.contains('space')) {
        textarea.selectionEnd = textarea.selectionStart;
        const cursor = textarea.selectionEnd;
        const text = textarea.value.split('');
        text.splice(textarea.selectionEnd, 0, ' ');
        textarea.value = text.join('');
        textarea.selectionEnd = cursor + 1;
        activeButton.classList.add('active');
        this.onkeyup = () => activeButton.classList.remove('active');
      }
      if (activeButton.classList.contains('tab')) {
        textarea.selectionEnd = textarea.selectionStart;
        const cursor = textarea.selectionEnd;
        const text = textarea.value.split('');
        text.splice(textarea.selectionEnd, 0, '  ');
        textarea.value = text.join('');
        textarea.selectionEnd = cursor + 2;
        activeButton.classList.add('active');
        this.onkeyup = () => activeButton.classList.remove('active');
      }
      if (activeButton.classList.contains('enter')) {
        textarea.selectionEnd = textarea.selectionStart;
        const cursor = textarea.selectionEnd;
        const text = textarea.value.split('');
        const textSplice = text.splice(textarea.selectionEnd, textarea.value.length
        - textarea.selectionStart);
        textarea.value = `${text.join('')}\n${textSplice.join('')}`;
        textarea.selectionEnd = cursor + 1;
      }
      if (activeButton.classList.contains('backspace')) {
        clickOnBackspace();
      }
      if (activeButton.classList.contains('special')) return;
      if (!activeButton.classList.contains('key')) return;
      if (!activeButton) return;
      activeButton.classList.add('active');
      textarea.selectionEnd = textarea.selectionStart;
      const cursor = textarea.selectionEnd;
      const text = textarea.value.split('');
      text.splice(textarea.selectionEnd, 0, (activeButton.querySelector('span') ? activeButton.querySelector('span').textContent : activeButton.textContent));
      textarea.value = text.join('');
      textarea.selectionEnd = cursor + 1;
      this.onkeyup = () => activeButton.classList.remove('active');
    }
  }
});
