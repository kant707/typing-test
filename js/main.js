//alert('hi');

const pragraphs = [
  'Dear friends! the great building where we are studying right now, has successfully completed 25 years of its teaching. In this journey of 25 years, this school has created many bright students who are serving our country today, with their best possible capabilities. My school has countless achievements to be listed. Let me tell a few here to mark this day a special one for me.',

  'The school is a place where the kids of today are raised up to be the better future of a country for tomorrow. The School is certainly a sacred place where the education is imparted to make a nation smart and civilized, stronger and developed for tomorrow.',

  'My hero is my mom. I love my mother and my other hero is my dad. My parents are my great inspiration. I love my mother because of a lot of reasons I truly love her, respect her and give her a great value. It is the great blessing of God that we have mothers in this world.',

  'Creative Essay writing is now recognized as one of the most beneficial activity for kids for their overall personality development. Therefore, it is important that we introduce and encourage kids, the art of writing at an early age itself. Essay writing helps kids to engage in diverse thoughts, inspire them to use their imagination and motivates them to read more. It is also one of the most enjoyable way to practice grammar and improve their written and spoken English.',

  'I have a pet animal. My pet animal is a cat. Her name is Kitty.She is big with white and brown in colour. She has a long tail. She has four kittens.They all are very cute.All of them are white in colour. Fish is her favorite food.I give her milk  every day.She  can climb the trees.She likes to play in my bed.I like to play with my Kitty.I love her very much.',

  'I have a small beautiful garden at my home in Kerala. There are many beautiful flowers in our garden. Rose, Hibiscus, Lilly, Orchids, Sunflower, Dalia etc. are some of them. My grandmother takes care of our garden. When we go to Kerala for vacation, I help my grandmother to water the plants. She teaches me how to plant and take care of them. When we go to visit our friends and relatives, we collect different plants from their garden also.',

  'Mother Earth has given us many gifts. One of them is trees. Trees are very important to us. Many of our tribes live inside forests which have trees.  Trees provide us timber to make furniture. Wild animals depend on trees for food and shelter. Trees help to prevent soil erosion and floods. They give out Oxygen and make the Earth clean and cool. Many products such as paper, gum, rubber etc are obtained from trees.',

];

console.log(pragraphs[2]);

const msg = document.getElementById('paragraph');
const displayMsg = document.getElementById('finalMsg');
const typeWords = document.getElementById('typingArea');
const btn = document.getElementById('cta');
let startTime, endTime;


const playGame = () => {
  let randomNumber = Math.floor(Math.random() * pragraphs.length);
  msg.innerText = pragraphs[randomNumber];

  let date = new Date();
  startTime = date.getTime();
  btn.innerText = 'Done';
  typeWords.value = '';
  displayMsg.setAttribute('class', 'display-msg');
}

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = Math.floor(((endTime - startTime) / 1000));

  console.log('Total time: ', totalTime);

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.floor((wordCount / totalTime) * 60);
  console.log('Speed ', speed);

  let finalMsg = 'Your typing speed is ' + speed + ' words per minute. ' ;

  finalMsg += compareWords(msg.innerText, totalStr);
  displayMsg.setAttribute('class', 'display-msg show');
  displayMsg.innerText = finalMsg;

}

const compareWords = (str1, str2)=> {
  let words1 = str1.split(' ');
  let words2 = str2.split(' ');
  let count = 0;

  words1.forEach(function(item, index){
    if(item == words2[index]){
      count++;
    }
  });

  let errorWords = (words1.length - count);

  return (count + ' correct out of ' + words1.length + ' words and the total number of error are ' + errorWords + '.');

}

const wordCounter = (str) => {
  let response = str.split(' ').length;
  console.log('Typed words ', response);
  return response;
}

btn.addEventListener('click', function(){

  if(this.innerText == 'Start' ) {
    typeWords.disabled = false;
    playGame();
  }else if(this.innerText == 'Done') {
    typeWords.disabled = true;
    btn.innerText = 'Start';
    endPlay();
  }

});




(function(){


})();

