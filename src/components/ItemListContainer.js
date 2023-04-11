
const ItemListContainer = (props) =>{
    return (
        <main>
            <h2>Nombre Producto</h2>
            <p>Producto: {props.producto} </p>
            <p>Precio: {props.precio}</p>
        </main>
    )
} 

export default ItemListContainer;