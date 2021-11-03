function getmenu (){
    var html data;
    html data ="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i <menu_list_array.length;i++){
        html date =html data+'<li>'+menu_list_array[I]+'</li>'
    }
    html data = html data+"</ol>"
    document.getElementById("display_menu").innerHTML=html data;

}
function add_item(){
    var html data;
    var item = document.getElementById("add_item").ariaValueMax;
    menu_list_array.push(item);
    menu_list_array.sort();
    html data = "<section class = 'cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        html data = html data+'<div class = "card">'+'<ing src="images/pizzaImg,png"/>'+menu_list_array[I]+'</div>'

    }
    html data = html data+"</section>"
    document.getElementById("display_addmenu").innerHTML=html data;
    
}