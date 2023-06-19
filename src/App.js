import './App.css';
import {useState} from 'react'

function App() {
  const [choa, setChoa] = useState()
  const [burb, setBurb] = useState()
  const [toods, setToods] = useState()
  const [moch, setMoch] = useState()
  const [success, setSuccess] = useState(false)
  var ans1=false;
  var ans2=false;
  var ans3=false;
  var ans4=false;
  const hint = () => {
    alert("Answer correctly");
  }
  const submitButton = () => {
    if (choa == null || burb == null || toods == null || moch == null) {
      alert("smh answer the questions")
      return
    }
    var str = choa.replace(/\s+/g, '');
    if (str.toLowerCase() === "choawep") {
      ans1=true;
    }
    str = burb.replace(/\s+/g, '');
    if (str.toLowerCase() === "burb") {
      ans2=true;
    }
    str = toods.replace(/\s+/g, '');
    if (str.toLowerCase() === "toods") {
      ans3=true;
    }
    ans4=true;
    if (ans1 && ans2 && ans3 && ans4) {
      setSuccess(true);
    }
    else {
      alert("WRONG! I'm on to you...");
    }
  }
  
  return (
    <div className="App">
      <div className="body"> 
      <div className="title">
      Give me passwords
      </div>
      <br/><br/><br/><br/>
      <div className="input">
        What's the wifi?
      <input type="text" value={choa} onInput={e =>setChoa(e.target.value)}></input>
      </div>
      <div className="input">
        What type of animal is a robin?
      <input type="text" value={burb} onInput={e =>setBurb(e.target.value)}></input>
      </div>
      <div className="input">
        Toodles.
      <input type="text" value={toods} onInput={e =>setToods(e.target.value)}></input>
      </div>
      <div className="input">
        What's Big Mama Moch's current gender?
      <input type="text" value={moch} onInput={e =>setMoch(e.target.value)}></input>
      </div>
      <button onClick={submitButton} className="submit">Submit</button>
      <button onClick={hint} className="hintbutton">Hint</button>
      <br/>
      <br/>
      <br/>
      <br/>
      {success && (
            <div>
                <a href='https://www.greetingsisland.com/ecard/pqpmhhbhtzx2'>O hey dere</a>
            </div>
        )}
      </div>
    </div>
  );
}

export default App;
