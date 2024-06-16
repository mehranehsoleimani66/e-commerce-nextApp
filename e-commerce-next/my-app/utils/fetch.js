const getFetch = async (url) => {
  const res = await fetch(`http://localhost:8000/api${url}`, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    return new Error(`problem in fetching data ${res.status}`);
  }
};
export { getFetch };
