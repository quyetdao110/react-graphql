import React from 'react'

const Link = (props) => {
    const { link } = props;
    return ( <
        div >
        <
        div > <
        p > { link.description } < /p> <
        a href = { link.url } > { link.url } < /a> < /
        div > < /
        div >
    )
}

export default Link;