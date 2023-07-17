import {useSelector } from 'react-redux/es/hooks/useSelector';

import SwitchTheme from '../switchTheme/SwitchTheme';
import OutputLine from '../outputLine/OutputLine';
import Controls from '../controls/Controls';

import './app.scss';

const App = () => {

    const theme = useSelector(state => state.theme.theme);

    return (
        <div className="app">
            <div className="ellipse"></div>
            <SwitchTheme/>
            <main className={theme === 'black'? 'app-content app-content-black' : 'app-content'}>
                <OutputLine/>
                <Controls/>
            </main>
        </div>
    )
}

export default App;