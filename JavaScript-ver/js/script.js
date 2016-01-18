var toDo = (function(){

    var addButton = document.getElementById('btn-add');
    var textBox = document.getElementById('text-box');
    var list = document.getElementById('todo-list');

    addButton.addEventListener("click", addItem);

    textBox.addEventListener("keypress", function(e) {
        if (e.keyCode === 13) {
            addItem();
            e.preventDefault();
        }
    }, false);

    function addItem() {
        var listElement = document.createElement('li');

        if (textBox.value) {
            listElement.innerText = textBox.value;
            listElement.appendChild(createDeleteLink());
            list.appendChild(listElement);
            textBox.value = "";
        }
    }

    function createDeleteLink() {
        var deleteLink = document.createElement('span');
        deleteLink.setAttribute("class", "delete-link");
        deleteLink.innerHTML = "x";
        deleteLink.addEventListener("click", removeItem);
        return deleteLink;
    }

    function removeItem() {
        var parent = this.parentNode.parentNode;
        var child = this.parentNode;

        parent.removeChild(child);
    }

}());
