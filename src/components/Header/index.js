import React from "react";
import { ThemeContext } from "../../providers/theme";

function Header(){
    const theme = React.useContext(ThemeContext);
    return (
        <h1 style={{color : theme.foreground}}>Welcome Kushan....!!!</h1>
    )
}
export default Header;