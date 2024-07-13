// import React, { useEffect, useState } from "react";
// import Container from '../common/Container'
// import Row from "../common/Row";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const PopularProduct = () => {

//   const [Products,setProducts]= useState();



//   useEffect(()=>{
//   axios.get()
//   },[]);


//     return ( 
//         <Container>
//        <Row className='justify-center my-[20px] uppercase'>
//         <h1 className="text-[30px] font-semibold text-[#132832]">
//             Popular Products
//         </h1>
//        </Row>

//       <Row className='gap-[24px]'>
//         <div className="h-[648px] w-[52px] relative">
//             <p className="text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1]">
//                 Explore new and Popular styles
//             </p>
//         </div>
//         <Link href="/product-detail">
//         <img
//         className="w-[648px] h-[652px] object-cover"
//         src="https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoZSUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D"
//          alt="clothe"
//         />
//         </Link>

//         <Row className='flex-wrap w-1/2 gap-[24px]'>

// {[...new Array(4)].map((item, index) => (
//     <Link href="/product-detail" 
//     className="w-[46%] h-[312px]"
//     key={index}>
//             <img className="w-[312px] h-full object-cover"
//                 src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="clothe"
//             />
//     </Link>
// ))}


//         </Row>
//       </Row>

//         </Container>
//      );
// }
 
// export default PopularProduct;





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from '../common/Container';
import Row from '../common/Row';
import apiEndpoints from '../../apis/endpoint';
import client from '../../apis';

// useEffect(() => {
//     // 1-  logic will be executed everytime a prop or state will update
//   });

//   useEffect(() => {
//     // 2-  It will only work before and after component mounted
//   }, []);

//   useEffect(() => {
//     // 3- adding on to (2) it will execute everytime the given args in depency array will updated
//   }, [args, arg2, arg3]);

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await client.get(apiEndpoints.products());
      setProducts(response.data.docs);
    } catch (error) {
      console.log('error:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase">
        <h1 className="text-[30px] font-semibold text-[#1e2832]">
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="h-[648px] w-[52px] relative">
          <p className="text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        <Link to={`/product/${products[0]?._id}`}>
          <img
            className="w-[648px] h-[648px] object-cover cursor-pointer"
            src={products[0]?.img}
            alt="top popular"
          />
        </Link>
        <Row className="flex-wrap w-1/2 gap-[24px]">
          {products.slice(1).map((item, idx) => (
            <Link
              to={`/product/${item._id}`}
              className="w-[46%] h-[312px]"
              key={item._id}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[312px] h-full object-cover"
              />
            </Link>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default PopularProducts;