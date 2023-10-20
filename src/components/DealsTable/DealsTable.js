import styled from 'styled-components';

const DealsTable = ({ item }) => {

    const { image, price, sold, address, ticket, percent, days } = item;

    const DealItem = styled.div`
        background-image: url(${image}?q=${Date.now()});
        color: white;
        background-size: cover;
        padding: 10vh 10vw;
    `;

    return <DealItem>
        <p>{address}</p>
        <p>{price} Dhs</p>
        <p>Ticket - {ticket} Dhs</p>
        <p>Yield {percent} %</p>
        <p>Days left {days}</p>
        <p>Sold {sold} %</p>
    </DealItem>
}

export default DealsTable;