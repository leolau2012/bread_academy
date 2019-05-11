import React from 'react';
import { Carousel } from 'antd';
import './Banner.css';
const requireContext = require.context("./images", true, /^\.\/.*\.jpg$/);
const arrBanner = requireContext.keys().map(requireContext);
const AppHeader = () => {
    return (
        <Carousel autoplay>
            {
                arrBanner.map((img,i) => {
                    return (
                        <img key={i} src={img} width="100%" alt="" />
                    );
                })
            }
        </Carousel>
    );
}
export default AppHeader;


