import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../context/Context';

function Products(props) {
    const { data} = useContext(ContextProvider)

    var { match } = props;
    var url = match.url
   
    return (
        <>
        <h3 style={{textAlign:"center"}}>Đây là Trang Sản phẩm</h3>
            <div className="product-container">
                {data.map((item, index) => {
                    return (
                        <div className="product-item" key={index}>
                            <h3><Link to={`${url}/${item.id}`}>{item.name}</Link></h3>
                            <h5>Giá:{item.price}</h5>
                        </div>
                    )
                })}
            </div>
        </>

    );
}

export default Products;