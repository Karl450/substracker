import { useState } from 'react';
import '../../public/style/AddSub.css';

export default function AddSub({oneSub}) {

    const [sub, setSub] = useState('');

    //need to change this next time
    const handleSubscription = (e) => {
        setSub(oneSub)
        e.preventDefault();
    }

    return (
        <>
            <form className="" onSubmit={handleSubscription}>
                <button className="AddButton">Add Subscription</button>
            </form>
        </>
    )
} 