class row {
  public code = ''
  public name = ''
}

export function getSupportedLocales ():Array<row> {
  const annotatedLocales:Array<row> = []
  const supportedLocales = require('../../config/supported-locales.json')
  Object.keys(supportedLocales).forEach((key: string) => {
    annotatedLocales.push({ code: key, name: supportedLocales[key] })
  })
  return annotatedLocales
}
