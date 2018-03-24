export default abstract class Base<TProps, TState> {
    __base() {}

    state: Record<any, any>

    props: Record<any, any>
}
