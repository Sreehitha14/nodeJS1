var myPenguin = {name : "Emperor Penguin", origin : "Australia", livingarea : "Africa"}
console.log("Hello, I'm a penguin and my name is " + myPenguin.name + "!");
myPenguin.canFly = false;
myPenguin.chirp = function(){
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
}
myPenguin.sayHello = function(){
    console.log("Hello, I'm a penguin and my name is " + this.name + "!");
}
myPenguin.sayHello()

myPenguin.name = "Penguin McPenguinFace"
myPenguin.sayHello()

myPenguin.fly = function(){
    if(myPenguin.canFly){
        console.log("I can fly!");
    }
    else{
        console.log("No flying for me!");
    }
}
myPenguin.fly()
myPenguin.canFly = true
myPenguin.fly()
for(var prop in myPenguin){
    console.log(prop);
}
for(var prop in Object.values(myPenguin)){
    console.log(prop);
}
