//Utilisation du framework vue.js pou le boutton de jeu.
const app = new Vue({
  el: '#bouttonJouer',
  data: {
    name: null,
  },
  methods:{
    checkForm: function (e) {
      if (this.name) {
        return true;
      }
      if (!this.name) {
        alert('Nom requis.');
      }
      e.preventDefault();
    }
  }
})
