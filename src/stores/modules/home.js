import { getHomeHotSuggests,getHomeHotCategories,getHomeHouseList } from "@/services"
import { defineStore } from 'pinia'

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        currentPage:1,
        houseList:[],
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data             
        },
        async fetchHotCategories() {
            const res = await getHomeHotCategories()
            this.categories =  res.data 
        },
        async fetchHouseListData() {
            const res = await getHomeHouseList(this.currentPage++)
            this.houseList.push(...res.data)
        }
    }
})
export default useHomeStore