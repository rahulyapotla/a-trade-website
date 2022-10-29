const {v4: uuid} = require('uuid')
const { breeds } = require('../controllers/trade_controller/tradeController')

const categories = ["American Bull Dog", "American Eskimo Dog"]
const items = [
    {
        id: '1', 
        name: 'Johnson (Bully) American Bulldog',
        category:'American Bull Dog',
        details: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', 
        status: 'Available',
        image: 'https://ebkc.org/wp-content/uploads/2019/07/americanbulldog3.jpg'
    },
    {
        id: '2', 
        name: 'Scott (Standard) American Bulldog',
        category:'American Bull Dog',
        details: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', 
        status: 'Available',
        image: 'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-1200x628-FACEBOOK-1200x628.jpg'
    },
    {
        id: '3', 
        name: 'Painter (Margentina) American Bulldog',
        category:'American Bull Dog',
        details: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', 
        status: 'Not Available',
        image: 'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-1200x628-FACEBOOK-1200x628.jpg'
    },
    {
        id: '4', 
        name: 'Old Southern White American Bulldogs',
        category:'American Bull Dog', 
        details: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', 
        status: 'Not Available',
        image: 'http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg'
    },
    {
        id: '5', 
        name: 'The Toy',
        category:'American Eskimo Dog',
        details: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', 
        status: 'Available',
        image: 'https://moderndogmagazine.com/sites/default/files/images/articles/top_images/bigstock-black-dalmatian-dog-outdoors-i-96150509.png'
    },
    {
        id: '6', 
        name: 'The Miniature',
        category:'American Eskimo Dog',
        details: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', 
        status: 'Available',
        image: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Shih-Tzu_01.jpg?bust=1538074574'
    },
    {
        id: '7', 
        name: 'The Standard',
        category:'American Eskimo Dog',
        details: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', 
        status: 'Not Available',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQW7cg5YcYmzXKsUxcqnTjQ0AKpK0ZAf57Q&usqp=CAU'
    }
]

exports.save = (breed) => {
    breed.id = uuid()
    items.push(breed)
    categories.push(breed.category)
}

exports.find = () => {
    return items 
}

exports.findCategories = () => {
    return categories;
}

exports.findById = (id) => {
    return items.find(item=>item.id===id) 
}

exports.updateById = (id, newStory) => {
    let item = items.find(item=>item.id===id)
    if(item) {
        item.name = newStory.name;
        item.category = newStory.category;
        item.details = newStory.details;
        item.status = newStory.status;
        return true
    } else {
        return false
    }
}

exports.deleteById = function(id) {
    let index = items.findIndex(item => item.id === id)
    if(index != -1) {
        items.splice(index, 1);
        return true;
    } else {
        return false
    }
}

