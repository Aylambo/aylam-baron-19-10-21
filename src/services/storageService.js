export const storageService = {
    query,
    save,
    get,
    post,
    put, 
    remove
}



function query(key) {
    var entities = _load(key)

    return Promise.resolve(entities)
}

function save(key, entities) {
    _save(key, entities)
    return Promise.resolve(entities)
}

async function get(key, entityId) {
    return query(key)
        .then(entities => entities.find(entity => entity._id === entityId))
}

async function post(key, newEntity) {
    
    newEntity._id = _makeId()
    return query(key)
    .then(entities => {
        entities.push(newEntity)
            _save(key, entities)
            return newEntity
        })
}

async function put(key, updatedEntity) {
    return query(key)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(key, entities)
            return updatedEntity
        })
}

async function remove(key, entityId) {
    return query(key)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(key, entities)
        })
}





function _load(key) {
    var val = localStorage.getItem(key)
    return (val) ? JSON.parse(val) : null;
}


function _save(entityType, entities) {
    
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
