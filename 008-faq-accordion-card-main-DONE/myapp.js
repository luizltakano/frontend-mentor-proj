document.addEventListener("click", function (item) {
  const thisItemId = item.target.id;
  const parentElem = document.getElementById(thisItemId).parentElement;

  if (item.target.parentElement.className === "item-inactive") {
    parentElem.classList.remove("item-inactive");
    parentElem.classList.add("item-active");
    document.querySelectorAll("div.list-item").forEach((listItem) => {
      const listItemId = listItem.id;
      if (listItemId !== thisItemId) {
        listItem.parentElement.classList.remove("item-active");
        listItem.parentElement.classList.add("item-inactive");
      }
    });
  } else if (item.target.parentElement.className === "item-active") {
    parentElem.classList.remove("item-active");
    parentElem.classList.add("item-inactive");
  } else {
    console.log(item.target);
  }
});
