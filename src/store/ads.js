export default {
    state: {
      ads: [
        {
          id: "1",
          title: "First",
          desc: "First Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          id: "2",
          title: "Second",
          desc: "Second Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          id: "3",
          title: "Third",
          desc: "Third Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          id: "4",
          title: "Fourth",
          desc: "Fourth Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
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
      myAds(state) {
        return state.ads;
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
      }
    },
    actions: {
      createAd({commit}, payload) {
        payload.id = Math.random()
        commit('createAd', payload)
      }
    }
  };