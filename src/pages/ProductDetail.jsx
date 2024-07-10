import React from "react";
import Container from "../components/common/Container";
import Row from "../components/common/Row";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";

const ProductDetail = () => {
    return ( 
        <Layout>
            <Container className='my-[41px]'> 
                <Row className='justify-between'>
                    <Row className='w-[47%] '>
                    <img
                    className="w-full object-cover h-[80vh]"
                    src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Product"
                    />
                    </Row>
                    <Row className='flex-col w-[47%]'>
                        <h1 className="text-[30px text-slate-700 font-semibold mb-[70px]">CLothing | Demo Product</h1>
                           <Row className='gap-[20px] mb-[10px]'>
                            <p className="text-[18px] text-black font-medium w-[15%] ">Rating:</p>
                            <p className="text-[18px] text-black">2/5</p>
                           </Row>

                           <Row className='gap-[20px] mb-[10px]'>
                            <p className="text-[18px] text-black font-medium w-[15%] ">Price:</p>
                            <p className="text-[18px] text-black">$25</p>
                           </Row>

                           <Row className='gap-[20px] mb-[10px]'>
                            <p className="text-[18px] text-black font-medium w-[15%] ">Category:</p>
                            <p className="text-[18px] text-black">Clothing</p>
                           </Row>

                           <Row className='gap-[20px] mb-[10px]'>
                            <p className="text-[18px] text-black font-medium w-[15%] ">Description:</p>
                            <p className="text-[18px] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, necessitatibus ducimus accusamus eos similique rerum aspernatur impedit distinctio iure. Soluta, modi maxime? Ad itaque omnis, repellat tempore quos pariatur quaerat.</p>
                           </Row>
                    <Row className='mt-[40px] items-center'>
                    <Button title="-" className="w-[52px] h-[52px]"/>
                    <p className="w-[70px] text-center text-[16px] font-semibold">
                        0
                    </p>
                    <Button title="+" className="w-[52px] h-[52px]"/>
                    </Row>
                    <Button 
                    title="Add to Cart"
                    className="h-[52px] w-[174px] mt-[20px]"
                    />
                    </Row>
                </Row>
            </Container>
            </Layout>
     );
}
 
export default ProductDetail;