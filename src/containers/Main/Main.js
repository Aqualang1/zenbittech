import './Main.css';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import Button from '../../components/Button/Button';
import Banner from '../../components/Banner/Banner';
import Deals from '../../components/Deals/Deals';

const Main = () => {
    return (
        <>
            <ButtonPanel
                logIn={<Button
                    type='button'
                    title='Log In'
                    className="LogInButton"
                />}
                singnUp={<Button
                    type='button'
                    title='Sign Up'
                    className='SingnUpButton'
                />}
            />

            <Banner />

            <Deals />

        </>
    )
}

export default Main;