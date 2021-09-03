import { get, post } from './api/api'
import { urls } from './api/api-urls'
import { getMessage } from './errors/error-messages'

export { toast } from './toast/toast'

export const api = {
  get,
  post,
  urls,
}
export const errors = {
  getMessage,
}
