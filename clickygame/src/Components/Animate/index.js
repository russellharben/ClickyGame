import React from 'react'
import { render } from 'react-dom'
import LogoNodejs from 'react-ionicons/lib/LogoNodejs'


function Animate() {
    render(
        <LogoNodejs onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
        , document.getElementById('container'))
}

export default Animate;