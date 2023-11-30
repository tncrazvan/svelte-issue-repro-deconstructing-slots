import { delay } from './delay'
import { error } from './error'
import { ok } from './ok'

/**
 * @type {Array<User>}
 */
const users = [
  {
    id: '1',
    username: 'tncrazvan',
  },
]

/**
 * @param {{id:string}} payload
 * @returns {Promise<Unsafe<User>>}
 */
export async function find_user({ id }) {
  await delay({ milliseconds: 1000 }) //simulate io
  const user = users.find(function pass(user) {
    return user.id === id
  })

  if (!user) {
    return error('User not found.')
  }

  return ok(user)
}
