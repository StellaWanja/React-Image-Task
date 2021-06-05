import React, {useState} from 'react';
import Button from './Button';

const Image = (props) => {

    const [width, setWidth] = useState(props.w);
    const [height, setHeight] = useState(props.h);

    const increaseSize = () => {
        let incW = width * 2;
        let incH = height * 2;
        setWidth(incW);
        setHeight(incH);
    }

    const decreaseSize = () => {
        let decW = width / 2;
        let decH = height / 2;
        setWidth(decW);
        setHeight(decH);
    }

    return (
        <div>
            <img width={width} height={height} src={props.source} alt={props.alt} />
            <Button increase={increaseSize} decrease={decreaseSize} />
        </div>
    );
}

export default Image;