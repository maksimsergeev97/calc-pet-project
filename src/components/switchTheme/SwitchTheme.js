import { useDispatch, useSelector } from 'react-redux';
import { themeBlack, themeWhite } from '../slices/themeSlice';
import './switchTheme.scss';

const SwitchTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector(store => store.theme.theme)

    const changeTheme = () => {
        if (theme === 'white') {
            dispatch(themeBlack())
            document.querySelector('body').style.background = "linear-gradient(150deg, #17181a 10%, #0051ff 300%)"
        } else {
            dispatch(themeWhite())
            document.querySelector('body').style.background = "white";
        }
    }

    return (
        <div className="switcher">
            <input onChange= {() => {
                changeTheme()
            }} type="checkbox" className="checkbox" id="checkbox" />
            <label  htmlFor="checkbox"></label>
        </div>
    )
}

export default SwitchTheme;