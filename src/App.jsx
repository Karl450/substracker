import Subscription from './components/Subscription'
import CostTracker from './components/CostTracker'
import AddSub from './components/AddSub';
import { useState } from 'react';

export default function App() {

    const [total, setTotal] = useState(0);

    return (
        <>
            <div className='mt-10 px-4'>
                <div className="flex justify-center">
                    <div className="flex items-center gap-4">
                        <h1 className="text-4xl tracking-tighter font-extrabold text-yellow-500">Monthly Subscription Tracker</h1>
                        <AddSub />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <CostTracker total={total} />
                </div>

                <div className="flex justify-center mt-6">
                    <Subscription setTotal={setTotal} />
                </div>
            </div>
        </>
    )
} 