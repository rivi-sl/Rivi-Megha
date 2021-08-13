import { v4 as uuidv4 } from "uuid";
import voiceMemo from './Components/MainWindowComponents/Private/audioRecord.mp3'

const photoArrayBuilder = (c) => {
  let arr = [];
  for (let i = 0; i < c; i++) {
    if (i % 2 === 0) {
      arr.push({
        photoLink: `https://picsum.photos/1080/720?random=${i + 1}`,
        imageId: uuidv4(),
      });
    } else {
      arr.push({
        photoLink: `https://picsum.photos/720/1080?random=${i + 1}`,
        imageId: uuidv4(),
      });
    }
  }
  return arr;
};

const db = [
  {
    uuid: "000000000000",
    name: "Supun Tharinda",
    profilePic: "https://avatars.githubusercontent.com/u/33794760?v=4",
    about: "This is random bio text.",
    photos: photoArrayBuilder(21),
    online: false,
    unreadMessages: 5,
    conversation: [
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:19:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:22:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:24:36 GMT+0530 (India Standard Time)"
        ),
        message: "Sed ut perspiciatis unde omnis iste",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:30:36 GMT+0530 (India Standard Time)"
        ),
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:40:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rem doloribus iusto, corrupti molestias ullam quod magni amet doloremque repellat et voluptatibus hic consequatur nisi, nostrum voluptas? Corporis, aliquam placeat?",
      },
      {
        senderId: "12345632431432",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        type: "textMessage",
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:19:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:22:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:24:36 GMT+0530 (India Standard Time)"
        ),
        message: "Sed ut perspiciatis unde omnis iste",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:30:36 GMT+0530 (India Standard Time)"
        ),
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:40:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rem doloribus iusto, corrupti molestias ullam quod magni amet doloremque repellat et voluptatibus hic consequatur nisi, nostrum voluptas? Corporis, aliquam placeat?",
      },
      {
        senderId: "12345632431432",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        type: "textMessage",
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:19:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:22:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:24:36 GMT+0530 (India Standard Time)"
        ),
        message: "Sed ut perspiciatis unde omnis iste",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:30:36 GMT+0530 (India Standard Time)"
        ),
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:40:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "in voluptate velit esse https://github.com/Hasala2002 cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          " https://youtube.com Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rem doloribus iusto, corrupti molestias ullam quod magni amet doloremque repellat et voluptatibus hic consequatur nisi, nostrum voluptas? Corporis, aliquam placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet veniam quod possimus nulla saepe amet? Corrupti numquam consequuntur eligendi nam tempora nostrum doloribus sint magni dolorem, unde, voluptatibus laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet veniam quod possimus nulla saepe amet? Corrupti numquam consequuntur eligendi nam tempora nostrum doloribus sint magni dolorem, unde, voluptatibus laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet veniam quod possimus nulla saepe amet? Corrupti numquam consequuntur eligendi nam tempora nostrum doloribus sint magni dolorem, unde, voluptatibus laborum?",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "This message is supposed to have an url which is kinda cool like https://youtube.com",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "This message is supposed to be from user 0202020202 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message: `
Hasala Heiyanthuduwa is inviting you to a scheduled Zoom meeting.

Join Zoom Meeting
                
https://us04web.zoom.us/j/6905914158?pwd=cmdRUDFaQXBHQdawdahhRC9UbDdCc2V6UT09h
                
Meeting ID: 620 511 4258
Passcode: 1435
Time:03.00pm-07.00pm
                
