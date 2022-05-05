import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function NavBar(){
  return(
      <div class="navbar">
          <div class="navLogo">
            <Link to="/">manav shankar</Link>
          </div>
          <div class="navsection">
              <div class="navLinks">
                  <ul class="navLinkList">
                      <li><Link to="/film">film</Link></li>
                      <li><Link to="/art">art</Link></li>
                      <a href="https://foundation.app/@manav">nft</a>
                      <li><Link to="/social">social</Link></li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

function Film(){
  return(
    <div class="filmcont">
      <div class="greenbox">coming soon</div>
    </div>
  );
}

function Social(){
  return(
    <>
    <div class="spacerfull" style={{height:"80vh"}}></div>
    <div class="container">
      <div class="links">
        <a href="https://www.instagram.com/mnvshnkr/">
        <div class="linkpair">
          <div>instagram</div>
          <div>mnvshnkr</div>
        </div>
        </a>
        <a href="https://www.instagram.com/mnvshnkr.eth">
        <div class="linkpair">
          <div>art instagram</div>
          <div>mnvshnkr.eth</div>
        </div>
        </a>
        <a href="https://twitter.com/mnvshnkr">
        <div class="linkpair">
          <div>twitter</div>
          <div>mnvshnkr</div>
        </div>
        </a>
        <a href="https://discordapp.com/users/405289840851288064">
        <div class="linkpair">
          <div>discord</div>
          <div>manav#0001</div>
        </div>
        </a>
      </div>
    </div>
    </>
    
  );
}


function Art(){
  return(
    <div>
      <div class="spacerfull"></div>
        <div class="middleArt">

        <div class="artContainer">
          
          <div class="image">
            <img class="actualPic" src="/sand.png" alt=""/>
          </div>

          <div></div>
          <div class="info" style={{float:"left", textAlign:"left"}}>
            <div></div>
            <div class="title" >
              dunes
            </div>
            <div class="date" style={{marginTop:"10px"}}>
              blender, may 2022
            </div>
            <div class="comment">
            </div>
          </div>
        </div>

        <div class="artContainer">
          <div class="info" style={{float:"right", textAlign:"right"}}>
            <div></div>
            <div class="title">
              plaguezuki
            </div>
            <div class="date">
              photoshop, apr 2022
            </div>
            <div class="comment">
            plague from <a href="https://twitter.com/mv3nft" class="underlined:link">mv3</a>, reimagined as an <a href="https://twitter.com/AzukiOfficial" class="underlined:link">azuki</a>
            </div>
          </div>
          <div></div>
          <div class="image">
            <img class="actualPic" src="/azk.png" alt=""/>
          </div>
        </div>

        <div class="artContainer">
        
          <div class="image">
            <img class="actualPic" src="/slide.jpg" alt=""/>
          </div>

          <div></div>
          <div class="info" style={{float:"left", textAlign:"left"}}>
            <div></div>
            <div class="title" >
              memory
            </div>
            <div class="date" style={{marginTop:"10px"}}>
            blender, apr 2022
            </div>
            <div class="comment">
            
            </div>
          </div>
        </div>

        <div class="artContainer">
          <div class="info" style={{float:"right", textAlign:"right"}}>
            <div></div>
            <div class="title">
              untitled
            </div>
            <div class="date" style={{marginTop:"10px"}}>
            blender, mar 2022
            </div>
            <div class="comment">
            </div>
          </div>
          <div></div>
          <div class="image">
          <video class="actualPic" autoplay muted loop>
            <source src="sphere.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
          
        

        </div>
    </div>
  );
}


function App() {
  return (
    <div>
      <div class="mobileWarning">
        <div class="logoimg">
          <img src="/sqq.png" alt="" style={{height:"30vw"}}/>
        </div>
        <div>
          please view this webpage on a desktop/laptop computer.
        </div>
      </div>
      <div class="page">
      <Router>
      <NavBar/>
      <div className="App">
      </div>
      <div>
        <Routes>
            <Route  exact path="/art" element={<Art/>}/>
            <Route  exact path="/film" element={<Film/>}/>
            <Route exact path="/social" element={<Social/>}/>
            <Route  exact path="/" element={<div/>}/>
        </Routes>
      
      </div>
      </Router>
      </div>
    </div>
  );
}

export default App;
