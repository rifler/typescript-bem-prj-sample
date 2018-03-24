console.log('MyBlock');

//import Base from 'bem-react-core';
import * as React from 'react';
import Base from '../../../bem-react-core';
import MyOtherBlock from 'b:MyOtherBlock'; // import MyBlock from '../blocks2/MyOtherBlock/MyOtherBlock'

export interface IMyBlockProps {
    name: string;
}

export interface IMyBlockState {
    value: string;
}

export default class MyBlock extends Base<IMyBlockProps, IMyBlockState> {
    content() {
        return [
            this.state.value,
            <MyOtherBlock type="bla"/>
        ]
    }
};
