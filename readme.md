## Harston-preact - [harstonandco](http://subsequent-home.surge.sh/profile)

Front-end application hosted on http at present.  

- Preact
- Bootstrap theme
- Wordpress rest api 4.9.8
- Sass

## Word Press Api  -[harston-api](http://harston-api.esy.es/wp-admin/index.php)

  This website is using word press rest api.  To edit please go to the admin dashboard and enter the details you wish to edit. Each page is editable. You can also add/edit posts, these are separated into news, reviews, and team to allow more flexibility.  Its important you add the category of post you wish to add as this will determine which fields have been allocated to the category. 
   Images are also editable but you must keep the sizes in-order for them to look right within the theme. The word press admin area allows you to do this but can be a little unresponsive when it comes to cropping but it does work. 
  The style and layout of the site is separated from the content, and will need to be coded in-order to change. 
 
## To Do

- Home 
  - optimise image loading
  - add scroll to
  - home drop down for submenus
  - slide show
     - make image loop through rather than go back to the beginning.
     - dots must also update position.
     - stop auto slide when, selecting next or prev. 
     - make slide info responsive

- News 
  - Individual post page.
  - Remove search.
  - Hookup categories and tags
  - Change magnifine glass OR add zoom

- Profile
  - add loader to page
  - team services needs to be hooked up to api.

- Contact us 
   - add email svg from old site.


## Install

```sh
git clone https://github.com/lukeed/preact-starter
cd preact-starter
npm install
npm run build
npm start
```

> :exclamation: **Pro Tip:** Use [Yarn](https://yarnpkg.com/) to install dependencies 3x faster than NPM!

## Features

* Offline Caching (via `serviceWorker`)
* SASS & Autoprefixer
* Asset Versioning (aka "cache-busting")
* ES2015 (ES6) and ES2016 (ES7) support
* Hot Module Replacement (HMR) for all files
* Preact's [Developer Tools](#preact-developer-tools)
* [Lighthouse](https://github.com/GoogleChrome/lighthouse) certified

  ![lightouse](src/static/img/lighthouse.jpg)

## Development

### Commands

Any of the following commands can (and should :wink:) be run from the command line.

> If using [Yarn](https://yarnpkg.com/), all instances of `npm` can be replaced with `yarn`. :ok_hand:

#### build

```
$ npm run build
```

Compiles all files. Output is sent to the `dist` directory.

#### start

```
$ npm start
```

Runs your application (from the `dist` directory) in the browser.

#### watch

```
$ npm run watch
```

Like [`start`](#start), but will auto-compile & auto-reload the server after any file changes within the `src` directory.

### Preact Developer Tools

You can inspect and modify the state of your Preact UI components at runtime using the [React Developer Tools](https://github.com/facebook/react-devtools) browser extension.

1. Install the [React Developer Tools](https://github.com/facebook/react-devtools) extension
2. [Import the `preact/devtools`](src/index.js#L23) module in your app
3. Reload and go to the 'React' tab in the browser's development tools

## License

MIT © [Luke Edwards](https://lukeed.com)
# Harston-preact
