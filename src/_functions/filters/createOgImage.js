const EleventyImage = require('@11ty/eleventy-img')
const TextToSVG = require('text-to-svg-path')
const fs = require('fs')
function insertAtIndex(str, substring, index) {
  return str.slice(0, index) + substring + str.slice(index)
}
const baseWidth = 1200
const createOgImage = async ({ title, owner }) => {
  const splitTitle = (title) => {
    let newTitle = title
      .replace('г.', 'города')
      .replace(' &quot;', ' «')
      .replace('&quot;', '»')
      .replace(' Банк', 'Банк')

    if (newTitle.includes('Реестр наборов открытых данных органов')) {
      newTitle = insertAtIndex(newTitle, '%', 39)
    }
    if (newTitle.includes('«Информационное мониторинговое')) {
      const index = newTitle.indexOf('«Информационное мониторинговое')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('проектах,')) {
      const index = newTitle.indexOf('проектах,')
      newTitle = insertAtIndex(newTitle, '%', index + 10)
    }
    if (newTitle.includes('Единой')) {
      const index = newTitle.indexOf('Единой,')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Института')) {
      const index = newTitle.indexOf('Института')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('системы Республики Саха (Якутия)')) {
      const index = newTitle.indexOf('Республики')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('алкогольного')) {
      const index = newTitle.indexOf('алкогольного')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('и цифрового развития')) {
      const index = newTitle.indexOf('и цифрового развития')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('финансами Приморски')) {
      const index = newTitle.indexOf('Приморски')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Государственного геологического')) {
      const index = newTitle.indexOf('Государственного геологического')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('Арктического и антарктического')) {
      const index = newTitle.indexOf('и антарктического')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('агломераций')) {
      const index = newTitle.indexOf('агломераций')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('о государс')) {
      const index = newTitle.indexOf('о государс')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Дальневосточного региона')) {
      const index = newTitle.indexOf('Дальневосточного региона')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('политики и массовых коммуни')) {
      const index = newTitle.indexOf('и массовых коммуни')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('реформированию жилищно-комму')) {
      const index = newTitle.indexOf('жилищно-комму')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('финансирование у Фонда')) {
      const index = newTitle.indexOf('у Фонда')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Новый Уренгой в Ямало-Ненецк')) {
      const index = newTitle.indexOf('Новый Уренгой в Ямало-Ненецк')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('Ямало-Ненецкого')) {
      const index = newTitle.indexOf('Ямало-Ненецкого')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Кабардино-Балкарской')) {
      const index = newTitle.indexOf('Кабардино-Балкарской')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('биологические (зоологические и ботаничес')) {
      const index = newTitle.indexOf('(зоологические и ботаничес')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('Министерства финансов')) {
      const index = newTitle.indexOf('Министерства финансов')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('мерзлоте и климате')) {
      const index = newTitle.indexOf('и климате')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Российской федерации «Электронный')) {
      const index = newTitle.indexOf('«Электронный')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('коллекции Российской')) {
      const index = newTitle.indexOf('Российской')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('система Нижегородской области ')) {
      const index = newTitle.indexOf('Нижегородской')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Ханты-Мансийского')) {
      const index = newTitle.indexOf('Ханты-Мансийского')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('Федеральной')) {
      const index = newTitle.indexOf('Федеральной')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('территориального планирования')) {
      const index = newTitle.indexOf('территориального планирования')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('ресурсов и')) {
      const index = newTitle.indexOf(' и ')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('ресурсов по общественным')) {
      const index = newTitle.indexOf('по общественным')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Нижегородский')) {
      const index = newTitle.indexOf('Нижегородский')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('система промышленности')) {
      const index = newTitle.indexOf('система промышленности')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('открытых данных судов общей')) {
      const index = newTitle.indexOf('общей')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes(' дистанционного мониторинга')) {
      const index = newTitle.indexOf('дистанционного мониторинга')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('финансами Чувашской')) {
      const index = newTitle.indexOf('финансами Чувашской')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('геоинформационная система Ненецкого')) {
      const index = newTitle.indexOf('Ненецкого')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Федерального агентства лес')) {
      const index = newTitle.indexOf('Федерального агентства лес')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('информационных ресурсов Администрации')) {
      const index = newTitle.indexOf('Администрации')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('русской литературе и фо')) {
      const index = newTitle.indexOf('и фо')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('«Индустриальные парки,')) {
      const index = newTitle.indexOf('«Индустриальные парки,')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('нформационно-аналитической системы')) {
      const index = newTitle.indexOf('системы')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Единого портала бюджетной системы')) {
      const index = newTitle.indexOf('бюджетной системы')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Институт статистических')) {
      const index = newTitle.indexOf('Институт статистических')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (
      newTitle.includes('данных Правительства') ||
      newTitle.includes('данные Правительства')
    ) {
      const index = newTitle.indexOf('Правительства')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('управления, информационных')) {
      const index = newTitle.indexOf('информационных')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Муниципальный геоинформационный портал города')) {
      const index = newTitle.indexOf('города')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('единой информационной системы в сфере')) {
      const index = newTitle.indexOf('в сфере')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('и вопросам открытого управления')) {
      const index = newTitle.indexOf('и вопросам открытого управления')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('«Производство сварочного')) {
      const index = newTitle.indexOf('«Производство сварочного')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('эпидемиологии и микробиолог')) {
      const index = newTitle.indexOf('и микробиолог')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Единой геофизической службы')) {
      const index = newTitle.indexOf('Единой геофизической службы')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Министерства культуры')) {
      const index = newTitle.indexOf('Министерства культуры')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('и мониторингу окружающей')) {
      const index = newTitle.indexOf('и мониторингу окружающей')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('из мировых музеев')) {
      const index = newTitle.indexOf('из мировых музеев')
      newTitle = insertAtIndex(newTitle, '%', index)
    }

    if (newTitle.includes('Геофизического центра')) {
      const index = newTitle.indexOf('Геофизического центра')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('им.')) {
      const index = newTitle.indexOf('им.')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    if (newTitle.includes('Информации об')) {
      const index = newTitle.indexOf('Информации об')
      newTitle = insertAtIndex(newTitle, '%', index)
    }
    return newTitle.split('%')
  }

  const styledText = TextToSVG.loadSync(
    'node_modules/@fontsource/rubik/files/rubik-all-400-normal.woff'
  )
  const drawTitle = (titleArray, baseY, fontSize) => {
    let svg = ''
    titleArray.forEach((titleString, index) => {
      const svgString = styledText.getPath(titleString, {
        x: 32,
        y: baseY + index * fontSize * 1.33,
        fontSize: fontSize,
        attributes: { fill: 'hsl(0, 0%, 95%)' },
      })
      svg = svg + svgString
    })

    return svg
  }
  const ownerLines = splitTitle(owner)
  const ownerSvg = drawTitle(ownerLines, 64, 28)

  const titleSvg = drawTitle(
    splitTitle(title)  ,
    ownerLines.length === 1 ? 140 : 200,
    40
  )
  const siteSvg = styledText.getPath('datacatalogs.ru', {
    x: 730,
    y: 550,
    fontSize: 48,
    attributes: { fill: 'hsl(0, 0%, 95%)' },
  })

  const logo = fs.readFileSync('./src/images/logo-horizontal.svg')
  const background = fs.readFileSync('./src/images/og_bg.png', {
    encoding: 'base64',
  })
  const b64 = `data:image/png;charset=utf-8;base64,${background}`
  const svg = `
        <svg width="${baseWidth}" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
            <image href="${b64}"/>
            ${ownerSvg}
            ${titleSvg}
            ${siteSvg}
            <g>
                ${logo.toString('utf8')}
            </g>
        </svg>`
  const buffer = Buffer.from(svg)
  const ogImage = await EleventyImage(buffer, {
    widths: [baseWidth],
    formats: ['jpg'],
    outputDir: './public/images/og',
    urlPath: '/images/og/',
  })

  return ogImage.jpeg[0].url
}

module.exports = async (text, callback) => {
  const ogImageUrl = await createOgImage(text)
  callback(null, ogImageUrl)
}
