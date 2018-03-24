import Base from '../../../bem-react-core';

export interface IMyOtherBlockProps {
    type: string;
}

export interface IMyOtherBlockState {
    value: string;
}

export default class MyOtherBlock extends Base<IMyOtherBlockProps, IMyOtherBlockState> {
    content() {
        return this.props.type;
    }
};
