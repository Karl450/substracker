import { useState } from 'react';
import SubPopup from './SubPopup';

export default function AddSub() {

    const [popupVisible, setPopupVisible] = useState(false);


    const handleSubscription = (e) => {
        setPopupVisible(!popupVisible)
        e.preventDefault();
    }

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <div>
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleSubscription}>Add Subscription</button>
                { popupVisible && <SubPopup onClose={closePopup}/> }
            </div>
        </>
    )
} 