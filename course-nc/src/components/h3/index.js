
import styled, { css } from 'styled-components'

// Fonts
import roboto from 'components/assets/fonts/fonts'

// Props base
import propsBase from 'components/assets/props/props-base'

// Colors
import colorsBG from 'components/assets/colors/colors-bg'
import colorsText from 'components/assets/colors/colors-text'


// ================== PROPS EXCLUSIVES ==================
// ==== TYPES ====
    const textBase = css ` font-size: 2.5rem; margin: 0px; padding: 0px;`
    const fontSize1 = css ` font-size: 3.3rem; font-weight: bold; `
    const fontSize2 = css ` font-size: 3.1rem; font-weight: bold; `
    const fontSize3 = css ` font-size: 2.9rem; font-weight: bold; `
    const fontSize4 = css ` font-size: 2.7rem; font-weight: bold; `
    const fontSize5 = css ` font-size: 2.5rem; font-weight: bold; `
    const fontSize6 = css ` font-size: 2.3rem; font-weight: bold; `
    const fontSize7 = css ` font-size: 2.1rem; font-weight: bold; `
    const fontSize8 = css ` font-size: 1.9rem; font-weight: bold; `
    const fontSize9 = css ` font-size: 1.7rem; font-weight: bold; `
    const fontSize10 = css ` font-size: 1.5rem; font-weight: bold; `


// ===== FONT WEIGHT ====
    const fontWeightLighter = css ` font-weight: lighter; `
    const fontWeightNormal = css ` font-weight: normal; `
    const fontWeightBold = css ` font-weight: bold; `

// ================== PROPS EXCLUSIVES ==================


const H3 = styled.h3 `

    /* FONT */
    ${ roboto }

    /* TEXT BASE */
    ${ textBase }

    /* ================== PROPS EXCLUSIVES ================== */
    /* ==== TYPES ==== */
    ${ props => props.fontSize1 && css ` ${ fontSize1 } `}
    ${ props => props.fontSize2 && css ` ${ fontSize2 } `}
    ${ props => props.fontSize3 && css ` ${ fontSize3 } `}
    ${ props => props.fontSize4 && css ` ${ fontSize4 } `}
    ${ props => props.fontSize5 && css ` ${ fontSize5 } `}
    ${ props => props.fontSize6 && css ` ${ fontSize6 } `}
    ${ props => props.fontSize7 && css ` ${ fontSize7 } `}
    ${ props => props.fontSize8 && css ` ${ fontSize8 } `}
    ${ props => props.fontSize9 && css ` ${ fontSize9 } `}
    ${ props => props.fontSize10 && css ` ${ fontSize10 } `}

    /* WIDTH */
    ${ props => props.lighter && css ` ${ fontWeightLighter } `}
    ${ props => props.normal && css ` ${ fontWeightNormal } `}
    ${ props => props.bold && css ` ${ fontWeightBold } `}
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }
    
`

export default H3