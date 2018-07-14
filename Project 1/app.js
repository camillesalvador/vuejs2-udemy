new Vue({
    el: '#app',
    data: {
        inGame: false,
        playerHealth: 100,
        monsterHealth: 100,
        log: []
    },
    methods: {
        attack(){
            this.monsterAttack(this.generateHit(10))
            this.playerAttack(this.generateHit(10));
        },
        generateHit(e){
            return Math.floor(Math.random() * (e - 1) + 1);
        },
        specialAttack(){
            this.monsterAttack(this.generateHit(20))
            this.playerAttack(this.generateHit(20));
        },
        playerAttack(hit){
            this.monsterHealth -= hit;
            this.log.push({message: `Player hits monster for ${hit}`, turn: 'player-turn'})
        },
        monsterAttack(hit){
            this.playerHealth -= hit;
            this.log.push({message: `Monster hits player for ${hit}`, turn: 'monster-turn'})
        },
        heal(){
            this.monsterAttack(this.generateHit(10));

            let hit = this.generateHit(10);
            this.playerHealth += hit;
            this.log.push({message: `Player heals himself for ${hit}`, turn: 'player-turn'})
        },
        giveUp(){
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.inGame = !this.inGame;
            this.log = [];
        }
    }
})