import React from "react";
import { ThemeContext } from "../../providers/theme";
function AppWrapper(props){
    const theme = React.useContext(ThemeContext);
    return (
        <header className="App-header" style={{background : theme.background}}>
            {props.children}
        </header>
    )
}
export default AppWrapper;