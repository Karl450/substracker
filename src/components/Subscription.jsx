import '../../public/style/Subscription.css'

export default function Subscription() {

    //place holding for testing
    const test = [
        {
            'subName':'Spotify',
            'price': '10.99'        
        },
        {
            'subName':'WoW',
            'price': '15.99'    
        },
        {
            'subName':'Prime',
            'price': '12.99'    
        },
        {
            'subName':'Gym',
            'price': '34.99'    
        },
        {
            'subName':'Prime',
            'price': '12.99'    
        }
    ]

    return(

        <div className="grid-container">
            {test.map((item, index) => (
                <div key={index} className="grid-item">
                    {item.subName}<br></br>{item.price}
                </div>
            ))}
        </div>
    )
}