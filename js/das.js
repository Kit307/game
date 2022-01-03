var example1 = new Vue({
    el: '#example-1',
    data: {
      counter: 0,
      numbers: [ 0,0,0,0,0,0 ]
    },
    methods: {
      plus: function (x) {
        this.counter += x
      },
      reset: function (){
          this.counter = 0
          this.numbers = [ 0,0,0,0,0,0 ]
      },
      plus1: function (x) {
        this.numbers[x] += 1
        
      },
      
    }
  }
  )