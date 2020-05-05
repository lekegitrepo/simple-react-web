import Image from '../img/designs/image-1.jpg';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../img/designs', false, /\.(png|jpe?g|svg)$/));

console.log(images);

for (let image in images) {
  console.log(image)
}

const contents = [
  {image: images['image-1.jpg'],
    desc: "This is an interior swimming pool",
    title: 'Interior swimming pool'
  },
  {image: images['image-6.jpg'],
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    title: 'Interior Design'
  },
  {image: images['image-7.jpg'],
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    title: 'Interior Design'
  }
]

export default contents;
