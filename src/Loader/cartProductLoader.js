import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const loadedProducts = await fetch( 'products.json' );
    const prodcuts = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
    for ( const id in storedCart ) {
        const addedProduct = prodcuts.find( pd => pd.id === id );
        if ( addedProduct ) {
            const quantity = storedCart[ id ];
            addedProduct.quantity = quantity;
            savedCart.push( addedProduct );

        }
    }

    return savedCart;
}

export default cartProductLoader;