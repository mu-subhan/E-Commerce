import React from "react";

const Button = ({className ='h-[50px] w-[20%] mt-[50px]',
    title='Buy Now',
    ...restProps
}) => {
    return (  
        <button
        {...restProps}
        className={`h-[50px] w-[20%] text-white bg-black text-[20px] font-medium ${className}`}>
                {title}
         </button>
    );
}
 
export default Button;