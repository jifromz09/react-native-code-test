import axios from "axios";

import { FETCH_USERS } from "../apiServices/apis";

export default param => {
  const api = FETCH_USERS + param;
  return axios
    .get(api)
    .then(res => res.data)
    .catch(err => err.data);
};
