var colours=['Orange','Red','Green','Yellow','Blue','brown','Pink','Sky Blue','Gold','Violet'];
function change() {
    setTimeout(function loop() {
        document.bgColor=colours.shift();
        if(colours.length)
        {
          setTimeout(loop,5000);
        }
    },5000);
}
    function start()
    {
       setInterval(change(),5000); 
    }

start();