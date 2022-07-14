/* Fill your code*/

class Blog{
    constructor(title, detail){
        this.title = title;
        this.detail = detail;
    }
    
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }

    addDescription(){
        var display_card = document.createElement('p');
        display_card.setAttribute("id","blog-description");
        document.getElementById('card-text').appendChild(display_card);
        display_card.innerHTML += this.detail;
    }
}

document.getElementById("addBlog").addEventListener('click',function(){
    document.getElementById("popupContact").style.display = 'block';
});

function closePopup(){
    document.getElementById('popupContact').style.display="none";
}

document.getElementById('close').addEventListener('click', closePopup);
var submitPost = document.getElementById("post");

submitPost.addEventListener('click',function(){

    var img = document.createElement('img')
    img.src="./assets/javascript.png";
    img.setAttribute('id', 'image')
    document.getElementById('card-text').appendChild(img);

    var title = document.getElementById('title').value;
    var detail = document.getElementById('detail').value;
    
    var card = new Blog(title,detail);
    card.addTitle()
    card.addDescription()
    
    closePopup();
})