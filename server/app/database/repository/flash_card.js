import { FlashCard } from '../../models';

export function findAll(props = {}) {
  return FlashCard.findAll(props)
}

export function findOne(where) {
  return FlashCard.findOne({ where })
    .then(row => {
      if (!row) {
        throw new Error('FlashCard not exists');
      }
      
      return row;
    })
}

export function create(obj = {}) {
  return FlashCard.create(obj)
}

export function destroy(props = {}) {
  return FlashCard.destroy(props)
}

export default {
  findAll,
  findOne,
  destroy,
  create
}