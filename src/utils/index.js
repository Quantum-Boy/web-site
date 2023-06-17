import requset from "./request"
export const getHTMLText = async (url) => {
  const res = await requset.get(url)
  console.log(res)
}