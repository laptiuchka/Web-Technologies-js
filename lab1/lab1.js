const items = document.querySelectorAll('ul li');

items.forEach(function(item) {
    item.ondblclick = function() {
        let name = prompt("Введіть ім'я студента:");
        
        if (name) {
            console.error("Помилка: " + name);
        }
    };
});