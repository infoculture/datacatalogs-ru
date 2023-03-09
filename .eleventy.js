const {
  fortawesomeBrandsPlugin,
} = require('@vidhill/fortawesome-brands-11ty-shortcode')
const createOgImage = require('./src/_functions/filters/createOgImage')
const { DateTime } = require("luxon");

module.exports = (config) => {
  config.addPlugin(fortawesomeBrandsPlugin)
  config.addFilter('notEmpty', (array, value) => {
    return array.filter((items) => {
      return items[value]
    })
  })
  config.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromISO(dateObj).toLocaleString(DateTime.DATETIME_FULL, { locale: 'ru' });
   });
  config.addFilter('getNameById', (array, value) => {
    const match = array.find((item) => item.Name === value)
    return match ? match.id : ''
  })
  config.addNunjucksAsyncFilter('createOgImage', createOgImage)
  config.addFilter('humanDate', (date) => {
    const today = new Date();
    const dateArray = date ? date.split('-') : today.toUTCString()
    const getMonth = (month) => {
      switch (month) {
        case '1':
        case '01':
          return 'января'
        case '2':
        case '02':
          return 'февраля'
        case '3':
        case '03':
          return 'марта'
        case '4':
        case '04':
          return 'апреля'
        case '5':
        case '05':
          return 'мая'
        case '6':
        case '06':
          return 'июня'
        case '7':
        case '07':
          return 'июля'
        case '8':
        case '08':
          return 'августа'
        case '9':
        case '09':
          return 'сентября'
        case '10':
          return 'октября'
        case '11':
          return 'ноября'
        case '12':
          return 'декабря'
        default:
          return month
      }
    }
    return `${dateArray[2]} ${getMonth(dateArray[1])} ${dateArray[0]}`
  })
  config.addPassthroughCopy('./src/styles')
  config.addPassthroughCopy('./src/scripts')
  config.addPassthroughCopy('./src/images')
  config.addPassthroughCopy({
    'node_modules/@fontsource/rubik/files/rubik-all-300-normal.woff':
      'fonts/rubik/rubik-all-300-normal.woff',
    'node_modules/@fontsource/rubik/files/rubik-all-400-normal.woff':
      'fonts/rubik/rubik-all-400-normal.woff',
    'node_modules/@fontsource/rubik/files/rubik-all-500-normal.woff':
      'fonts/rubik/rubik-all-500-normal.woff',
    'node_modules/@fontsource/rubik/files/rubik-all-600-normal.woff':
      'fonts/rubik/rubik-all-600-normal.woff',
    'node_modules/reseter.css/css/reseter.min.css': 'styles/reseter.min.css',
  })

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
