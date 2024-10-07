import './Background.css'
import tesla from './tesla.mp4'
import image1 from './image1.jpeg'
import image2 from './image2.jpeg'
import image3 from './image3.jpeg'

const Background = ({playStatus,heroCount}) => {
    if (playStatus){
    
        return (
                <video className='background' autoPlay loop muted>
                    <source src={ tesla} type="video/mp4"/>
                </video>
            
        )
    }
}

export default Background
