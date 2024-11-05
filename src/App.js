import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuickSellData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://api.quicksell.co/v1/internal/frontend-assignment', {
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY'
            }
        })
        .then(response => setData(response.data))
        .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default QuickSellData;
