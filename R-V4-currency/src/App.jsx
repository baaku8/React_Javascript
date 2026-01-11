
import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState('usd');
  const [to,setTo]=useState('inr');
  const [converted,setConverted]=useState(0);
  const currencyInfo=useCurrencyInfo(from);
//   console.log(currencyInfo);
  const options=Object.keys(currencyInfo);
//   console.log(options)
  const swap=()=>{
      setFrom(to);
      setTo(from);
      setAmount(converted);
      setConverted(amount)
  }
  const convert=()=>{
    // console.log(amount);
    // console.log(to);
    // console.log(typeof to)
    // console.log(currencyInfo)
    // console.log(currencyInfo[to]);
    // console.log(amount*currencyInfo[to])
    setConverted(amount*currencyInfo[to]);
  }
  return (
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/22944805/pexels-photo-22944805.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            //  setConverted(amount*currencyInfo[to]);
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(curr)=>{
                                    // console.log(curr)
                                    setFrom(curr);
                                }}
                                selectCurrency={from}
                                onAmountChange={(amount)=>{
                                //   console.log(amount);
                                  setAmount(amount)
                                }}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={converted}
                                currencyOptions={options}
                                onCurrencyChange={(cur)=>{
                                    console.log(cur);
                                    setTo(cur);
                                }}
                                selectCurrency={to}
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
