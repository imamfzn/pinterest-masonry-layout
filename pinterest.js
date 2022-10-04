const IMAGES = [
    "https://i.pinimg.com/564x/9c/b8/c7/9cb8c740190839ed60f58d734f4783c8.jpg",
    "https://i.pinimg.com/736x/f5/46/14/f546140caa85552a08de3c96294a4abd.jpg",
    "https://i.pinimg.com/736x/81/55/1d/81551dfd032b9fe69785245c6f1b5c23.jpg",
    "https://i.pinimg.com/564x/57/b0/b7/57b0b701d551b94dd0d1d048acdeab44.jpg",
    "https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png",
    "https://i.pinimg.com/474x/69/5d/cc/695dcc4c265d8e11243fe0126bade0fa.jpg",
    "https://i.pinimg.com/564x/b3/26/07/b3260733ed12528e0a1481b94531a6e4.jpg",
    "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
];

function renderImg(img) {
    return `<img src="${img}"/>`;
}

function renderColumn(images) {
    const imgsHTML = images.map(renderImg).join("\n")
    return `<div class="column">${imgsHTML}</div>`;
}

function render() {
    const COLS_NUM = Math.floor($('main').width() / 350);
    const cols = [];

    for (let idx in IMAGES) {
        if (!cols[idx % COLS_NUM]) {
            cols[idx % COLS_NUM] = [];
        }

        cols[idx % COLS_NUM].push(IMAGES[idx])
    }

    const columns = [];

    for (let k in cols) {
        columns.push(renderColumn(cols[k]));
    }

    $('main').html(columns.join("\n"))
}

$(document).ready(render);
$(window).resize(render);
