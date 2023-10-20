import './Login.css';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleSumbit = (event) => {
        event.preventDefault();
        navigate('/main')
    }

    return (

        <div className="login">
            <ButtonPanel />
            <div className='formBox'>
                <form 
                onSubmit={handleSumbit}
                className='form'>
                    <p className='description'>Login</p>
                    <label htmlFor='email'>Email</label>
                    <Input
                        className='email'
                        placeholder='Email'
                        name='email'
                        type='text'
                        required
                    />
                    <label htmlFor='password'>Password</label>
                    <Input
                        className='password'
                        placeholder='Password'
                        name='password'
                        type="text"
                        required
                    />
                    <div className='forgotPassword'>
                        <p>Forgot password?</p>
                    </div>
                    <Button
                        className='signInButton'
                        title='Sign in'
                        type='submit'
                    />
                    <div className='account'>
                        <p>Don't have account?</p>
                        <p className='signUp'>Sign Up</p>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Login;