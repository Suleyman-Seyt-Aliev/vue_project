export default {
    state: {
      ads: [
        {
          id: "1",
          title: "First",
          desc: "First Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          userId: "1"
        },
        {
          id: "2",
          title: "Second",
          desc: "Second Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          userId: "2"
        },
        {
          id: "3",
          title: "Third",
          desc: "Third Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          userId: "1"
        },
        {
          id: "4",
          title: "Fourth",
          desc: "Fourth Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          userId: "2"
        }
      ]
    },
    getters: {
      ads(state) {
        return state.ads;
      },
      promoAds(state) {
        return state.ads.filter(ad => ad.promo);
      },
      myAds(state, getters) {
        return state.ads.filter(ad => {
          return ad.userId == (getters.user && getters.user.id)
        })
      },
      adById(state) {
        return id => {
          return state.ads.find(ad => ad.id == id)
        }
      }
    },
    mutations: {
      createAd(state, payload) {
        state.ads.push(payload)
      },
      updateAd(state, {title, desc, id}) {
        const ad = state.ads.find(a => a.id == id)
        if (ad) {
          ad.title = title
          ad.desc = desc
        }
      }
    },
    actions: {
      async createAd({commit, getters}, payload) {
        payload.id = Math.random()
        payload.userId = getters.user != null ? getters.user.id : '1'
        commit('clearError')
        commit('setLoading', true)
        // Имитация асинхронного запроса
        let isRequestOk = true
        let promise = new Promise(function(resolve) {
          setTimeout(() => resolve('Done'), 3000);
        });
        if (isRequestOk) {
          await promise.then(()=> {
            commit('createAd', payload)
            commit('setLoading', false)
          })
        } else {
          await promise.then(()=> {
            commit('setLoading', false)
            commit('setError', 'Ошибка создания объявления')
            throw new Error('Упс... Ошибка создания объявления')
          })
        }
      },
      async updateAd({commit}, {title, desc, id}) {
        commit('clearError')
        commit('setLoading', true)
        // Имитация асинхронного запроса
        let isRequestOk = true
        let promise = new Promise(function(resolve) {
          resolve('Done')
        });
        if (isRequestOk) {
          await promise.then(()=> {
            commit('updateAd', {title, desc, id})
            commit('setLoading', false)
          })
        } else {
          await promise.then(()=> {
            commit('setLoading', false)
            commit('setError', 'Ошибка редактирования объявления')
            throw new Error('Упс... Ошибка редактирования объявления')
          })
        }
      }
    }
  };