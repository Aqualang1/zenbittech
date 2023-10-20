import DealsTable from '../DealsTable/DealsTable';
import API_URL from '../constants/constants';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Deals = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getItems = () =>
        fetch(API_URL).then(response => response.json());

    useEffect(() => {
        if (!isLoaded) {
            getItems().then(setItems).catch(error => console.log(error)).finally(() => setIsLoaded(true))
        }
    }, [isLoaded]);

    const Deal = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40vw, 40vh));
        gap: 3vh 3vw;
    `;

    const DealsHead = styled.p`
        font-size: 28px;
        color: #B29F7E;
    `;

    const OpenDeals = styled.div`
        display: flex;
        padding: 5% 5% 1%;
        flex-direction: column;
    `;

    return <OpenDeals>
        <DealsHead>Open Deals</DealsHead>
        <Deal>
            {items.map(item =>
                <DealsTable
                    item={item}
                    key={item.id}
                />
            )}
        </Deal>
    </OpenDeals>
}

export default Deals;