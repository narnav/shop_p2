import React, { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './app/loginSlice'
import { getproductsAsync, selectproducts } from './app/productSlice'
import { selectcats } from './app/catSlice'
import { addToCart } from './app/orderSlice'
const Products = () => {
    let params = useParams();
    let id = params.id;
    const userName = useSelector(selectUserName);
    const categories = useSelector(selectcats);
    const allProducts = useSelector(selectproducts);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getproductsAsync(id))
    }, [id])

    return (
        <div style={{ backgroundColor: "green" }}><h1>Products  from &nbsp; {id == 0 && 'ALL' } {id > 0 && categories[id-1].desc }</h1>

            {allProducts.map(prod => <div>{prod.desc}{prod.cat_id}
                <button onClick={()=>dispatch(addToCart())}>Buy</button>
            </div>)}

            <h1 className="animate__animated animate__bounceInDown">{userName && <div>shopper name {userName}</div>}</h1>
        </div>
    )
}

export default Products