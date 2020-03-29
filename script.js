
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
  'backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', '|',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up', 'Del',
  'Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', 'Left', 'Down', 'Right',
];

const eventWich = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', '', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft','KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp' ,'Delete' , 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];



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
    if (key === 'Del') {
      div.classList.add(key.toLowerCase());
      div.classList.add('special');
    }
    div.innerHTML = key;
    containerBoard.append(div);
  });
}

// if (localStorage.getItem('keyboard')) {
//   createKeys(keyLayoutRussianUnShift, keyLayoutRussianShift, keyLayoutRussianKeys);
// }
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

// Click on Shift
// const keysShift = containerBoard.querySelectorAll('.shift');
// const keysAlt = containerBoard.querySelectorAll('.alt');
// function clickOnShift() {
//   this.target.classList.toggle('active');
//   const keys = containerBoard.querySelectorAll('div');
//   if (this.target.classList.contains('active')) {
//     keys.forEach((letter) => {
//       const letterF = letter;
//       if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
//         letterF.textContent = letter.textContent.toUpperCase();
//       }
//     });
//   } else {
//     keys.forEach((letter) => {
//       const letterF = letter;
//       if (!letter.classList.contains('tap-shift') && !letter.classList.contains('special')) {
//         letterF.textContent = letter.textContent.toLowerCase();
//       }
//     });
//   }
//   const tapShiftKeys = containerBoard.querySelectorAll('.tap-shift');
//   tapShiftKeys.forEach((key) => {
//     const keyS = key;
//     const supKeyContent = key.querySelector('sup').textContent;
//     const spanKeyContent = key.querySelector('span').textContent;
//     keyS.querySelector('sup').textContent = spanKeyContent;
//     keyS.querySelector('span').textContent = supKeyContent;
//   });

//   if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysShift[0].classList.contains('active') || keysShift[1].classList.contains('active'))) {
//     languageChange();
//   }
// }

// Click on Alt
// function clickOnAlt() {
//   this.target.classList.toggle('active');
//   if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysShift[0].classList.contains('active') || keysShift[1].classList.contains('active'))) {
//     languageChange();
//   }
// }

// Click on Backspace
function clickOnBackspace() {
  textarea.value = textarea.value.slice(0, textarea.value.length - 1);
}

// Click on Ctrl
function clickOnCtrl() {
  this.target.classList.toggle('active');
}


// Virtual field input
containerBoard.addEventListener('mousedown', (event) => {
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
  this.onmouseup = () => activeButton.classList.remove('active');
});


// Click on Special Keys

containerBoard.addEventListener('mousedown', (event) => {
  console.log(event.target.textContent);
  // Click on CapsLock
  if (event.target.classList.contains('capslock')) {
    clickOnCapsLock();
  }


  const keysShift = containerBoard.querySelectorAll('.shift');
  const keysAlt = containerBoard.querySelectorAll('.alt');
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

    if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysShift[0].classList.contains('active') || keysShift[1].classList.contains('active'))) {
      languageChange();
    }
    //clickOnShift.apply(event);
  }

  // Click on Alt
  if (event.target.classList.contains('alt')) {
    event.target.classList.toggle('active');
    if ((keysAlt[0].classList.contains('active') || keysAlt[1].classList.contains('active')) && (keysShift[0].classList.contains('active') || keysShift[1].classList.contains('active'))) {
      languageChange();
    }
    //clickOnAlt.apply(event);
  }

  // Click on Backspace
  if (event.target.classList.contains('backspace')) {
    clickOnBackspace();
  }

  // Click on Ctrl
  if (event.target.classList.contains('ctrl')) {
    clickOnCtrl.apply(event);
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
    event.target.classList.toggle('active');
    textarea.value = '';
    this.onmouseup = () => event.target.classList.remove('active');
  }
});



document.addEventListener('keydown', (event) => {
  let keysDom = containerBoard.querySelectorAll('div');
  for (let i = 0; i < eventWich.length; i += 1) {
    if (eventWich[i] === event.code) {
      keysDom[i].classList.add('active');
      this.onkeyup = () => keysDom[i].classList.remove('active');
    }
  }

});

// document.addEventListener('keyup', (event) => {
//   let a = containerBoard.querySelectorAll('div');
//   a.forEach((elem) => {
//     if (elem.textContent.toLowerCase() === event.key.toLowerCase() || elem.textContent.toLowerCase() === event.code.toLowerCase() || elem.textContent[0].toLowerCase() === event.key.toLowerCase() || elem.textContent[1].toLowerCase() === event.key.toLowerCase()) elem.classList.toggle('active');
// });
// });
