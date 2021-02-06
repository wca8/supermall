import {request} from "@/network/request";

export function getCategoryTitle() {
  return request({
    url: '/category'
  })
}


export function getSubcategory(maitKey) {
  return request({
    url:'subcategory',
    params:{
      maitKey
    }
  })
}
