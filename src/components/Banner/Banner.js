import styled from 'styled-components';
import backgroundImage from '../../images/backgroundMain.png';

const BannerDiv = styled.div`
    align-items: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    color: white;
    display: flex;
    flex-direction: column;
    height: max-content;
    justify-content: center;
    padding: 25vh 0;
    text-align: center;
`;

const BannerHead = styled.p`
    font-size: 64px;
`;

const BannerBody = styled.p`
    font-size: 24px;
    padding: 0 20vw;
`;

const Button = styled.button`
    border-radius: 8px;
    background-color: inherit;
    border: 1px solid white;
    color: white;
    font-size: 20px;
    padding: 1vh 3vw;
    cursor: pointer;
`;

const Banner = () => {
    return (
        <BannerDiv>
            <BannerHead>The chemical negatively charged</BannerHead>
            <BannerBody>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </BannerBody>
            <Button type='button'>Get Started</Button>
        </BannerDiv>
    )
}

export default Banner;