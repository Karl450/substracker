import '../public/style/App.css'
import Subscription from './components/Subscription'
import CostTracker from './components/CostTracker'
import AddSub from './components/AddSub';

export default function App() {

    //you need to fetch all data from the db and return it as subs
    
    const totalMonthly = 69; //placeholder for now

    return (
        <>
            <section className='top-section'>
                <div className="header-container">
                    <h1 className='monthlyTracker-label'>Monthly Subscription Tracker</h1>
                    <AddSub />
                </div>
                <CostTracker total={totalMonthly} />
            </section>

            <section className='sub-section'>
                <Subscription />
            </section>
        </>
    )
} 