function Hora(){
    var watch = window.document.getElementById('watch');
    var data = new Date();
    var hora = data.getHours();   

    if(hora>=6 && hora<=12)
    {
        watch.src = 'img/bom-dia.png';
    }else if(hora>=13)
    {
        watch.src = 'img/boa-tarde.png';
    }  
    
}