Date - 2021.07.27(Tuesday)
                `,
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 31 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "Lorem ipsum https://acicts.lk dolor sit amet, consectetur",
      },
      {
        senderId: "0202020202",
        type: "voiceMessage",
        timeStamp: new Date(
          "Sun Jul 31 2021 18:30:36 GMT+0530 (India Standard Time)"
        ),
        voiceMessage: voiceMemo
      },
    ],
  },
  {
    uuid: "000000000001",
    name: "Chamindu Amarasinghe",
    profilePic: "https://avatars.githubusercontent.com/u/41909955?v=4",
    about:
      "😁 Never forget who you are, because the rest of the world will never know",
    photos: photoArrayBuilder(21),
    online: true,
    unreadMessages: 0,
    conversation: [
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:19:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:22:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:24:36 GMT+0530 (India Standard Time)"
        ),
        message: "Sed ut perspiciatis unde omnis iste",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:30:36 GMT+0530 (India Standard Time)"
        ),
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:40:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 17 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rem doloribus iusto, corrupti molestias ullam quod magni amet doloremque repellat et voluptatibus hic consequatur nisi, nostrum voluptas? Corporis, aliquam placeat?",
      },
      {
        senderId: "12345632431432",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        type: "textMessage",
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:19:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:22:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:24:36 GMT+0530 (India Standard Time)"
        ),
        message: "Sed ut perspiciatis unde omnis iste",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:30:36 GMT+0530 (India Standard Time)"
        ),
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:40:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 18 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rem doloribus iusto, corrupti molestias ullam quod magni amet doloremque repellat et voluptatibus hic consequatur nisi, nostrum voluptas? Corporis, aliquam placeat?",
      },
      {
        senderId: "12345632431432",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        type: "textMessage",
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:19:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:22:36 GMT+0530 (India Standard Time)"
        ),
        message: "in voluptate velit esse cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:24:36 GMT+0530 (India Standard Time)"
        ),
        message: "Sed ut perspiciatis unde omnis iste",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:30:36 GMT+0530 (India Standard Time)"
        ),
        message: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "minim veniam, quis nostrud exercitation",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:40:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "in voluptate velit esse https://github.com/Hasala2002 cillum dolore",
      },
      {
        senderId: "0202020202",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          " https://youtube.com Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rem doloribus iusto, corrupti molestias ullam quod magni amet doloremque repellat et voluptatibus hic consequatur nisi, nostrum voluptas? Corporis, aliquam placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet veniam quod possimus nulla saepe amet? Corrupti numquam consequuntur eligendi nam tempora nostrum doloribus sint magni dolorem, unde, voluptatibus laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet veniam quod possimus nulla saepe amet? Corrupti numquam consequuntur eligendi nam tempora nostrum doloribus sint magni dolorem, unde, voluptatibus laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet veniam quod possimus nulla saepe amet? Corrupti numquam consequuntur eligendi nam tempora nostrum doloribus sint magni dolorem, unde, voluptatibus laborum?",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "This message is supposed to have an url which is kinda cool like https://youtube.com",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message:
          "This message is supposed to be from user 12345632431432 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 19 2021 18:42:36 GMT+0530 (India Standard Time)"
        ),
        message: `
Hasala Heiyanthuduwa is inviting you to a scheduled Zoom meeting.

Join Zoom Meeting
        
https://us04web.zoom.us/j/6905914158?pwd=cmdRUDFaQXBHQdawdahhRC9UbDdCc2V6UT09h
        
Meeting ID: 620 511 4258
Passcode: 1435
Time:03.00pm-07.00pm
        
Date - 2021.07.27(Tuesday)
                `,
      },
      {
        senderId: "12345632431432",
        type: "textMessage",
        timeStamp: new Date(
          "Sun Jul 30 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "Lorem ipsum https://acicts.lk dolor sit amet, consectetur",
      },
      {
        senderId: "12345632431432",
        type: "mediaPhoto",
        timeStamp: new Date(
          "Sun Jul 30 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "This message, will be show in the chat room",
        photoLink: "https://picsum.photos/720/1080?random=1"
      },
      {
        senderId: "12345632431432",
        type: "mediaPhoto",
        timeStamp: new Date(
          "Sun Jul 30 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        photoLink: "https://picsum.photos/1080/720?random=2"
      },
      {
        senderId: "0202020202",
        type: "mediaPhoto",
        timeStamp: new Date(
          "Sun Jul 30 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        photoLink: "https://picsum.photos/1080/720?random=3"
      },
      {
        senderId: "12345632431432",
        type: "voiceMessage",
        timeStamp: new Date(
          "Sun Jul 31 2021 18:30:36 GMT+0530 (India Standard Time)"
        ),
        voiceMessage: voiceMemo
      },
      {
        senderId: "12345632431432",
        type: "mediaPhoto",
        timeStamp: new Date(
          "Sun Jul 30 2021 18:17:36 GMT+0530 (India Standard Time)"
        ),
        message: "This message, will be show in the chat room",
        photoLink: "https://picsum.photos/720/1080?random=1"
      },
    ],
  },
];

export default db;
