function testEcho(){

}

// function onloadFunction(){
//     var min = 1, max = 5;
//     list_of_topics = document.getElementById("list_topics_OpenFMB");

//     for (var i = min; i<=max; i++){
//         var opt = document.createElement('option');
//         opt.value = "topic"+i;
//         opt.innerHTML = "topic"+i;
//         list_of_topics.appendChild(opt);
//     }
// }

function onloadFunction() {
    list_of_topics = document.getElementById("list_topics_OpenFMB");
    var opt = document.createElement('option');
    opt.value = "Search Topics First";
    opt.innerHTML = "Search Topics First";
    list_of_topics.appendChild(opt);
    
}

window.onload = function () {
    onloadFunction();
}