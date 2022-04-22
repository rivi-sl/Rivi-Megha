import React from 'react'
import * as styles from './scss/All.module.scss'
import moment from "moment"

export const NewDateDivider = (props) => {
    const {date} = props
    return (
        <div className={styles.dateDivider}>
           {moment(date).calendar(null, {
    sameDay: '[Today]',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
})}
        </div>
    )
}

export default NewDateDivider