import React from 'react'
import * as styles from './Icons.module.css'
import IconExplorer from './@riviconlib'

const Rivicon = (props) => {

    const {i,s,mt,p,pt,pb,pr,pl,selected, nav, style,clr} = props

    return (
        <div className={nav ? selected ? styles.icon_selected + ' selected-icon' :styles.icon + ' not-selected-icon': null} style={{marginTop: mt, height: s,display:'grid',paddingLeft:pl,paddingRight:pr, padding: p}}>
            {IconExplorer(s,i,style,clr)}
        </div>
    )
}

export default Rivicon
