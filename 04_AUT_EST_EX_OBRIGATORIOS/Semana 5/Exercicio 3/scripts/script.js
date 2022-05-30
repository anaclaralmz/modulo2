let inputList = document.getElementById("string");
let valorFoco = document.getElementById("valorFoco");
let listaOrdenada = document.getElementById("resultado");

function bubbleSort(list) {
  let i;
  let j;
  let temp;

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

function getvalorFocoIndex(list, value) {
  let index = 0;
  let found = false;

  while (index < list.length && !found) {
    if (list[index] == value) {
      found = true;
    } else {
      index++;
    }
  }

  return found ? index : -1;
}

const sortList = () => {
  let list = inputList.value.split(",");
  list = list.map((item) => parseInt(item));
  let sortedList = bubbleSort(list);
  let valorFocoIndex = getvalorFocoIndex(sortedList, valorFoco.value);

  let li = document.createElement("li");

  li.innerHTML = `
  Lista ordenada: [${sortedList}]\n
  Posição do valor foco: ${valorFocoIndex}
  `;
  listaOrdenada.appendChild(li);
};
