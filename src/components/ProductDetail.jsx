import React, { useContext, useEffect, useState } from 'react';
import { ContextProvider } from '../context/Context';
import CallApi from '../utils/CallApi';

function ProductDetail(props) {
    const { data } = useContext(ContextProvider)
    const { match } = props;
    const [dataDetail, setDataDetail] = useState([])

    console.log(match.params.id);

    const getData = () => {
        const newData = data.filter((item) => {
            return item.id == match.params.id
        })
        setDataDetail(newData)
    }
    useEffect(() => {
        getData();
    },[data])

    return (
        <div>
            <h3>Đây là trang chi tiết</h3>

            {dataDetail && dataDetail.map((item, index) => {
                return (
                    <h3 key={index}>Tên: {item.name} - Giá: {item.price}$</h3>
                )
            })}
        </div>
    );
}

export default ProductDetail;