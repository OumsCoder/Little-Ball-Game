import React , {useState , useEffect} from 'react';
import './App.css';
import Ballon from './Components/Ballon'
import Bar from './Components/Bar'
import shuffle from 'shuffle-array'

const TIME = 120

function App (){

  // State
  const [score, setScore] = useState(0)
  const [ptBar, setPtBar] = useState([])
  const [num, setNum] = useState(0)
  const [mov, setMov] = useState(40)
  const [down, setDown] = useState(0);
  const [win, setWin] = useState(true)

  // useEffect for down ball
  useEffect(() => {
    // fx for initial array(array content a random number for pt balle)
    let mlt = 30;
    for (let i=0;i<100;i++) {
      mlt+=10
      ptBar.push(mlt)
    }
    // fx for set time when ball down
      const interval = setInterval(() => {
          setDown(down => down + 10);
      }, TIME);
      return () => (clearInterval(interval));
  }, []);

  // fx call when you press to left
  function pressLeft(){
      if(num<1250){
      setNum(num +10)
      }
  }

  // fx call when you press to right
  function pressRight(){
    if(num>0){
    setNum(num -10)
    }
  }

  // fx for listen the keyDown event
  document.body.onkeydown = function(e){
    if(e.keyCode===37){
     pressRight()
    }else if(e.keyCode===39){
      pressLeft()
    }
  } 

  // fx for shuffle array
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // condition for verify if ptBoule === ptBar
  if(down===340 && num===mov){
      shuffle(ptBar);
      console.log(ptBar)
      setDown(0)
      setMov(mov => ptBar[50])
      setScore(score => score +10)

  }else if(down===340 && num!==mov){
    setWin(false)
    setDown(down => 0);
    console.log('Perdu')
  }
  // console.log(`Mouvement de la boule y : ${mov}`)
  // console.log(`Mouvement de la barre y : ${num}`)

  function HandleSubmit(){
    setScore(score => 0)
    setWin(true)
  }

    return (
      <div>
         {win ? ( 
           <div>
              <p id="score">Score : {score}</p>
               <Ballon down={down} stle={num} mov={mov}/>
               <Bar stle={num} />
           </div>
          ) : (
              <div id="loseContain">
                <h1>Perdu</h1>
                <p>Score : {score}</p>
                <button type="submit" onClick={HandleSubmit} >Recommencer</button>
              </div>
          )}
       
        <p id="lib">Le but du jeux est de placer la boule sur la partie bleu de la bar</p>
      </div>
    )
}

export default App;