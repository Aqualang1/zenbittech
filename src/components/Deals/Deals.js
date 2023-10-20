import './Deals.css';
import DealsTable from '../DealsTable/DealsTable';
import API_URL from '../constants/constants';
import { useState, useEffect } from 'react';

const Deals = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [deals, setDeals] = useState([]);

    const getDeals = () =>
        fetch(API_URL).then(response => response.json());

    useEffect(() => {
        if (!isLoaded) {
            getDeals().then(setDeals).catch(error => console.log(error)).finally(() => setIsLoaded(true))
        }
    }, [isLoaded]);

    return <div className="deals">
        <p className='dealsHead'>Open Deals</p>
        <div className='dealsTable'>
            {deals.map(deal =>
                <DealsTable
                    deal={deal}
                    key={deal.id}
                />
            )}
        </div>
    </div>
}

export default Deals;