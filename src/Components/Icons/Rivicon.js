import React from 'react'
import * as styles from './Icons.module.css'
import IconExplorer from './@riviconlib'

const Rivicon = (props) => {

    const {i,s,mt,pt,pb,pr,pl,selected, nav, style} = props

    return (
        <div className={nav ? selected ? styles.icon_selected + ' selected-icon' :styles.icon + ' not-selected-icon': null} style={{marginTop: mt, height: s,display:'grid',paddingLeft:pl,paddingRight:pr}}>
            {IconExplorer(s,i,style)}
        </div>
    )
}

export default Rivicon
