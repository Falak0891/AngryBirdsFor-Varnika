class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 100,
            stiffness : 0.04
        }

        this.pointB = pointB;

        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        line(posA.x, posA.y, pointB.x, pointB.y);
        }
    }

}