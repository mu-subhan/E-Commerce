import React from "react";
import Row from "./common/Row";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return ( 
        <Link to='product-detail'
         className="w-full shadow pb-[5px]"
         >
            <img
            className="w-full object-cover h-[400px]"
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="random "
            />
            <Row className ='px-[10px]'>
                <h5 className="text-black text-[16px] font-semibold mt-[18px]">
                    Demo Title
                </h5>
            </Row>
            <Row className='justify-between mt-[16px] px-[10px] mb-[10px]'>
                <p className="text-[25px] text-[#00000080] "> Clothing</p> 
                <p className="text-[25px] text-[#00000080] font-semibold"> $28</p> 

            </Row>
        </Link>
     );
}
 
export default ProductCard;