import React from "react";
import Layout from "../components/common/Layout";
import Container from "../components/common/Container";
import Row from "../components/common/Row";

const Cart = () => {
    return ( 
        <Layout>
            <Container className='my-[40px]'>
                <Row className='mb-[30px]'>
                    <h6 className="text-[24px] text-slate-700 font-semibold">
                        Cart Details
                    </h6>
                </Row>
                <Row className='flex-col'>
                    
                </Row>

            </Container>
        </Layout>
     );
}
 
export default Cart;