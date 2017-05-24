var i = ['url("1.jpg")','url("2.jpg")','url("3.jpg")','url("4.jpg")','url("5.jpg")','url("6.jpg")'];
var outer = document.getElementById("outer");
var inner = document.getElementById("inner");
var x = document.getElementById("you");
var slice = document.getElementById("slice");
var c = 0, d = 1, p, t, s;
x.addEventListener("click", change);
function change()
{
	p = 0;
	x.removeEventListener("click", change);
	outer.style.backgroundImage= i[c];
	inner.style.backgroundImage = i[d];
	t = setInterval(animate, 1);
	if(d==5)
	{
		d = 0;
		c = c+1;
	}
	else if(c==5)
	{
		c=0;
		d = d+1;
	}
	else
	{
		c = c+1;
		d = d+1;
	}
	s = c*40;
	slice.style.marginTop = s+'px';
}
function animate()
{
	inner.style.height = p+'px';
	p = p+1;
	if(p == 500)
	{
		clearInterval(t);
		x.addEventListener("click", change);
	}
}
