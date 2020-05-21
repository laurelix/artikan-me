import html from 'choo/html'

export default () =>
  html`
    <h1 id="cam-error">
      ${/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream
        ? 'Jika anda melihat error page ini ketika menggunakan IOS, mohon gunakan web browser Safari'
        : 'Your browser or device doesn’t allow access to the camera. Please try using a modern browser.'}
    </h1>
  `
