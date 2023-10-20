import Button from '../Button/Button';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <p className='bannerHead'>The chemical  negatively charged</p>
            <p className='bannerBody'>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </p>
            <Button
                type='button'
                title="Get Started"
                className='getStartedButton'
            />
        </div>
    )

}

export default Banner;