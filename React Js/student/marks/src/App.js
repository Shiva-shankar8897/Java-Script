import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const[teluguMarks,setTeluguMarks]=useState("")
  const[hindiMarks,setHindiMarks]=useState("")
  const[englishMarks,setEnglishMarks]=useState("")
  const[mathsMarks,setMathsMarks]=useState("")
  const[scienceMarks,setScienceMarks]=useState("")
  const[socialMarks,setSocialMarks]=useState("")
  const[totalMarks,setTotalMarks]=useState()

  const handleteluguMarks = (event) =>{
    setTeluguMarks(event.target.value)
  }
  const handlehindiMarks = (event) =>{
    setHindiMarks(event.target.value)
  }
  const handleenglishMarks = (event) =>{
    setEnglishMarks(event.target.value)
  }
  const handleMathsMarks = (event) =>{
    setMathsMarks(event.target.value)
  }
  const handlescienceMarks = (event) =>{
    setScienceMarks(event.target.value)
  }
  const handlesocialMarks = (event) =>{
    setSocialMarks(event.target.value)
  }
  const Result =(event) => {
    
  const totalMarks= Number(teluguMarks)+ Number(hindiMarks)+ Number(englishMarks)+ Number(mathsMarks)+ Number(scienceMarks)+ Number(socialMarks)
    setTotalMarks(totalMarks);
  }











  return (
   <div>
    <h1>Student Marks</h1>
    <div>
      <label>Telugu:</label>
      <input type="text" id="telugu" name="telugu"/>
    </div>
    <div>
      <label>Hindi:</label>
      <input type="text" id="hindi" name="hindi"/>
    </div>
    <div>
      <label>English:</label>
      <input type="text" id="english" name="english"/>
    </div>
    <div>
      <label>Mathematics:</label>
      <input type="text" id="maths" name="maths"/>
    </div>
    <div>
      <label>Science:</label>
      <input type="text" id="science" name="science"/>
    </div>
    <div>
      <label>Social:</label>
      <input type="text" id="social" name="social"/>
    </div>
    <button onClick={Result}>Result</button>
    {totalMarks && <h2> Totalmarks:{totalMarks} </h2>}




   </div>
   
  );
}

export default App;
