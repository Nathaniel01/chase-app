import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavigationBar';
import { useState } from 'react'
import Signup from './components/SignUp';

function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Navbar />
      <Signup />
      <img src='https://media.ray-ban.com/cms/resource/image/446912/landscape_ratio720x233/2592/839/6b8c0bba9d9305f176678c9b3319b739/FA07B82D8129A083C716D478A84C78CC/rb-hp-hero-color-block-man-d.jpg' style={{ width: '100%' }} />
    </>
  );
}

export default App;
