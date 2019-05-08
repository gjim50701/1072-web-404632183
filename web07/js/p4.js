function goPage(index){
    let p = document.getElementById('article');
    switch(index){
        case 1:
        p.innerHTML = '<iframe width="100%" height="100%" src="p1/div.html" frameborder="0"></iframe>'
        break;
        case 2:
        p.innerHTML = '<iframe width="100%" height="100%" src="p2/tku60.html" frameborder="0"></iframe>'
        break;
        case 3:
        p.innerHTML = '<iframe width="100%" height="100%" src="p3/mytravel.html" frameborder="0"></iframe>'
        break;
    
    }
}