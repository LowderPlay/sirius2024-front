import Logo from "./assets/logo.svg";
import {SearchBar} from "./SearchBar.tsx";
import {Promo} from "./Promo.tsx";

function App() {
  return (
      <div className="flex items-center justify-center">
          <div className="flex flex-col items-stretch justify-center h-screen max-w-7xl md:w-screen p-2">
              <img src={Logo} alt="Skillactive" className="self-center w-2/3 md:w-1/3 md:py-16 py-20"/>
              <SearchBar/>
              <Promo/>
          </div>
      </div>
  )
}

export default App
