let lista = document.getElementById("string");
let listaOrdenada = document.getElementById("resultado");
function ordenarlista() {
  let list = lista.value.split(",");
  list = list.map((item) => parseInt(item));
  let sortedList = bubblesort(list);
​
  let li = document.createElement("li");
​
  li.innerHTML = `[${sortedList}]`;
  listaOrdenada.appendChild(li);
}
​
function bubblesort(list) {
  let i;
  let j;
  let temp;
​
  for (i = 0; i < list.length; i++) {
    for (j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}