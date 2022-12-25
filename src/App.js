import logo from './logo.svg';
import './App.css';
import { db } from './Services/firebase-config';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  getFirestore,
 onSnapshot,
 deleteDoc,
 
   
} from "firebase/firestore";
import Otpinput from './components/optliketest';

function App() {

  
  async function testdata(){
    console.log("1") 
    await addDoc(collection(db, "testing"), {"name": "etst"})
    console.log("2")
  }

  return (
    <div className="App">
      <h2>Guess the movie?</h2>
      <header className="App-header">

        

 
    
        <Otpinput/>
       
          
      </header>

    </div>
  );
}

export default App;
