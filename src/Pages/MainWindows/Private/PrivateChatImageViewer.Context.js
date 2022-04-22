import { createContext } from 'react'
const PrivateImageViewer = createContext({
    active: false,
    imageUrl: 'https://picsum.photos/300/200?random=1',
    setActive: () => {},
    setImage: () => {}
})

export default PrivateImageViewer
