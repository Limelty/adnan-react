import { useState } from "react"
import Background from "./Component/Background/Background";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";

const App = () => {
  const [playStatus,setPlayStatus] = useState(true);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
       setPlayStatus={setPlayStatus}
       heroData={heroData[heroCount]}
       heroCount={heroCount}
       setHeroCount={setHeroCount}
       playStatus={playStatus}
      />
    </div>
  )
}


export default App
