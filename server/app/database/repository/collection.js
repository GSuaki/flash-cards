import { Collection } from '../../models';

export function findAll(props = {}) {
  return Collection.findAll(props)
}

export function findOne(where) {
  return Collection.findOne({ where })
    .then(row => {
      if (!row) {
        throw new Error('Collection not exists');
      }
      
      return row;
    })
}

export function create(obj = {}) {
  return Collection.create(obj)
}

export function destroy(props = {}) {
  return Collection.destroy(props)
}

export default {
  findAll,
  findOne,
  destroy,
  create
}