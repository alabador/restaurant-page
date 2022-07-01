
class MenuItem {
    constructor(foodName, description, img){
        this.foodName = foodName;
        this.description = description;
        this.img = img;
    }
}

const lechonKawali = new MenuItem('Lechon Kawali', 
    'Pork belly slabs deep-fried, served in cubes.',
    'https://images.unsplash.com/photo-1625477811233-044633d10dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
);

function menu() {
    const itemDiv = document.createElement('div');
    const itemTitle = document.createElement('h3');
    const itemDesc = document.createElement('p');
    const itemPic = document.createElement('img'); 

    itemTitle.textContent = lechonKawali.foodName;
    itemDesc.textContent = lechonKawali.description;
    itemPic.src = lechonKawali.img;

    itemDiv.append(itemTitle, itemDesc, itemPic);
    return itemDiv;
}


export {menu};