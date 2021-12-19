import FullName from './profile/FullName';
import Bio from './profile/Bio';
import Profession from './profile/Profession';
import Photo from "./profile/photo";
import Photos from "./omar.jpg";
import Alert from './profile/alert';

import './App.css';

function App() {
  const alertMyInput = name => alert(name);
  return (
    <div className="App">
    <div>
    <Alert  alertMyInput={alertMyInput} />
    <FullName name=" OMAR ZOUARI " />
    <Photo> <img src={Photos} width="150" borderRadius="100" alt={Photos} />  </Photo>
    <Bio age= {26} />
    <Profession prof="Civil engineering technician" />
    </div>
    </div>
  );
}

export default App;
