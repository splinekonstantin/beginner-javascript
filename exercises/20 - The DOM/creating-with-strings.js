const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
        <h2>I'm a ${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;
item.innerHTML = myHTML;
