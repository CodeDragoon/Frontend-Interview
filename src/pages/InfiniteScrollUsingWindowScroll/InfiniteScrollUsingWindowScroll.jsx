import React, { useEffect, useRef, useState } from "react";
import ImplementationButton from "../../common-components/implementation/ImplementationButton";

import "./styles.css";

const useInfScroll = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [hasMore, setHasMore] = useState(`https://catfact.ninja/facts?page=1`);
  const uKey = useRef(0);
  const isLoading = useRef(false);

  const getData = async () => {
    if (!hasMore) return;
    try {
      isLoading.current = true;
      const promise = await fetch(hasMore);
      const response = await promise.json();
      setData((data) => [...data, ...response.data]);
      isLoading.current = false;

      setHasMore(response.next_page_url);
    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  const getKey = () => {
    uKey.current += 1;
    return uKey.current;
  };

  const handleScroll = () => {
    if (isLoading.current) return;

    const docHeight = document.documentElement.offsetHeight;
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;

    if (docHeight - scrollY - 5 < innerHeight) {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore]);

  return { data, loading: isLoading.current, message, getKey };
};

const Node = ({ fact }) => {
  return <div className="fact">{fact}</div>;
};

const InfiniteScrollUsingWindowScroll = () => {
  const { data = [], loading, getKey } = useInfScroll();
  return (
    <div>
      <h1>Infinte Scroll using window.scroll</h1>
      <h4>
        Please open network tab to see it in action. Don't forget to check its
        github implementation
      </h4>
      {data.map((item) => (
        <Node key={getKey()} fact={item.fact} />
      ))}
      {loading && <div>I am Loading</div>}
      <ImplementationButton />
    </div>
  );
};

export default InfiniteScrollUsingWindowScroll;
