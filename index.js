let board = document.querySelector("#board");
let items = [];
for (let i = 1; i <= 64; i++) {
  let item = () => {
    return `<div id="${i}" class="item ready"><span>${i}</span><div id="select"></div>
    <div id="lines">

    </div>
    </div>`;
  };
  items.push(item());
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Generate an array containing numbers from 1 to 64
let numbersArray = Array.from({ length: 64 }, (_, i) => i + 1);

// Shuffle the array
shuffleArray(numbersArray);

// Function to generate unique numbers sequentially
let index = 0;
function getNextUniqueNumber() {
  if (index >= numbersArray.length) {
    // If all numbers are generated, reshuffle the array
    shuffleArray(numbersArray);
    index = 0;
  }
  return numbersArray[index++];
}

let numberBlack = getNextUniqueNumber();

items[numberBlack - 1] = `<div id="${numberBlack}" class="item"><span>${numberBlack}</span><div id="select"><div id="fill-dot"></div></div></div>`;

// black
if (0 < numberBlack && numberBlack <= 8) {
  for (let i = 1; i < numberBlack; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 1; i < 9; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  for (let i = numberBlack - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (8 < numberBlack && numberBlack <= 16) {
  for (let i = 9; i < numberBlack; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 1; i < 17; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  for (let i = numberBlack - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (16 < numberBlack && numberBlack <= 24) {
  for (let i = 17; i < numberBlack; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 1; i < 25; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  for (let i = numberBlack - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (24 < numberBlack && numberBlack <= 32) {
  for (let i = 25; i < numberBlack; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 1; i < 33; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  for (let i = numberBlack - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (32 < numberBlack && numberBlack <= 40) {
  for (let i = 33; i < numberBlack; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 1; i < 41; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  for (let i = numberBlack - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (40 < numberBlack && numberBlack <= 48) {
  for (let i = 41; i < numberBlack; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 1; i < 49; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  for (let i = numberBlack - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (48 < numberBlack && numberBlack <= 56) {
  for (let i = 49; i < numberBlack; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 1; i < 57; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  for (let i = numberBlack - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (56 < numberBlack && numberBlack <= 64) {
  for (let i = 57; i < numberBlack; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 1; i < 65; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal"></div>`;
    }, 10);
  }

  for (let i = numberBlack + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  for (let i = numberBlack - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical"></div>`;
    }, 10);
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 1) {
    for (let i = numberBlack + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlack % 8 !== 0) {
    for (let i = numberBlack - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
}

// red
let itemsRed = items.filter((x) => {
  return x.includes("ready");
});

let red = items.map((elem, index) => {
  if (elem === itemsRed[0]) {
    return index + 1;
  }
});
let red2 = itemsRed.map((elem, index) => {
  return index + 1;
});

// Shuffle the array
shuffleArray(red2);

// Function to generate unique numbers sequentially
let indexRed = 0;
function getNextUniqueNumberRed() {
  if (indexRed >= red2.length) {
    // If all numbers are generated, reshuffle the array
    shuffleArray(red2);
    indexRed = 0;
  }
  return red2[index++];
}

let numberRed = getNextUniqueNumberRed();

items[numberRed - 1] = `<div id="${numberRed}" class="item"><span>${numberRed}</span><div id="select"><div id="fill-dot" style="background-color: red !important;"></div></div></div>`;

if (0 < numberRed && numberRed <= 8) {
  for (let i = 1; i < numberRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 1; i < 9; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (8 < numberRed && numberRed <= 16) {
  for (let i = 9; i < numberRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 1; i < 17; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (16 < numberRed && numberRed <= 24) {
  for (let i = 17; i < numberRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 1; i < 25; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (24 < numberRed && numberRed <= 32) {
  for (let i = 25; i < numberRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 1; i < 33; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (32 < numberRed && numberRed <= 40) {
  for (let i = 33; i < numberRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 1; i < 41; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (40 < numberRed && numberRed <= 48) {
  for (let i = 41; i < numberRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 1; i < 49; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (48 < numberRed && numberRed <= 56) {
  for (let i = 49; i < numberRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 1; i < 57; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (56 < numberRed && numberRed <= 64) {
  for (let i = 57; i < numberRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 1; i < 65; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  for (let i = numberRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: red !important;"></div>`;
    }, 10);
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 1) {
    for (let i = numberRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberRed % 8 !== 0) {
    for (let i = numberRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: red !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
}

// Blue
let itemsBlue = items.filter((x) => {
  return x.includes("ready");
});

let Blue = items.map((elem, index) => {
  if (elem === itemsBlue[0]) {
    return index + 1;
  }
});
let numberBlue = Number(
  Blue.filter((x) => {
    return x != undefined;
  })
);

items[numberBlue - 1] = `<div id="${numberBlue}" class="item"><span>${numberBlue}</span><div id="select"><div id="fill-dot" style="background-color: #0040ff !important;"></div></div></div>`;

if (0 < numberBlue && numberBlue <= 8) {
  for (let i = 1; i < numberBlue; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 1; i < 9; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (8 < numberBlue && numberBlue <= 16) {
  for (let i = 9; i < numberBlue; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 1; i < 17; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (16 < numberBlue && numberBlue <= 24) {
  for (let i = 17; i < numberBlue; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 1; i < 25; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (24 < numberBlue && numberBlue <= 32) {
  for (let i = 25; i < numberBlue; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 1; i < 33; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (32 < numberBlue && numberBlue <= 40) {
  for (let i = 33; i < numberBlue; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 1; i < 41; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (40 < numberBlue && numberBlue <= 48) {
  for (let i = 41; i < numberBlue; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 1; i < 49; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (48 < numberBlue && numberBlue <= 56) {
  for (let i = 49; i < numberBlue; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 1; i < 57; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (56 < numberBlue && numberBlue <= 64) {
  for (let i = 57; i < numberBlue; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 1; i < 65; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberBlue - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #0040ff !important;"></div>`;
    }, 10);
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 1) {
    for (let i = numberBlue + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberBlue % 8 !== 0) {
    for (let i = numberBlue - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #0040ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
}

// Pink
let itemsPink = items.filter((x) => {
  return x.includes("ready");
});

let Pink = items.map((elem, index) => {
  if (elem === itemsPink[0]) {
    return index + 1;
  }
});
let numberPink = Number(
  Pink.filter((x) => {
    return x != undefined;
  })
);

items[numberPink - 1] = `<div id="${numberPink}" class="item"><span>${numberPink}</span><div id="select"><div id="fill-dot" style="background-color: #fb00ff !important;"></div></div></div>`;

if (0 < numberPink && numberPink <= 8) {
  for (let i = 1; i < numberPink; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 1; i < 9; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (8 < numberPink && numberPink <= 16) {
  for (let i = 9; i < numberPink; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 1; i < 17; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (16 < numberPink && numberPink <= 24) {
  for (let i = 17; i < numberPink; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 1; i < 25; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (24 < numberPink && numberPink <= 32) {
  for (let i = 25; i < numberPink; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 1; i < 33; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (32 < numberPink && numberPink <= 40) {
  for (let i = 33; i < numberPink; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 1; i < 41; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (40 < numberPink && numberPink <= 48) {
  for (let i = 41; i < numberPink; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 1; i < 49; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (48 < numberPink && numberPink <= 56) {
  for (let i = 49; i < numberPink; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 1; i < 57; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (56 < numberPink && numberPink <= 64) {
  for (let i = 57; i < numberPink; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 1; i < 65; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  for (let i = numberPink - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #fb00ff !important;"></div>`;
    }, 10);
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 1) {
    for (let i = numberPink + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPink % 8 !== 0) {
    for (let i = numberPink - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #fb00ff !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
}

// green
let itemsGreen = items.filter((x) => {
  return x.includes("ready");
});

let green = items.map((elem, index) => {
  if (elem === itemsGreen[0]) {
    return index + 1;
  }
});
let numberGreen = Number(
  green.filter((x) => {
    return x != undefined;
  })
);

items[numberGreen - 1] = `<div id="${numberGreen}" class="item"><span>${numberGreen}</span><div id="select"><div id="fill-dot" style="background-color: #14cc1b !important;"></div></div></div>`;

if (0 < numberGreen && numberGreen <= 8) {
  for (let i = 1; i < numberGreen; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 1; i < 9; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (8 < numberGreen && numberGreen <= 16) {
  for (let i = 9; i < numberGreen; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 1; i < 17; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (16 < numberGreen && numberGreen <= 24) {
  for (let i = 17; i < numberGreen; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 1; i < 25; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (24 < numberGreen && numberGreen <= 32) {
  for (let i = 25; i < numberGreen; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 1; i < 33; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (32 < numberGreen && numberGreen <= 40) {
  for (let i = 33; i < numberGreen; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 1; i < 41; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (40 < numberGreen && numberGreen <= 48) {
  for (let i = 41; i < numberGreen; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 1; i < 49; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (48 < numberGreen && numberGreen <= 56) {
  for (let i = 49; i < numberGreen; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 1; i < 57; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (56 < numberGreen && numberGreen <= 64) {
  for (let i = 57; i < numberGreen; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 1; i < 65; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  for (let i = numberGreen - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #14cc1b !important;"></div>`;
    }, 10);
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 1) {
    for (let i = numberGreen + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberGreen % 8 !== 0) {
    for (let i = numberGreen - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #14cc1b !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
}

// cyan
let itemsCyan = items.filter((x) => {
  return x.includes("ready");
});

if (!itemsCyan.length) {
  location.reload();
}

let cyan = items.map((elem, index) => {
  if (elem === itemsCyan[0]) {
    return index + 1;
  }
});
let numberCyan = Number(
  cyan.filter((x) => {
    return x != undefined;
  })
);

items[numberCyan - 1] = `<div id="${numberCyan}" class="item"><span>${numberCyan}</span><div id="select"><div id="fill-dot" style="background-color: #5ce3e6 !important;"></div></div></div>`;

if (0 < numberCyan && numberCyan <= 8) {
  for (let i = 1; i < numberCyan; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 1; i < 9; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (8 < numberCyan && numberCyan <= 16) {
  for (let i = 9; i < numberCyan; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 1; i < 17; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (16 < numberCyan && numberCyan <= 24) {
  for (let i = 17; i < numberCyan; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 1; i < 25; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (24 < numberCyan && numberCyan <= 32) {
  for (let i = 25; i < numberCyan; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 1; i < 33; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (32 < numberCyan && numberCyan <= 40) {
  for (let i = 33; i < numberCyan; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 1; i < 41; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (40 < numberCyan && numberCyan <= 48) {
  for (let i = 41; i < numberCyan; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 1; i < 49; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (48 < numberCyan && numberCyan <= 56) {
  for (let i = 49; i < numberCyan; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 1; i < 57; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (56 < numberCyan && numberCyan <= 64) {
  for (let i = 57; i < numberCyan; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 1; i < 65; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  for (let i = numberCyan - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #5ce3e6 !important;"></div>`;
    }, 10);
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 1) {
    for (let i = numberCyan + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberCyan % 8 !== 0) {
    for (let i = numberCyan - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #5ce3e6 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
}

// purple
let itemsPurple = items.filter((x) => {
  return x.includes("ready");
});

if (!itemsPurple.length) {
  location.reload();
}

let purple = items.map((elem, index) => {
  if (elem === itemsPurple[0]) {
    return index + 1;
  }
});
let numberPurple = Number(
  purple.filter((x) => {
    return x != undefined;
  })
);

items[numberPurple - 1] = `<div id="${numberPurple}" class="item"><span>${numberPurple}</span><div id="select"><div id="fill-dot" style="background-color: #8d47f5 !important;"></div></div></div>`;

if (0 < numberPurple && numberPurple <= 8) {
  for (let i = 1; i < numberPurple; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 1; i < 9; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (8 < numberPurple && numberPurple <= 16) {
  for (let i = 9; i < numberPurple; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 1; i < 17; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (16 < numberPurple && numberPurple <= 24) {
  for (let i = 17; i < numberPurple; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 1; i < 25; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (24 < numberPurple && numberPurple <= 32) {
  for (let i = 25; i < numberPurple; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 1; i < 33; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (32 < numberPurple && numberPurple <= 40) {
  for (let i = 33; i < numberPurple; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 1; i < 41; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (40 < numberPurple && numberPurple <= 48) {
  for (let i = 41; i < numberPurple; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 1; i < 49; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (48 < numberPurple && numberPurple <= 56) {
  for (let i = 49; i < numberPurple; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 1; i < 57; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (56 < numberPurple && numberPurple <= 64) {
  for (let i = 57; i < numberPurple; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 1; i < 65; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  for (let i = numberPurple - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #8d47f5 !important;"></div>`;
    }, 10);
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 1) {
    for (let i = numberPurple + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberPurple % 8 !== 0) {
    for (let i = numberPurple - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #8d47f5 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
}

// darkRed
let itemsDarkRed = items.filter((x) => {
  return x.includes("ready");
});

if (!itemsDarkRed.length) {
  location.reload();
}

let darkRed = items.map((elem, index) => {
  if (elem === itemsDarkRed[0]) {
    return index + 1;
  }
});
let numberDarkRed = Number(
  darkRed.filter((x) => {
    return x != undefined;
  })
);

items[numberDarkRed - 1] = `<div id="${numberDarkRed}" class="item"><span>${numberDarkRed}</span><div id="select"><div id="fill-dot" style="background-color: #870032 !important;"></div></div></div>`;

if (0 < numberDarkRed && numberDarkRed <= 8) {
  for (let i = 1; i < numberDarkRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 1; i < 9; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (8 < numberDarkRed && numberDarkRed <= 16) {
  for (let i = 9; i < numberDarkRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 1; i < 17; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (16 < numberDarkRed && numberDarkRed <= 24) {
  for (let i = 17; i < numberDarkRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 1; i < 25; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (24 < numberDarkRed && numberDarkRed <= 32) {
  for (let i = 25; i < numberDarkRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 1; i < 33; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (32 < numberDarkRed && numberDarkRed <= 40) {
  for (let i = 33; i < numberDarkRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 1; i < 41; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (40 < numberDarkRed && numberDarkRed <= 48) {
  for (let i = 41; i < numberDarkRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 1; i < 49; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (48 < numberDarkRed && numberDarkRed <= 56) {
  for (let i = 49; i < numberDarkRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 1; i < 57; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
} else if (56 < numberDarkRed && numberDarkRed <= 64) {
  for (let i = 57; i < numberDarkRed; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 1; i < 65; i++) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;

    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="horizontal" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed + 8; i <= 64; i = i + 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  for (let i = numberDarkRed - 8; i > 0; i = i - 8) {
    items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
    <div id="lines">
    </div>
    </div>`;
    setTimeout(() => {
      document.getElementById(`${i}`).children[2].innerHTML += `<div class="vertical" style="background-color: #870032 !important;"></div>`;
    }, 10);
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed + 9; i <= 64; i = i + 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed - 9; i > 0; i = i - 9) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="backSlash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 1) {
    for (let i = numberDarkRed + 7; i <= 64; i = i + 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 1) {
        break;
      }
    }
  }

  if (numberDarkRed % 8 !== 0) {
    for (let i = numberDarkRed - 7; i > 0; i = i - 7) {
      items[i - 1] = `<div id="${i}" class="item"><span>${i}</span><div id="select"></div>
      <div id="lines">
      </div>
      </div>`;
      setTimeout(() => {
        document.getElementById(`${i}`).children[2].innerHTML += `<div class="slash" style="background-color: #870032 !important;"></div>`;
      }, 10);
      if ((i + 8) % 8 === 0) {
        break;
      }
    }
  }
}

window.addEventListener("error", function (event) {
  // Reload the page
  location.reload();
});

board.innerHTML = items.join("");
