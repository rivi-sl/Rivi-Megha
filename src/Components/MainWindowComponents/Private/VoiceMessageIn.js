import React, { useEffect, useRef, useState } from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import moment from 'moment'
import Rivicon from '../../Icons/Rivicon'

export const VoiceMessageIn = (props) => {
    const {timeStamp,voiceMessage} = props
    const accurateValue = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + (s) }
    const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }
    const [playerState,setPlayerState] = useState(false)
    const [finished,setFinished] = useState(true)
    const audioPlayer = useRef('audio_tag')
    const [current,setCurrent] = useState(0)
    const toggleAudio = () => {
        if(playerState){
            audioPlayer.current.pause()
        }else{
            audioPlayer.current.play()
            setFinished(false)
        }
        setPlayerState(!playerState)
    }

    const handleTimeChange = (e) =>{ 
        if(accurateValue(e.target.currentTime) === accurateValue(e.target.duration)){
            setCurrent(0)
            setPlayerState(false)
            setFinished(true)
        }else{
        setCurrent(e.target.currentTime)
        }
    }

    const handleSliderChange = (e) => {
        let compute = (e.target.value * audioPlayer.current.duration)/ 100;
        setCurrent(compute);
        audioPlayer.current.currentTime = compute
    }


    return (
        <div className={styles.chatInBox}>
            <div className={styles.audioPlayer}>
                <audio ref={audioPlayer} src={voiceMessage}  onTimeUpdate={handleTimeChange}></audio>
                <div className={styles.audioPlayerButton} onClick={toggleAudio}>
                    <Rivicon i={playerState ? 'PauseIcon' : 'PlayIcon'} s='12.5' mt={0} nav={false} pl={10} pr={10} selected={false} />
                </div>
                <input onChange={handleSliderChange} type="range" min="0" value={audioPlayer.current.duration ? ((current*100)/audioPlayer.current.duration) : 0}></input>
                <span className={styles.timeStampForVoiceMessage}>{audioPlayer.current.duration ? !finished ? fmtMSS(current) : fmtMSS(audioPlayer.current.duration): fmtMSS(0)}</span>
            </div>
            <span className={styles.timeStampIn}>{moment(new Date(timeStamp)).format('LT')}</span>
        </div>
    )
}

export default VoiceMessageIn