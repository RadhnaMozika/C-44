class Player{
    constructor(x, y){

        this.player = createSprite(x, y, 50, 50);
        this.weapon = createSprite(x+100, y+100, 50, 50);

        this.name;
        this.distance;
        this.health;
        this.score;

        this.owernership = false;

    }

    move(){
        if(keyDown("up")){
            this.player.y = this.player.y-5;
        }
        if(keyDown("down")){
            this.player.y = this.player.y+5;
        }
        if(keyDown("left")){
            this.player.x = this.player.x-5;
        }
        if(keyDown("right")){
            this.player.x = this.player.x+5;
        }
    }

    pickWeapon(){
        this.weapon.mousePressed(()=>{
            this.owernership = true;
            this.weapon.x = this.player.x;
        })
    }

    kill(){
        if(this.owernership === true){
            if(keyDown("x")){
                
            }
        }
    }
    

}