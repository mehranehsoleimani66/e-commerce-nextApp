"use client";
export default function error(error, reset) {
  return (
    <>
      <h1>{error.message}</h1>
      <button onClick={() => reset()}>reset</button>
    </>
  );
}
