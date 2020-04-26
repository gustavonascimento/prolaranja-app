import Consts from '../../consts'

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(response) {
  switch (response.problem) {
    case "CONNECTION_ERROR":
      return { kind: Consts.apiStatus.cannotConnect, temporary: true, errorMessage: response.data }
    case "NETWORK_ERROR":
      return { kind: Consts.apiStatus.cannotConnect, temporary: true, errorMessage: response.data }
    case "TIMEOUT_ERROR":
      return { kind: Consts.apiStatus.timeout, temporary: true, errorMessage: response.data }
    case "SERVER_ERROR":
      return { kind: Consts.apiStatus.server, errorMessage: response.data }
    case "UNKNOWN_ERROR":
      return { kind: Consts.apiStatus.unknown, temporary: true, errorMessage: response.data }
    case "CLIENT_ERROR":
      switch (response.status) {
        case 401:
          return { kind: Consts.apiStatus.unauthorized, errorMessage: response.data }
        case 403:
          return { kind: Consts.apiStatus.forbidden, errorMessage: response.data }
        case 404:
          return { kind: Consts.apiStatus.notFound, errorMessage: response.data }
        default:
          return { kind: Consts.apiStatus.rejected, errorMessage: response.data }
      }
    case "CANCEL_ERROR":
      return { kind: Consts.apiStatus.CANCEL_ERROR }
    default:
      return { kind: Consts.apiStatus.unknown }
  }
}
