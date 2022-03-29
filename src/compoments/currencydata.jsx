import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";
import { useEffect, useState } from "react";

const CurrencyData = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    axios
      .get("https://builder-backed.herokuapp.com/currency/get")
      .then((res) => {
        setCurrency(res.data);
        console.log(res);
      });
  }, []);

  return (
    <>
      <div className="container">
        <br />
        <h1>
          Currency Timeline Chat{" "}
          <span className="badge bg-secondary">USD - INR</span>
        </h1>
        <br />
        <LineChart
          width={850}
          height={350}
          data={currency}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="4 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amt" stroke="#8884d8" />
        </LineChart>
      </div>
    </>
  );
};
export default CurrencyData;
