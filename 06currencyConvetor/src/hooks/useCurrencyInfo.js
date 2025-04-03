import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                console.log(res[currency]); // Log the fetched currency data
            });
    }, [currency]);
    
    console.log(data); // Log the current state of data
    return data;
}

export default UseCurrencyInfo;
