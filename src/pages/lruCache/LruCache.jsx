import React, { useState } from "react";
import "./styles.css";

const calcRes = (val) => {
  return "ExpensiveOp" + val;
};
const MAX_LIMIT = 3; // cache size
const ipKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const useLruCache = () => {
  const [cache, setCache] = useState([]);
  const [message, setMessage] = useState("Start by pressing any input buttons");
  const [result, setResult] = useState("-");
  const [store, setStore] = useState({});

  const getData = (val) => {
    if (store.hasOwnProperty(val)) {
      const filtered = cache.filter((item) => item != val);
      setResult(store[val]);
      setCache([val, ...filtered]);
      setMessage("Cache was hit");
    } else {
      const calculatedResult = calcRes(val);
      const currentMapSize = Object.keys(store).length;
      if (currentMapSize === MAX_LIMIT) {
        const remove = cache[MAX_LIMIT - 1];
        const filtered = cache.slice(0, cache.length - 1);
        delete store[remove];
        setCache([val, ...filtered]);
      } else {
        setCache([val, ...cache]);
      }
      const temp = { ...store };
      temp[val] = calculatedResult;
      setStore(temp);
      setResult(calculatedResult);
      setMessage("Cache was miss");
    }
  };

  return {
    message,
    result,
    cache,
    getData,
    store,
  };
};
const LruCache = () => {
  const { message, result, cache, getData, store } = useLruCache();

  return (
    <div className={"container"}>
      <h1 className={"row"}>I am LRU Implementation </h1>

      <div className={"row"}>{message}</div>

      <div className={"row"}>{result}</div>
      {ipKeys.map((item) => {
        return (
          <button
            className="lru-buttons"
            key={item}
            onClick={() => {
              getData(item);
            }}
          >
            {item}
          </button>
        );
      })}
      <div className={"row"}>{`Cache state -> ${JSON.stringify(cache)}`}</div>
      <div className={"row"}>{`Map state -> ${JSON.stringify(store)}`}</div>
    </div>
  );
};

export default LruCache;
