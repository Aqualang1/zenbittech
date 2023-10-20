import Banner from '../../components/Banner/Banner';
import Deals from '../../components/Deals/Deals';
import styled from 'styled-components';

const ButtonPanel = styled.div`
    height: 5vmax;
    background-color: #172234;
    display: flex;
    justify-content: flex-end;
    gap: 1vw;
    font-size: 16px;
`;

const HeaderButton = styled.button`
    color: ${props => props.primary ? '#B29F7E' : 'white'};
    margin: ${props => props.primary ? '1vh 0' : '1vh 5vmax 1vh 0'};
    padding: 0 8vw;
    background: ${props => props.primary ? 'inherit' : "#B29F7E"} ;
    border-radius: 5px;
    cursor: pointer;
    border: ${props => props.primary ? "1px solid #B29F7E" : "none"};
`;

const Main = () => {
    return (
        <>
            <ButtonPanel>
                <HeaderButton primary type='button'>
                    Log In
                </HeaderButton>
                <HeaderButton type='button'>
                    Sign Up
                </HeaderButton>
            </ButtonPanel>

            <Banner />

            <Deals />

        </>
    )
}

export default Main;