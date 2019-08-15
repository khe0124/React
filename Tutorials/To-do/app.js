var ul = document.getElementById("list"),
        removeAll = document.getElementById("removeAll"),
        add = document.getElementById("add")


add.onclick = function(){
    addLi(ul);
}

function addLi(targetUi){
    var inputText = document.getElementById('text').value;
    li = document.createElement('li'),
    textNode = document.createTextNode(inputText + " "),
    removeButton = document.createElement('button');
    document.getElementById('text').value = "";

    if(inputText.length === 0){
        alert("비어있음");
        return false;
    }

    removeButton.className = "removeMe";
    removeButton.innerHTML = "삭제";
    removeButton.setAttribute("onclick","removeMe(this);");

    li.appendChild(textNode);
    li.appendChild(removeButton);

    targetUi.appendChild(li);
}

function removeMe(item){
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

removeAll.onclick = function (){
    ul.innerHTML = "";
}
