
<html>
<body>

<h2>The JavaScript <i>this</i> Keyword</h2>

<p>In this example, <b>this</b> represents the person object that "owns" the myFunction method.</p>

<p id="demo"></p>

<script>
'use strict';
let person = {
  firstName : 'John',
  lastName  : "Doe",
  id     : 5566
  &rbrace;;
  myFunction : function() {
  //  return this;
  }
&rbrace;;

// Display data from the object:
document.getElementById("demo").innerHTML = person.myFunction();
</script>

</body>
</html>
