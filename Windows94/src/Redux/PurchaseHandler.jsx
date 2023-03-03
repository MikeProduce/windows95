import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from './cartSlice.jsx';
import { Button } from '../components/Button.jsx';



   export const PurchaseHandler = (product) => {
    const dispatch = useDispatch();
    //dispatch is what we are using to call redux
   
        let fullDescription = product;
        const itemName = fullDescription.title;
        const itemPrice = fullDescription.price;
        const itemImage = fullDescription.images[0];
        let itemObj = {itemName ,itemPrice, itemImage };
        dispatch(addToCart(itemObj))
        // this purchase handler is handling all the updates whenever a user decides to buy something 
        return (
          <Button onClick={() => purchaseHandler(product)}>Add to cart</Button>
        )
    }