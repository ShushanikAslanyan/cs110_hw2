<script>

 const space = function(m) {
  if (m === 0) {
      return "";
  }
  return " " + space(m-1);
};

 const stars = function(n) {
  if (n === 1) {
      return "*";
  }
  return "*" + stars(n-1);
};

  
  const connect= function (k, spcount, stcount) {
    if (k === 0) {
      return "";
       }
    console.log(space(spcount)+ stars(stcount)) ; 
    connect((k-1), (spcount -1), (stcount - 1));
  };

  const triangleStars = function(k) {
    connect(k, k -1, 1)
  };
  </script>
