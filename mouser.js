function Mouse(name){
	this.name = name;
	this.isDead = false;
}
modude.export = Mouse;
Mouse.prototype.die = function(){
	this.isDead = true;
}