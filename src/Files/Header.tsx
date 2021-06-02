import React, { useCallback } from 'react'
import { StringMappingType } from 'typescript'

const Header: React.FunctionComponent<{
    title?: string;
    onClick: () => void;
    subTitle: string | undefined;
}> = ({ title, onClick, subTitle }) => {
    const githubOnclick = useCallback(() => {
        window.open('https://github.com/ARACADERISE')
    }, [])

    return (
        <header className="head">
            {/* Left Buttons */}
            <div className="left">
                <button className="github" onClick={githubOnclick}>Github</button>
                <button className="repl">Repl</button>
            </div>
            {/* Header including name, and sub header */}
            <div className="border">
                <h1 onClick={onClick}>{ title ? title : "MocaCDeveloper" }</h1>
                <p>{subTitle !== "" ? subTitle : "Welcome!"}</p>
            </div>
            {/* Right buttons */}
            <div className="right">
                <button className="collab"><a style={{textDecoration: "none", color: "black"}} href="#">Collab</a></button>
                <button className="seeProjects"><a style={{textDecoration: "none", color: "black"}} href="#">Projects </a></button>
                <p style={{fontSize: 10}}>(Contact me at (402) 274-7838, or @ t.targetyt@gmail.com)</p>
            </div>
        </header>
    )
}

export default Header