
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
const bbq = new MenuItem('BBQ', 
    'Various meats grilled on a stick',
    'https://images.unsplash.com/photo-1593870682262-8c9f6a9bb225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
);

function menu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    menuDiv.append(menuHeader(), menuItem(lechonKawali), menuItem(bbq));
    return menuDiv;
}

function menuHeader() {
    const menuHeader = document.createElement('div');
    const menuTitle = document.createElement('h2');

    menuHeader.classList.add('menu-header');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Menu';
    menuHeader.append(menuTitle);

    return menuHeader;
}

function menuItem(item) {
    const itemDiv = document.createElement('div');
    const itemTitle = document.createElement('h3');
    const itemDesc = document.createElement('p');
    const itemPic = document.createElement('img'); 

    itemDiv.classList.add('item');

    itemTitle.textContent = item.foodName;
    itemDesc.textContent = item.description;
    itemPic.src = item.img;

    itemDiv.append(itemTitle, itemDesc, itemPic);
    return itemDiv;
}


export {menu};