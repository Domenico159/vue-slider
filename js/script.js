
const main = new Vue({

    el:'#main',
    data:{
        images:[
            {
                nome:'Beach',
                url:'./img/beach-2836300_1280.jpg',
            },
            {
                nome:'Bora Bora',
                url:'./img/bora-bora-685303_1280.jpg',
            },
            {
                nome:'Maldive',
                url:'./img/maldives-1993704_1280.jpg',
            },
            {
                nome:'Pholinesia',
                url:'./img/polynesia-3021072_1280.jpg',
            },
            {
                nome:'Sunrise',
                url:'./img/sunrise-1014712_1280.jpg',
            },
        ],

        indexImg:0,
        timeId:0,

    },
    created(){

        console.log('ok instanza');

        this.nextLoopImg()

    },
    methods:{

        nextImg(){

            this.indexImg++;

            if(this.indexImg > (this.images.length - 1) ){
                this.indexImg = 0;
            }

        },
        prevImg(){

            this.indexImg -= 1;

            if(this.indexImg < 0){
                this.indexImg = this.images.length - 1;
            }

        },

        clickCircle(index){

            console.log(index);
            this.indexImg = index;
        },

        nextLoopImg(){

             this.timeId = setInterval( () =>{

                this.nextImg()
            
            }, 3000 );

        },

        stopLoop(){
            clearInterval(this.timeId)
        }
    },

});