//window.onload多次绑定会覆盖，addLoadEvent解决这个问题
function addLoadEvent(fn) {
    var oldevent = window.onload;
    if(typeof oldevent != 'function') {
        window.onload = fn;
    } else {
        window.onload = function () {
            oldevent();
            fn();
        }
    }
}


function ready() {
    alert('ready');
}

function sayhello() {
    alert('hello');
}


addLoadEvent(ready);
addLoadEvent(sayhello);



