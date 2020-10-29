// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        if (!Array.isArray(this.sides))return;
        let sum = 0;

        for (let int of this.sides){
            sum += int
        }

        return sum
    }
}

class Triangle extends Polygon{
    
    get isValid(){
    if (!Array.isArray(this.sides))return;
        if(this.count !== 3)return;
        let sideOne = this.sides[0];
        let sideTwo = this.sides[1];
        let sideThree = this.sides[2];

        return (sideOne  + sideTwo > sideThree) && (sideThree  + sideTwo > sideOne) && (sideOne  + sideThree > sideTwo)
    }
}

class Square extends Polygon{
    
    get isValid(){
    if (!Array.isArray(this.sides))return;
        if(this.count !== 4)return;
        let sideOne = this.sides[0];
        let sideTwo = this.sides[1];
        let sideThree = this.sides[2];
        let sideFour = this.sides[3];

        return (sideOne  === sideThree) && (sideOne == sideTwo) && (sideOne  == sideFour)
    }

    get area(){
        if (!Array.isArray(this.sides))return;
        if(this.count !== 4)return;
        return this.sides[0]**2

    }
}
