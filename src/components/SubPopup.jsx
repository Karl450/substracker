import { useState } from 'react';
import axios from 'axios';

export default function SubPopup({ onClose }) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState('');

    axios.defaults.baseURL = 'http://localhost:5000';

    const handleNewSub = (e) => {
        e.preventDefault();
        axios.post('/api/items', {
            name,
            price,
            url
        })
        .then(function (response) {
            console.log(response.data);
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const PriceHandle = (e) => {
		const regexPrice = /^\d+(\.\d{1,2})?$/;
		const val = e.target.value;

		if (val != "" || regexPrice.test(val) ) {
			setPrice(val)
		}
	}
    
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 max-w-md">
            <button
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              &times;
            </button>
      
            <form onSubmit={handleNewSub} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Subscription Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Name"
                />
              </div>
      
              <div>
                <label className="block text-sm font-semibold text-gray-700">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={PriceHandle}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Price"
                />
              </div>
      
              <div>
                <label className="block text-sm font-semibold text-gray-700">URL</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="URL"
                />
              </div>
      
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add
              </button>
            </form>
          </div>
        </div>
    );      
}