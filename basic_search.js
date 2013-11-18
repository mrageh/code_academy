var text = "Blah blah blah blah blah blah Adam \
blah blah blah Eric blah blah Adam blah blah \
blah blah blah blah blah Adam";
var myName = "Adam";
var hits = [];

for(var i = 0; i < text.length; i++){
    if(text[i] === myName[0]){
        for(var j = i; j  <= (myName.length + i); j++){
            hits.push(text[j]);
        }
    }
}
if (hits.length === 0){
    console.log("Your name wasn't found!");
}
else{
    console.log(hits);
}
