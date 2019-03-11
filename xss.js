//on nodejs
var xss = require("xss");
var html = xss('<script>alert("xss");</script>');
console.log(html);


//ON browser


<script src="https://rawgit.com/leizongmin/js-xss/master/dist/xss.js"></script>
<script>
// apply function filterXSS in the same way
var html = filterXSS('<script>alert("xss");</scr' + 'ipt>');
alert(html);
</script> 

