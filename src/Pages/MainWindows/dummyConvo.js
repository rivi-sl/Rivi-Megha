const dummyMessages = [
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 17 2021 18:17:36 GMT+0530 (India Standard Time)'),
        message: 'Lorem ipsum https://github.com/Hasala2002/AnandaCollege dolor sit amet, consectetur',    
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 17 2021 18:19:36 GMT+0530 (India Standard Time)'),
        message: 'minim veniam, quis nostrud exercitation',
    },
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 17 2021 18:22:36 GMT+0530 (India Standard Time)'),
        message: 'in voluptate velit esse cillum dolore',
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 17 2021 18:24:36 GMT+0530 (India Standard Time)'),
        message: 'Sed ut perspiciatis unde omnis iste',
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 17 2021 18:30:36 GMT+0530 (India Standard Time)'),
        message: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 17 2021 18:17:36 GMT+0530 (India Standard Time)'),
        message: 'minim veniam, quis nostrud exercitation',
    },
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 17 2021 18:40:36 GMT+0530 (India Standard Time)'),
        message: 'in voluptate velit esse cillum dolore',
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 17 2021 18:42:36 GMT+0530 (India Standard Time)'),
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rem doloribus iusto, corrupti molestias ullam quod magni amet doloremque repellat et voluptatibus hic consequatur nisi, nostrum voluptas? Corporis, aliquam placeat?',
    },
    {
        senderId: '0101010101',
        timeStamp: new Date('Sun Jul 18 2021 18:17:36 GMT+0530 (India Standard Time)'),
        type: 'textMessage',
        message: 'Lorem ipsum dolor sit amet, consectetur',
        
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 18 2021 18:19:36 GMT+0530 (India Standard Time)'),
        message: 'minim veniam, quis nostrud exercitation',
    },
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 18 2021 18:22:36 GMT+0530 (India Standard Time)'),
        message: 'in voluptate velit esse cillum dolore',
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 18 2021 18:24:36 GMT+0530 (India Standard Time)'),
        message: 'Sed ut perspiciatis unde omnis iste',
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 18 2021 18:30:36 GMT+0530 (India Standard Time)'),
        message: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 18 2021 18:17:36 GMT+0530 (India Standard Time)'),
        message: 'minim veniam, quis nostrud exercitation',
    },
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 18 2021 18:40:36 GMT+0530 (India Standard Time)'),
        message: 'in voluptate velit esse cillum dolore',
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 18 2021 18:42:36 GMT+0530 (India Standard Time)'),
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rem doloribus iusto, corrupti molestias ullam quod magni amet doloremque repellat et voluptatibus hic consequatur nisi, nostrum voluptas? Corporis, aliquam placeat?',
    },
    {
        senderId: '0101010101',
        timeStamp: new Date('Sun Jul 19 2021 18:17:36 GMT+0530 (India Standard Time)'),
        type: 'textMessage',
        message: 'Lorem ipsum dolor sit amet, consectetur',
        
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 19 2021 18:19:36 GMT+0530 (India Standard Time)'),
        message: 'minim veniam, quis nostrud exercitation',
    },
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 19 2021 18:22:36 GMT+0530 (India Standard Time)'),
        message: 'in voluptate velit esse cillum dolore',
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 19 2021 18:24:36 GMT+0530 (India Standard Time)'),
        message: 'Sed ut perspiciatis unde omnis iste',
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 19 2021 18:30:36 GMT+0530 (India Standard Time)'),
        message: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 19 2021 18:17:36 GMT+0530 (India Standard Time)'),
        message: 'minim veniam, quis nostrud exercitation',
    },
    {
        senderId: '0101010101',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 19 2021 18:40:36 GMT+0530 (India Standard Time)'),
        message: 'in voluptate velit esse https://github.com/Hasala2002/AnandaCollege cillum dolore',
    },
    {
        senderId: '0202020202',
        type: 'textMessage',
        timeStamp: new Date('Sun Jul 19 2021 18:42:36 GMT+0530 (India Standard Time)'),
        message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, rem doloribus iusto, corrupti molestias ullam quod magni amet doloremque repellat et voluptatibus hic consequatur nisi, nostrum voluptas? Corporis, aliquam placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet veniam quod possimus nulla saepe amet? Corrupti numquam consequuntur eligendi nam tempora nostrum doloribus sint magni dolorem, unde, voluptatibus laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet veniam quod possimus nulla saepe amet? Corrupti numquam consequuntur eligendi nam tempora nostrum doloribus sint magni dolorem, unde, voluptatibus laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eveniet veniam quod possimus nulla saepe amet? Corrupti numquam consequuntur eligendi nam tempora nostrum doloribus sint magni dolorem, unde, voluptatibus laborum?',
    }
]

export default dummyMessages
