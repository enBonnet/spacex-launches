import { launchesURL } from "./config";

export const getLaunches = async () => {
  try {
    const response = await fetch(launchesURL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
