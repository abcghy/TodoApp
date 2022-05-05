import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useLocalStorage<S>(
  key: string,
  dataIfNull: any
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState<S>(() => {
    // load todos from localStorage
    try {
      return JSON.parse(localStorage.getItem(key) || "");
    } catch (error) {
      console.log(error);
    }
    // console.log("read from local storage");
    return dataIfNull;
  });

  useEffect(() => {
    // everytime todos change, save to localStorage
    localStorage.setItem(key, JSON.stringify(state));
    // console.log("save to local storage");
    // console.log(state);
  }, [state]);
  return [state, setState];
}

export default useLocalStorage;
