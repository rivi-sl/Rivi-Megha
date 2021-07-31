import db from '../../../../dummyDatabase'
import _ from 'lodash'
import moment from 'moment'

export const ContactDataExplorer = (chat_id) => {
    var contactDetails = db.filter((obj)=>{
        return obj.uuid === chat_id;
    })
    if(contactDetails.length > 0){
        return contactDetails[0]
     }else{
         return null
     }
}

export const ContactDataReciever = () => {
    let contactList = []
    db && db.map((contact) => {
        contactList.push({
            id: contact.uuid,
            name: contact.name,
            profilePic: contact.profilePic,
            about: contact.about,
            online: contact.online,
            unreadMessages: contact.unreadMessages,
            lastSMS: _.truncate(((contact.conversation)[contact.conversation.length-1]).message
            ,{
                length: 25,
                omission: '...'
            }),
            timeStamp: moment(((contact.conversation)[contact.conversation.length-1]).timeStamp).calendar(null, {
                sameDay: 'h:mm a',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'DD/MM/YYYY'
            }),
        })
    })
    return contactList
}