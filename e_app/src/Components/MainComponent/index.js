import React from 'react';
import './styles.css';

import image1 from '../../image/img1.jpg';
import image2 from '../../image/img2.jpg';
import image3 from '../../image/img3.jpg';


class MainComponent extends React.Component {
    render() {
        return (
            <div className="flexWrapper">
                <div className="cartContainer">
                    <img src={image1} />
                    <div>
                        <h3>Rs. 600</h3>
                        <span>Add to Cart</span>
                    </div>
                </div>
                <div className="cartContainer">
                    <img src={image2} />
                    <div>
                        <h3>Rs. 1200</h3>
                        <span>Add to Cart</span>
                    </div>
                </div>
                <div className="cartContainer">
                    <img src={image3} />
                    <div>
                        <h3>Rs. 800</h3>
                        <span>Add to Cart</span>
                    </div>
                </div>

            </div>
            )

    }
}

export default MainComponent