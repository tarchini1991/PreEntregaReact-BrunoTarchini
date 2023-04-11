import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";

const App = () => {
  return(
      <>
        <NavBar/>
        <ItemListContainer producto="Remera" precio="$100"/>
      </>
  )
}

export default App;