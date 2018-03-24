import _MyOtherBlock, { IMyOtherBlockProps as _IMyOtherBlockProps, IMyOtherBlockState } from 'b:MyOtherBlock'; // import MyBlock from '../blocks/MyOtherBlock/MyOtherBlock'

export interface IMyOtherBlockProps extends _IMyOtherBlockProps {
    bla: string;
}

export { IMyOtherBlockState } from 'b:MyOtherBlock';

export default class MyOtherBlock extends _MyOtherBlock<IMyOtherBlockProps, IMyOtherBlockState> {
    content() {
        return [
            this.__base(...arguments),
            this.props.bla
        ]
    }
};
