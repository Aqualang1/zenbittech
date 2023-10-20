import './ButtonPanel.css';

const ButtonPanel = (props) => {

    const { logIn, singnUp } = props;

    return (
        <div className='ButtonPanel'>
        {logIn}
        {singnUp}
        </div>
    )
}

export default ButtonPanel;