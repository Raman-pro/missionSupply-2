class Side {
    constructor(x, y, width, height,bodyy) {
        this.sprite = createSprite(x, y,width, height);
        this.sprite.shapeColor="red"
        this.body = Bodies.rectangle(x, bodyy, width, height, {isStatic: true});
        World.add(world, this.body);
    }
}