<template>
    <div>
        <CityHeader></CityHeader>
        <city-search :cities="this.cities"></city-search>
        <city-list :cities="this.cities" :hotCities="this.hotCities" :letter="this.letter"></city-list>
        <city-alph :cities="this.cities" @change="handleLetterChange"></city-alph>
    </div>
</template>
<script>
import axios from 'axios'
import CityHeader from '../components/city/Header.vue'
import CitySearch from '../components/city/Search.vue'
import CityList from '../components/city/List.vue'
import CityAlph from '../components/city/Alphabet.vue'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlph
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (response) {
    //   console.log(res)
      const res = response.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>
