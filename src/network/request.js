import axios from "axios"

export function request123(config) {
  const instance1 = axios.create({
    baseURL: "http://123.207.32.32:8000"
  });
  return instance1(config)
}

export function request2(config) {
  const instance2 = axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8"
  });
  return instance2(config)
}


