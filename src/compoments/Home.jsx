import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currencyNames, setCurrencyNames] = useState({});
  useEffect(() => {
    axios.get("https://api.frankfurter.app/currencies").then((res) => {
      setCurrencyOptions(Object.keys(res.data));
      setFromCurrency(Object.keys(res.data)[0]);
      setToCurrency(Object.keys(res.data)[0]);
      setCurrencyNames(res.data);
    });
  }, []);
  useEffect(() => {
    if (parseInt(fromAmount) === 0) {
      setToAmount(0);
    } else if (fromAmount === "") {
      setToAmount("");
    } else if (fromCurrency === toCurrency) {
      setToAmount(fromAmount);
    } else {
      axios
        .get(
          `https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`
        )
        .then((res) => {
          setToAmount(Object.values(res.data.rates)[0]);
        });
    }
  }, [fromCurrency, toCurrency, fromAmount, toAmount]);
  const options = currencyOptions.map((data, index) => {
    return (
      <>
        <option key={index} value={data}>
          {data}
        </option>
      </>
    );
  });
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col">
          <h2>From Currency : </h2>
          <select
            name="currency"
            class="form-select"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {options}
          </select>
        </div>
        <div className="col">
          <h2>To Currency : </h2>
          <select
            name="currency"
            class="form-select"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {options}
          </select>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <h3>Enter Amount in {currencyNames[`${fromCurrency}`]} : </h3>
        </div>
        <div className="col">
          <input
            type="number"
            autoComplete="off"
            value={fromAmount}
            class="form-control"
            onChange={(e) => setFromAmount(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div class="alert alert-primary" role="alert">
        <div className="row">
          <div className="col">
            <h1>{currencyNames[`${toCurrency}`]} : </h1>
          </div>
          <div className="col">
            <h1>
              {" "}
              {toAmount} {toCurrency}{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
