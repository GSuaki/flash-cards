'use strict';

export function create (sequelize) {
    return sequelize.sync({ force: true, match: /_test$/ })
}

export function drop (sequelize) {
    return sequelize.drop();
}