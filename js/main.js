const result = generate ();
console.log (JSON.stringify(result, undefined, ' '));


function generate() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const commentsList = [];

    for (let j = 0; j <= 30; j++) {
      const randomComment = {
        id: getRandom(1, 2000),
        avatar: 'img/avatar-' + getRandom(1, 6) + '.svg',
        message: getRandomMessage(),
        name: getRandomName(),
      };

      commentsList.push(randomComment);
    }

    const myObject = {
      id: i,
      url: 'photos/' + i + '.jpg',
      description: 'Моя фотка с отпуска ' + getRandom(1, 100),
      likes: getRandom(1, 200),
      comments: commentsList
    };
    photos.push(myObject);
  }

  return photos;
}

function getRandom(min, max) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

function getRandomMessage() {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const randomMessage = messages[getRandom(0, 5)];
  return randomMessage;
}

function getRandomName() {
  const names = [
    'Kostya',
    'Andrey',
    'Alexender',
    'Mike',
    'Chris',
    'Mary',
    'Helena'
  ];

  const randomName = names[getRandom(0, names.length - 1)];
  return randomName;
}

