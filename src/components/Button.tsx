import type React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { decrement, increment } from '../redux/counter'
import type { RootState } from '../redux/configureStore';
interface IAppProps {
}

const Button: React.FunctionComponent<IAppProps> = (props) => {
    const count = useSelector((state:RootState) => state.counterReducer.value);
    const dispatch = useDispatch()
    return (
        <div>
        <div>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            >
            Increment
            </button>
            <span>{count}</span>
            <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >
            Decrement
            </button>
        </div>
        </div>
    );
};

export default Button;
