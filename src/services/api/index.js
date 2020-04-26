import { create } from 'apisauce'
import { getGeneralApiProblem } from './api-problem'
import { DEFAULT_API_CONFIG } from './api-config'
import Consts from '../../consts'

/**
 * Manages all requests to the API.
 */
export default class Api {

  constructor(config = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
 
  handleServerResponse(response) {
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      return problem
    } else {
      return { kind: Consts.apiStatus.ok, data: response.data }
    }
  }

  async get(endpoint, params) {
    const response = await this.apisauce.get(endpoint, params)
    return this.handleServerResponse(response)
  }

  async post(endpoint, data) {
    const response = await this.apisauce.post(endpoint, data)
    return this.handleServerResponse(response)
  }

  async put(endpoint, data) {
    const response = await this.apisauce.put(endpoint, data)
    return this.handleServerResponse(response)
  }

  async delete(endpoint, params) {
    const response = await this.apisauce.delete(endpoint, params)
    return this.handleServerResponse(response)
  }
}
