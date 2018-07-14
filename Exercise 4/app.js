new Vue({
  el: '#exercise',
  data: {
    effectClass: '',
    inputClass: '',
    inputClass2: '',
    attachClass: false,
    myStyles: '',
    width: 1
  },
  methods: {
    startEffect(){
        setInterval(() => this.effectClass = this.effectClass === 'highlight' ? 'shrink' : 'highlight' ,1000);
    },
    startProgress(){
        setInterval(() => this.width++, 1000);
    }
  }
});
