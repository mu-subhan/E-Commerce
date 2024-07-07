import React from "react";
import Row from "../common/Row";


const HeaderButton =({title, Icon}) => {
    return(
        <Row className="mx-[p5x]">
        <Icon />
        <p className='text-[#1e2832] text-[18px] hover:text-slate-400 ml-[10px]'>
          {title}
        </p>
      </Row>
    )
}
export default HeaderButton