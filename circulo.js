function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
	rebotex=true;
}

Circulo.prototype.actualizar = function() { 

    if ((this.x < this.juego.ctx.canvas.width) && (rebotex)) {
        this.x += 2;
    }
    else {
		rebotex=false;
        this.x -= 2;
		if(this.x==0)
			rebotex=true;
    }
};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, 50, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};