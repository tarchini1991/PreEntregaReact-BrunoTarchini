import CartWidget from "./CartWidget";

const NavBar = () =>{
    return (
        <header>
                <h1>TIENDA ONLINE</h1>
                <nav>
                    <a href="#">Productos</a>
                    <a href="#">Categoria</a>
                    <a href="#">Carrito</a>
                    <CartWidget/>
                </nav>
        </header>
    )
} 

export default NavBar;