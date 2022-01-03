
var example1 = new Vue({
    el: '#app',
    data: {
      score1: 0,
      name: 'popcat',
      img1: "/img/pop_cat_meme (1).png",
      img2: "/img/pop_cat_meme (2).png",
      img: "/img/pop_cat_meme (1).png",


    },
    methods: {
        up: function(sound){
            this.img = this.img1;
            this.score1++
            var audio = new Audio(sound) // path to file
            audio.play();
        },
        down: function(sound){
            this.img = this.img2;
            var audio = new Audio(sound) // path to file
            audio.play();
        }
    },
  }
  )
