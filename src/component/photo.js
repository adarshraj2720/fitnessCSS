import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.webp'

function Photo() {
    return (
        <div className='photosection'>
            <h1>Runner's Workout</h1>
            <div className='flex2'>
                <figure className='one'>
                    <p className='imgtitle'>STRENGTH</p>
                    <img src={img1} alt="" />
                    <i class="fas fa-arrow-circle-right"></i>
                </figure>
                <figure className='one two'>
                    <p className='imgtitle'>MOBILITY</p>
                    <img src={img2} alt="" />
                    <i class="fas fa-arrow-circle-right"></i>
                </figure>
                <figure className='one three'>
                    <p className='imgtitle'>DRILLS</p>
                    <img src={img3} alt="" />
                    <i class="fas fa-arrow-circle-right"></i>
                </figure>
            </div>
        </div>
    )
}

export default Photo