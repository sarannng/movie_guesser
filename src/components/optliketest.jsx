 
import Button from 'react-bootstrap/Button';
import { useEffect, useState} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Services/firebase-config';

function Otpinput(){

  const [movie, setmovie] = useState("");
  const [movieimg, setmovieimg] = useState("data:image/jpeg;base64,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")
  const [wrongcount, setwrongcount] = useState(0);
  const [show, setShow] = useState(false);
  const [doclen, setdoclen] = useState(0);
  const [ind, setind] = useState(0);
  const [data, setdata] = useState([]);
  const [state, setstate] = useState({
    char1: "*",
    char2: "*",
    char3: "*",
    char4: "*", 
    char5: "*",
    char6: "*"
  });

   
  useEffect(()=>{ 
   
      
      }, []);


      async function callingdata(){
        
        const vr1 = Math.floor(Math.random( )* 5);
        const vr2 = Math.floor(Math.random( )* 5);;
        
        // console.log(vr1 + " " + vr2);
        // const varname1 = "char" + vr1;
        // const varname2 = "char" + vr2;

            
        // console.log(varname1)


        const data = await getDocs(collection(db,"movie_collection"));
        console.log("=-=-=-=-=-")
        console.log(data.docs[0].data().movie_name )
        console.log(data.docs.length)

        
        setdoclen(data.docs.length);
        

         
      }
      
      function reset(){
        setstate({
          char1: "*",
          char2: "*",
          char3: "*",
          char4: "*", 
          char5: "*",
          char6: "*"
        });
      }

       async function setting_moviesdata(){
 
        const data = await getDocs(collection(db,"movie_collection"));
        console.log("=-=-=-=-=-");
        const moviename = await data.docs[ind].data().movie_name;
        const movieimg = await data.docs[ind].data().hint_image;
        setmovie(moviename);
  
        console.log("=-=-=-=-=-");
        setstate({char1: movie[0], char3: movie[2]});
        console.log("=-=-=-=-=-");
        setmovieimg(movieimg);

            
        setstate({char1: movie[0], char3: movie[2]});


        if(ind === doclen){
          setind(0);
        }
        //setdata(dt);
        setind(ind+1);
      
        console.log(data.docs[ind].data().movie_name);
        console.log(data.docs.length)

        reset();
           
        //setstate({char1: movie[0], char3: movie[2]});

      }

    async  function handleChange(event ){
        const ch = event.target.value;
       // console.log(val)
        // console.log(ch)
        // setchar1(ch);

        console.log(ch);
        const correct_char =  event.target.name.slice(-1) -1;
        
        console.log(movie[correct_char]);  

        if(ch === movie[correct_char]){
          console.log("correct" + ch);
          setstate({
            ...state,
            [event.target.name] : ch, 
                  })

          console.log(state.char6)
        }

        else{
          console.log("incorrect");
           
          setstate({
            ...state,
            [event.target.name] : "*", 
                  });
        }
    
      }

      function checkcorrection(){
        console.log("sarang");
        console.log(state.char1);
        console.log(movie[0]);
        console.log(state.char2);
        console.log(movie[1]);
        console.log(state.char3);
        console.log(movie[2]);
        console.log(state.char4);
        console.log(movie[3]);
        console.log(state.char5);
        console.log(movie[4]);
        console.log(state.char6);
        console.log(movie[5]);


        
        if(state.char1  === movie[0] && state.char2  === movie[1] &&   state.char3  === movie[2] &&  
          state.char4  === movie[3] && state.char5 === movie[4] && state.char6 === movie[5]){
          console.log("============Miriclae---------------");
         
         
        }
      }
 

    return (
      <>
             <div className=""> 
          <h4>Hint Image</h4>
 
          <img  height={300} width={400} src={movieimg}/>
        </div>


      <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      
    </Row>

      <form onSubmit={checkcorrection()}>
        <div className="otpContainer">

          <input
            name="char1"  
            type="text"
            //autoComplete="off"
            className="otpInput"
            value={state.char1} 
           // onKeyPress={this.keyPressed}
            onChange={handleChange}
           // tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
           <input
            name="char2"  
            type="text"
            autoComplete="off"
            className="otpInput"
            value={state.char2}
           // onKeyPress={this.keyPressed}
           onChange={handleChange}
           // tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          /> <input
          name="char3"  
          type="text"
          autoComplete="off"
          className="otpInput"
          value={state.char3}
         // onKeyPress={this.keyPressed}
         onChange={ handleChange}
         // tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

        /> <input
        name="char4"  
        type="text"
        autoComplete="off"
        className="otpInput"
        value={state.char4}
       // onKeyPress={this.keyPressed}
       onChange={ handleChange}
       // tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

      /> <input
      name="char5"  
      type="text"
      autoComplete="off"
      className="otpInput"
      value={state.char5}
     // onKeyPress={this.keyPressed}
     onChange={ handleChange}
     // tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

    /> <input
    name="char6"  
    type="text"
    autoComplete="off"
    className="otpInput"
    value={state.char6}
   // onKeyPress={this.keyPressed}
   onChange={ handleChange}
   // tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

  />
    
        </div>
        <Button onClick={ setting_moviesdata} className="primary" >
          Next
        </Button>
      </form>
      </>
    );
  
}


export default Otpinput; 