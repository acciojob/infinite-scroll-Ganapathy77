//your code here!
let orderList = document.querySelector('#infi-list');

//To add 10element by default
for(let i=0; i<10; i++){
	let li = document.createElement('li');
li.textContent = "Item " + i;
orderList.appendChild(li)
}
//to add 2 elemnt if reached end
orderList.addEventListener("scroll", () => {
    const lastLi = orderList.lastElementChild;
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastLiOffset - 20) {
      for (let i = 1; i <= 2; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${orderList.children.length + i}`;
        orderList.appendChild(li);
      }
    }
  });

