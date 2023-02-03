const about = document.querySelector('.about');
document.addEventListener('DOMContentLoaded', () => {
  const allWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
  console.log(allWidth);
  if (allWidth < 851) {
    about.style.display = 'none';

    const wrap = document.querySelector('.wrapper');

    const div = document.createElement('div');
    div.className = 'cont';
    wrap.append(div);

    const cont = document.querySelector('.cont');

    const h2 = document.createElement('h2');
    h2.className = 'about__subtitle';
    h2.innerHTML = 'Front-End Developer';
    cont.append(h2);
    const subtitle = document.querySelector('.about__subtitle');

    const h1 = document.createElement('h1');
    h1.className = 'about__title';
    h1.innerHTML = 'Tiurne Viktoriya';
    cont.append(h1);

    const p = document.createElement('p');
    p.className = 'text__p';
    p.innerHTML = `I like to program and learn new technologies. Use the Scrum methodology in
    my work. Set myself a goal, paint an implementation plan and
    deadlines. I get new knowledge on my own: read documentation,
    watch videos on YouTube, solve practical tasks on codewars,
    communicate on forums`;
    cont.append(p);
  } else {
    about.style.display = 'block';
  }
});

// accordion
const arrows = document.querySelectorAll('*[data-acc-head]');
for (let arrow of arrows) {
  arrow.addEventListener('click', () => {
    let attr = arrow.getAttribute('data-acc-head');
    console.log(attr);
    let info = document.querySelector(`[data-acc-info='${attr}']`);
    arrow.classList.toggle('_arrow-up')
    info.classList.toggle('_close')
  });
}
