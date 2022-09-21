import { useState, useEffect } from 'react'

export default () => {
  let [trends, setTrends] = useState([]);
  useEffect(() => {
    (async () => {
      let resp = await fetch("/api/trends");
      let trends = await resp.json();
      setTrends(trends);
    })();
  }, []);

  return (
    <ol className="list-group list-group-numbered">
      {trends.map((trend, i) => (
        <li key={i} className="list-group-item d-flex align-items-start">
          <span className="ms-1 me-auto">{trend.name}</span>
          <span className="badge bg-secondary rounded-pill">{trend.count}</span>
        </li>
      ))}
    </ol>
  );
}
