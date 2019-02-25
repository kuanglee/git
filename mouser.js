function Mouse(name){
	this.name = name;
	this.dead = false;
}
modude.export = Mouse;
Mouse.prototype.die = function(){
	this.dead = true;
}