module.exports = {
  "vendor": [],
  "scripts": {},
  "styles": {
    "prefix": ["> 1%", "last 2 versions", "IE >= 9"],
    "include": []
  },
  "metalsmith": {
    "metadata": {
      "site": {
        "title": "Baotnq điều chỉnh",
        "description": "It's about saying 'Xin Chào' to the World.",
        "generator": "EasyWeb Metalsmith",
        "ref-domain": "http://handy.themes.zone",
        "author": 'Parimal Satyal',
        "keywords": 'Neustadt, parimalsatyal, Parimal Satyal',
      }
    },
    "config": {
      "contentRoot": "./content",
      "assetRoot": "./sources",
      "scriptRoot": "./scripts",
      "styleRoot": "./styles",
      "layoutRoot": "./layouts",
      "destRoot": "./build"
    },
    "plugins": {
      "metalsmith-drafts": {},
      "metalsmith-markdown": {
        "smartypants": true,
        "smartLists": true,
        "gfm": true,
        "tables": true
      },
      'metalsmith-matters':     {
           'delims':  ['---json', '---'],
           'options': {
               'lang': 'json'
           }
       },
      "metalsmith-excerpts": {},
      "metalsmith-permalinks": {
        "pattern": ":collection/:title"
      },
      "metalsmith-collections": {
        "blog": {
          "sortBy": "date",
          "reverse": true
        }
      },
      "metalsmith-pagination": {
        "collections.blog": {
          "perPage": 6,
          "layout": "blog.html",
          "first": "blog/index.html",
          "noPageOne": true,
          "path": "blog/:num/index.html"
        }
      },
      "metalsmith-layouts": {
        "engine": "handlebars",
        "directory": "./layouts",
        "partials": "./layouts/partials"
      },
      "metalsmith-assets": {
        "source": "./sources",
        "destination": "./"
      },
      "metalsmith-html-minifier": {
        "_metalsmith_if": "production",
        "removeAttributeQuotes": false,
        "keepClosingSlash": true
      }
    }
  }
}
