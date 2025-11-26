import React, { useEffect, useState } from 'react'

const Dashboard = () => {
//   const [count, setCount] = useState(0)
//   const [point ,setPoint] = useState(10)
//   useEffect(() => {
//     console.log(count)
//     console.log(point)
//   },[count,point])
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const serverresponse = await fetch('https://fakestoreapi.com/products');
      const jsonresponse = await serverresponse.json();
      console.log(jsonresponse);
      setData(jsonresponse);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <h1>Data could not fetch</h1>
      ) : (
        <div>
          {data.map((ele) => (
            <div key={ele.id} style={{ border: "2px solid red" }}>
              <img src={ele.image} alt="" height={100} width={100} />
              <h2>{ele.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard