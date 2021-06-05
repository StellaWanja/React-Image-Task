import './App.css';
import Image from './components/Image';
import Img1 from './img/img7.jpg';
import Img2 from './img/img8.jpg';
import Img3 from './img/img9.jpg';

function App() {
  return (
    <div className="App">
      <Image
        w="250"
        h="250"
        source= {Img1}
        alt="img1"/>
      <Image
        w="300"
        h="300"
        source={Img2}
        alt="img2"/>
      <Image
        w="350"
        h="350"
        source={Img3}
        alt="img3" />
    </div>
  );
}

export default App;
