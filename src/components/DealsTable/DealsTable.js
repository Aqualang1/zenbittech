import './DealsTable.css';

const DealsTable = ({ deal }) => {

    const { image, price, sold, address, id } = deal;


    return <div
        className='deal'
        >
        <img src={image} alt='layout' />
        <p>{price}</p>
        <p>{sold}</p>
        <p>{address} </p>
        <p>{id}</p>
    </div >
}

export default DealsTable;