function tagFactory(tag){
    let liTag = document.createElement("li");
        liTag.innerText = tag;
        liTag.classList.add("tag");
        let btnDelete = document.createElement("i");
        btnDelete.classList.add("fa-solid");
        btnDelete.classList.add("fa-x");
        btnDelete.classList.add("closeTag");
        btnDelete.addEventListener("click", function () {
            deleteTag(tag);
        })
        liTag.appendChild(btnDelete);
        return liTag;
}