import { useSelector, useDispatch } from 'react-redux'
import { RootState, switchTheme } from '../store/store'

const ToggleTheme = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(switchTheme())}>
                Switch theme
            </button>
        </div>
    );
};

export default ToggleTheme;