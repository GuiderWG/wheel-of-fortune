(() => {
  const fortune = document.querySelector('.fortune');
  const wheel = document.querySelector('.wheel-fortune__active');
  const startButton = document.querySelector('.fortune__button');
  let deg = 0;
  let limit = 0;

  const surprises = [
    {
      id: 1,
      name: 'Массажное кресло',
      img:
        'https://www.yamaguchi.ru/images/product/yamaguchi-gt/png/yamaguchi%20gt_m_png.png',
    },
    {
      id: 2,
      name: 'Многофункциональная шведская стенка',
      img:
        'https://www.yamaguchi.ru/images/product/smart-wall/png/022_m_png.png',
    },
    {
      id: 3,
      name: 'Напольные весы',
      img:
        'https://www.yamaguchi.ru/images/product/body-scale/png/03_m_png.png',
    },
    {
      id: 4,
      name: 'Ирригатор',
      img: 'https://www.yamaguchi.ru/images/product/oral-care/png/1_m_png.png',
    },
    {
      id: 5,
      name: 'Боксерский мешок',
      img: 'https://www.yamaguchi.ru/images/product/boxer/png/boxer_m_png.png',
    },
    {
      id: 6,
      name: 'Боксерские перчатки',
      img:
        'https://www.yamaguchi.ru/images/product/boxing-gloves/png/gloves_0_m_png.png',
    },
    {
      id: 7,
      name: 'Кофемашина',
      img:
        'https://www.yamaguchi.ru/images/product/coffee-mann/png/1_1_m_png.png',
    },
    {
      id: 8,
      name: 'Внешний аккумулятор',
      img: 'https://www.yamaguchi.ru/images/product/power-bank/png/2_m_png.png',
    },
  ];

  const spin = () => {
    startButton.setAttribute('disabled', 'disabled');
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 10s cubic-bezier(.4,.09,0,1.00)';
    wheel.style.transform = `rotate(${deg}deg)`;
    limit += 1;
  };

  const createSurprise = (array) => {
    const surprise = array.map((el) => {
      return `
      <div class="suprise">
        <div class="suprise-overlay"></div>
        <div class="suprise__item">
          <div class="suprise__close">X</div>
          <div class="suprise__name">${el.name}</div>
          <div class="suprise__img"><img src=${el.img} alt=${el.name}></div>
        </div>
      </div>`;
    });

    fortune.insertAdjacentHTML(
      'beforeend',
      surprise[Math.floor(Math.random() * surprise.length)]
    );

    const supriseClose = document.querySelector('.suprise__close');

    supriseClose.addEventListener('click', () => {
      const suprise = document.querySelector('.suprise');
      suprise.remove();
      startButton.removeAttribute('disabled', 'disabled');
    });
  };

  const endAnimation = () => {
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  }

  startButton.addEventListener('click', () =>
    limit <= 2 ? spin() : startButton.setAttribute('disabled', 'disabled')
  );

  wheel.addEventListener('transitionend', () => {
    endAnimation()
    createSurprise(surprises);
  });
})();
