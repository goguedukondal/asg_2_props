
import './App.css';
import Comp from './Components/Comp';

function App() {
  const l1="https://e.insd.io/s/p/239448_x2.png?1623841843";

  const eric_freng_pic="https://tbivision.com/files/2017/06/Eric-Feng.png";
  const name_1="Eric Feng";
  const start_up="Why are there so many Web3 startups?";
  const p1_1="This week, Pitchbook published their latest Emerging Tech";
  const p1_2="Indicator (ETI) report which tracks early stage investment activity..";
  const footer_1="Dec 4 . 6 min read .";
  const bt_1="Web 3";

  const l2="https://image.freepik.com/free-photo/mother-with-son-playing-summer-park_1157-20289.jpg";
  const chasten_pic="https://assets3.thrillist.com/v1/image/2819376/size/sk-2017_04_featured_listing_mobile.jpg";
  const name_2="Chasten Buttigieg";
  const marriage="What Marriage Means to Me";
  const p2_1="After dropping the kids off, I came home and stopped in the";
  const p2_2="kitchen to take in the aftermath of our chaotic morning together..";
  const footer_2="Nov 29 . 3 min read .";
  const bt_2=" Parenting";
  
  const l3="https://th.bing.com/th/id/R.63c1cf475973571f801a3e0e39500fd8?rik=FteczPaGJt99iw&riu=http%3a%2f%2fwww.retaillaborandemploymentlaw.com%2ffiles%2f2015%2f07%2fSan_Francisco.jpg&ehk=Tp3rc16WcJruLmoFx198qHdzZUwhvliBFxzYJQvsdLA%3d&risl=1&pid=ImgRaw&r=0";
  const nicholas_pic="https://th.bing.com/th/id/OIP.PB2xkRjQV9XTIx72kNZc6gHaHa?pid=ImgDet&rs=1";
  const name_3="Nicholas Moryl";
  const fransisco="Leaving San Francisco";
  const p3_1="Letting go with love";
  const p3_2="";
  const footer_3="Nov 23 . 8 min read ";
  const bt_3="Change";


  

  return (
    <div className="App" style={{display:"flex",flexDirection:"column",gap:"3rem",marginLeft:"8rem"}}>
      <Comp  pic={eric_freng_pic} name={name_1} bold={start_up} p1={p1_1} p2={p1_2} footer={footer_1} btn={bt_1} l={l1}/>
      <Comp style={{marginLeft:"10rem"}} pic={chasten_pic} name={name_2} bold={marriage} p1={p2_1} p2={p2_2} footer={footer_2} btn={bt_2} l={l2}/>
      <Comp pic={nicholas_pic} name={name_3} bold={fransisco} p1={p3_1} p2={p3_2} footer={footer_3} btn={bt_3} l={l3}/>
    </div> 
  );
}

export default App;
