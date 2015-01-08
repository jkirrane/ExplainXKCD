var url = document.URL;

var theString = url.replace('http://xkcd.com/','');
theString = theString.replace('/','');


if(!isNaN(theString)) {
	var p = document.createElement('p');
	var a = document.createElement('a');
	var linkText = document.createTextNode("Check out this comic's Explain XKCD");
	a.appendChild(linkText);
	a.title = "Check out this comic's Explain XKCD";
	a.href = "http://www.explainxkcd.com/wiki/index.php/"+theString;
	a.target = "_blank";
	p.appendChild(a);
	var theDiv = document.getElementById("middleContainer");
	theDiv.appendChild(p);
}