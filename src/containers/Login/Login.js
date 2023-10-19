import './Login.css';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = () => {
    return (

        <div className="login">
            <ButtonPanel />
            <div className='formBox'>
                <form className='form'>
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
                    <Button className='signInButton' />
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