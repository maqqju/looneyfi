var _replacements = ["Abominable Snowman", "Alan", "Andrew", "Barnyard Dawg", "Beaky Buzzard", "Blacque Jacque Shellacque", "Bugs Bunny", "Bugs Bunny and Lola Bunny", "Carl", "Carol", "Cecil Turtle", "Charlie Dog", "Chuck Berost", "Clarence Cat", "Crusher", "Daffy Duck", "Dr. Weisberg", "Elmer Fudd", "Foghorn Leghorn", "Frank Russo", "Giovanni Jones", "Gossamer", "Granny", "Gustavo", "Henery Hawk", "Henry Bear", "Instant Martians", "Jor-El", "Junior Bear", "K-9", "Leslie Hunt", "Lola Bunny", "Looney Quartet", "Mac and Tosh", "Mama Bear", "Marine Drill Sargeant", "Marty the Whale", "Marvin the Martian", "Miss Prissy", "Mr. Girardi", "Mr. Hyde", "Nasty Canasta", "Patricia Bunny", "Penelope Pussycat", "Pepé Le Pew", "Pete Puma", "Petunia Pig", "Phyllis", "Porky Pig", "Porky's Mother", "Professor Johnson", "Road Runner", "Roadrunnersaurus", "Rocky and Mugsy", "Rodney Rabbit", "Santa Claus", "Shropshire Slasher", "Slowpoke Rodriguez", "Speedy Gonzales", "Spike the Bulldog", "Starlett Johansson", "Svetlana", "Sylvester", "Sylvester's Mother", "Tasmanian Devil", "Terry Delgado", "Tina Russo", "Tina's Sister", "Toro the Bull", "Tutty's Waitress", "Tweety", "Uncle Duck", "Walter Bunny", "Webster", "Wieb Lunk", "Wile E. Coyote", "Witch Lezah", "Yosemite Sam", "Zachary"];

var getIndex = function(max) {
	Math.random() * (max);
}


var reg = new RegExp('[A-Z][a-z]+[ A-Z][A-Z][a-z]+',"g");
var txt = $('.content').text();
var matches = txt.match(reg);
var map = {};

matches.filter(function(x) {
   var i = getIndex(_replacements.length);
   var _replacement = _replacements.splice(i, 1);
   map[x] = _replacement[0];

   var _surname = x.split(' ')[1];
   map(_surname) = _replacement[0];
   return true;
});

$('.content').contents().filter(function(index, obj) {
    return obj.nodeType !== 1;
}).map(function(index, obj) {
    for (var i = 0; i < Object.keys(map).length; i++) {
          var _key = Object.keys(map)[i];
          obj.nodeValue = obj.nodeValue.replace(_key, map[_key]);
    }
});