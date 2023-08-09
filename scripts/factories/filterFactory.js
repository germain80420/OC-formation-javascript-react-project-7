function filterFactory(filter,tags){
    let li = document.createElement("li");
    li.innerText = filter;
    if (tags.includes(li.innerText) && !li.classList.contains("tagActive")) {
        setTagActive(li, true, tags);
    }
    li.addEventListener("click", function (e) {
        e.stopPropagation();
        if (!li.classList.contains("tagActive")) {
            setTagActive(li, false, tags);
        }
    })
    return li;
}
function setTagActive(liElement, tagExist, tags) {
    liElement.classList.toggle("tagActive");
    const btnDelete = document.createElement("i");
    btnDelete.classList.add("fa-solid");
    btnDelete.classList.add("fa-x");
    btnDelete.classList.add("closeSelect");
    if (!tagExist) {
        console.log(liElement.innerText);
        tags.push(liElement.innerText);
        displayTags();
    }
    btnDelete.addEventListener("click", function (e) {
        e.stopPropagation();
        btnDelete.classList.toggle("fa-solid");
        btnDelete.classList.toggle("fa-x");
        liElement.classList.toggle("tagActive");
        deleteTag(liElement.innerText);
        displayTags();
    })
    liElement.appendChild(btnDelete);
}