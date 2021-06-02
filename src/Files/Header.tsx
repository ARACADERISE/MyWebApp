import React from 'react'

const Header: React.FunctionComponent<{
    title: string
}> = ({ title }) => {
    return (
        <header>
            <h1 className="border">{ title }</h1>
        </header>
    )
}

export default Header