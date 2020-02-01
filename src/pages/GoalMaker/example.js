import React, { useState, useEffect } from "react";

export function Example() {
  const [data, setData] = useState([]);
  const loaddedData = [];

  useEffect(() => {
    async function setFormData() {
      await setData(["fakeDataBase..."]);
    }
    setFormData();
  });

  if (data.length !== 0) {
    // Tratar os dados e ir colocando o resultado no array loaddedData
    data.map(value => loaddedData.push(value));
  }

  return <>{loaddedData.length !== 0 ? <p>{loaddedData.map(value => value)}</p> : null}</>;
}
