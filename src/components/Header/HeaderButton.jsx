import React from "react";
import Row from "../common/Row";
import { Link } from "react-router-dom";


const HeaderButton =({title, Icon,url='/'}) => {
    return(
      <Link to={url}>
        <Row className="mx-[p5x]">
        <Icon />
        <p className='text-[#1e2832] text-[18px] hover:text-slate-400 ml-[10px]'>
          {title}
        </p>
      </Row>
      </Link>
    )
}
export default HeaderButton