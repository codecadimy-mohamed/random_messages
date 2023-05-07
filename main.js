console.log('Hello, World!');
const phrases = [['Believe in yourself, ', ["don't give up.", "and your abilities.", "keep pushing forward.", "you are capable.", "dream big and go for it!"]], ["Success: ", ["Don't give up.", "Believe in yourself.", "Taking action.", "Mistakes.", "Dream big"]]];
const randomMessages = () => {
  const firstNumbers = Math.floor(Math.random() * 2);
  const secondNumber = Math.floor(Math.random() * 5);
  // console.log(phrases[firstNumbers][2][secondNumber]);
  console.log(`${phrases[firstNumbers][0]}${phrases[firstNumbers][1][secondNumber]}`);
};
randomMessages();
