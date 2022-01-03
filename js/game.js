var example1 = new Vue({
    el: '#example-1',
    data: {
        hphero: 100,
        hpmonter: 100,
        hphero1: 250,
        hpmonter1: 250,
        hero_atk: 0,
        monter_atk: 0
    },
    methods: {
        randomNumber: function (max, min) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        Start: function () {
            this.hphero = 100,
                this.hpmonter = 100,
                this.hphero1 = 250,
                this.hpmonter1 = 250,
                this.hero_atk = 0,
                this.monter_atk = 0
            document.getElementById('console_content').innerHTML += ("");
            location.replace("/game.html")
        },
        Attack: function (x, y) {
            this.hero_atk = x
            this.monter_atk = y
            this.hpmonter -= x
            this.hphero -= y
            this.hpmonter1 -= x
            this.hphero1 -= y
            document.getElementById('console_content').innerHTML += ('ฮีโร่ตีมอลเตอร์ดาเมท : ' + x + "&emsp;มอลเตอร์เลือดเหลือ : " + this.hpmonter + "\n");
            document.getElementById('console_content').innerHTML += ('มอลเตอร์ตีฮีโร่ดาเมท : ' + y + "&emsp;ฮีโร่เลือดเหลือ : " + this.hphero + "\n");
        },
        Special_Attack: function (x, y) {
            this.hero_atk = x
            this.monter_atk = y
            this.hpmonter -= x
            this.hphero -= y
            this.hpmonter1 -= x
            this.hphero1 -= y
            document.getElementById('console_content').innerHTML += ('ฮีโร่ตีมอลเตอร์ดาเมท : ' + x + "&emsp;มอลเตอร์เลือดเหลือ : " + this.hpmonter + "\n");
            document.getElementById('console_content').innerHTML += ('มอลเตอร์ตีฮีโร่ดาเมท : ' + y + "&emsp;ฮีโร่เลือดเหลือ : " + this.hphero + "\n");
        },
        sethpmonter_0: function () {
            this.hpmonter = 0
        },
        sethphero_0: function () {
            this.hphero = 0
        },
        sethp_0: function () {
            this.hpmonter = 0
            this.hphero = 0

        }


    }

}
)

