const model = require('../../models/trade')

exports.index = ('/', (req, res) => {
    let items = model.find();
    res.render('./index', {items});
})

exports.new = (req, res) => {
    res.render('./trade/newTrade');
}

exports.breeds = ((req, res) => {
    let breeds = model.find();
    let categories = model.findCategories();
    res.render('./trade/trades', {breeds, categories});
})

exports.create = ((req, res) => {
    let breed = req.body;
    model.save(breed)
    res.redirect('./available_breeds')
})

exports.show = ((req, res, next) => {
    let id = req.params.id
    let breed = model.findById(id)
    if(breed) {
        res.render('./trade/show', {item: breed});
    } else {
        let err = new Error("Cannot find story with id " + id)
        err.status = 404;
        next(err)
    }
})

exports.edit = ((req, res, next) => {
    let id = req.params.id;
    let item = model.findById(id);
    if(item) {
        res.render('./trade/edit', {item: item});
    } else {
        let err = new Error("Cannot find item with id " + id)
        err.status = 404;
        next(err)
    }
})

exports.update = ((req, res, next) => {
    let item = req.body;
    let id = req.params.id;
    if(model.updateById(id, item)) {
        res.redirect('/trades/available_breeds/'+id)
    } else {
        let err = new Error("Cannot find story with id " + id)
        err.status = 404;
        next(err)
    }
})

exports.delete = ('/:id', (req, res, next) => {
    let id = req.params.id;
    if(model.deleteById(id)) {
        res.redirect('/trades/available_breeds/')
    } else {
        let err = new Error("Cannot find story with id " + id)
        err.status = 404;
        next(err)
    }
})