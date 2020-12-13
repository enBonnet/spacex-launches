import { useCallback, useEffect, useState } from "react";

import { getLaunches } from "../service/launches";

const useLaunches = () => {
  const [launches, setLaunches] = useState([]);

  const getLaunchesCallback = useCallback( async () => {
    const data = await getLaunches();
    setLaunches(data);
  }, []);

  useEffect(() => {
    getLaunchesCallback();
  }, [getLaunchesCallback]);

  return {
    launches,
  };
};

export default useLaunches;
