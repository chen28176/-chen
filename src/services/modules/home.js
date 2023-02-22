import hyRequset from '../request'
// 封装热门建议请求
export function getHomeHotSuggests() {
    return hyRequset.get({
        url:"/home/hotSuggests"
    })
}
// 封装类别请求
export function getHomeHotCategories(){
    return hyRequset.get({
        url:"/home/categories"
    })
}
// 封装精选类型请求
export function getHomeHouseList(currentPage){
    return hyRequset.get({
        url:"/home/houselist",
        params:{
            page:currentPage
        }
    })
}