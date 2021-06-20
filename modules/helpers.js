function $g(value) {
    //判斷是否為id selector
    if (value.includes('#')) {
    //回傳Element
    return document.querySelector(value);
    }

    else if(value.includes('.')){
        return document.querySelector(value);
    }
    //回傳NodeList集合
    var nodelist = document.querySelectorAll(value);
    //如果nodelist的長度等於1(表示只有選到一個對應的) , 則回傳第一個
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function $c(element){
    return document.createElement(element);
}

export {$g , $c};