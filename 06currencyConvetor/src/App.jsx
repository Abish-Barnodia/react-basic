import React, { useState, useEffect } from 'react';

function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch exchange rates on component mount
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'
        );
        const data = await response.json();
        setRates(data.usd);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch exchange rates');
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  // Convert currency function
  const convertCurrency = () => {
    if (!amount || isNaN(amount)) {
      setResult('Please enter a valid amount');
      return;
    }

    const amountNum = parseFloat(amount);
    const fromRate = fromCurrency.toLowerCase() === 'usd' ? 1 : rates[fromCurrency.toLowerCase()];
    const toRate = toCurrency.toLowerCase() === 'usd' ? 1 : rates[toCurrency.toLowerCase()];
    
    const usdAmount = amountNum / fromRate;
    const convertedAmount = usdAmount * toRate;
    
    setResult(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
  };

  // Get currency options for dropdowns
  const currencyOptions = ['USD', ...Object.keys(rates)].sort();

  if (loading) return <div className="text-center mt-10">Loading exchange rates...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Currency Converter
      </h1>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          min="0"
          className="w-full sm:w-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="w-full sm:w-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
        
        <span className="text-gray-600">to</span>
        
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-full sm:w-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={convertCurrency}
        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Convert
      </button>
      
      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
          <h3 className="text-lg font-medium text-gray-800">{result}</h3>
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;