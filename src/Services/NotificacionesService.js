import { Loading, Notify, SessionStorage } from 'quasar'

export function notificarError(mensaje, caption = 'Lo siento, hubo un error') {
  Notify.create({
    message: mensaje,
    color: 'negative',
    multiLine: true,
    progress: true,
    timeout: 4000,
    caption: caption,
  })
}

export function notificarExito(mensaje, caption = '=> Ok') {
  Notify.create({
    message: mensaje,
    color: 'positive',
    multiLine: true,
    progress: true,
    timeout: 2000,
    caption: caption,
  })
}

export function notificarAPIError(error) {
  if(!error.response) {
    notificarError(error.message);
    return;
  }

  switch (error.response.status) {
    case 404:
      notificarError(
        'Request failed with status code 404',
        `Not Found -> /${error.response.config.url}`,
      )
      break

    default:
      notificarError(error.response.statusText, error.response.data.message)
      break
  }
}
