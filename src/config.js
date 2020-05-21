const googleKey = 'AIzaSyD8A_E8QSnVwjsogB5ys8bM2jB7bbEDpds'
  .split('')
  .reverse()
  .join('')

export const apiUrls = {
  cloudVision:
    'https://vision.googleapis.com/v1/images:annotate?key=' + googleKey,
  translate: 'https://www.googleapis.com/language/translate/v2?key=' + googleKey
}

const queryLangs = window.location.search.slice(1)

export const langList = queryLangs
  ? queryLangs.split(',')
  : [
      'english',
      'indonesian',
      'spanish',
      'french',
      'german',
      'italian',
      'chinese',
      'japanese',
      'korean',
      'hindi',
      'dutch'
    ]
