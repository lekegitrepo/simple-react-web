
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
    desc: "Beautiful Modern Bedroom Design",
    title: 'Modern Bedroom'
  },
  {image: images['image-7.jpg'],
    desc: "Well Furnished Bathroom",
    title: 'Bathroom'
  },
  {image: images['image-8.jpg'],
    desc: "Beautiful Interior Design",
    title: 'Interior Design'
  },
  {image: images['image-9.jpg'],
    desc: "Beautiful Interior Design",
    title: 'Interior Design'
  },
  {image: images['image-10.jpg'],
    desc: "Beautiful Interior Design",
    title: 'Interior Design'
  }
]

export default contents;
