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