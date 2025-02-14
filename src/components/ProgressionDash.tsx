import React, { useEffect, useState } from 'react';

const ProgressionDash = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/config_pages/progression_dash', {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa('admin:admin'),
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>ProgressionDash</h1>
      {data ? (
        <div className="cards">
          {data.field_steps.map((step: any, index: number) => (
            <div key={index} className="card">
              <h2>{step.title}</h2>
              <h3 dangerouslySetInnerHTML={{ __html: step.subtitle }}></h3>
              <p>{step.description.processed}</p>
              <p>State: {step.state}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProgressionDash;