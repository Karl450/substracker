import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Subscription({ setTotal }) {
    const [items, setItems] = useState([]);


    axios.defaults.baseURL = 'http://localhost:5000';


    
    useEffect(() => {

        axios.get('/api/items')
        .then(function (response) {
            setItems(response.data);
            

            const totalValue = response.data.reduce((acc, item) => acc + item.price, 0);
            setTotal(totalValue);
            console.warn(setTotal);
        })
        .catch(function (error) {
            console.log(error);
        });

    }, [setTotal])

    const onDelete = (id) => {
        axios.delete('/api/items', {
            data: { id }
        })
        .then(function (response) {
            console.log(response.data);
            setItems((prevItems) => prevItems.filter(item => item.id !== id));
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    

    return(

        <div className="grid grid-cols-3 gap-4 text-white font-bold">
            {items.map((item) => (
                <div key={item.id} className="bg-blue-800 rounded-lg w-56 h-16 px-4 py-2 cursor-pointer transform transition-transform duration-200 hover:scale-105">
                    <button className="DeleteButton" onClick={() => onDelete(item.id)}>
                        &times;
                    </button>
                    {item.name}<br></br>{item.price}
                </div>
            ))}
        </div>
    )
}