import { request123,request2 } from "../network/request"

export function getMuitlData() {
  return request123({ url: "/home/multidata" })
}

export function getMuitlData2(type2, pagex) {
  return request2({
    url: "/home/data",
    params: { type:type2, page:pagex }
  })
} 