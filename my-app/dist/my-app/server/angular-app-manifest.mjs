
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/sac-blog"
  },
  {
    "renderMode": 0,
    "route": "/contact"
  },
  {
    "renderMode": 0,
    "route": "/policy"
  },
  {
    "renderMode": 0,
    "route": "/privacy"
  },
  {
    "renderMode": 0,
    "route": "/term"
  },
  {
    "renderMode": 0,
    "route": "/ship"
  },
  {
    "renderMode": 0,
    "route": "/ship-method"
  },
  {
    "renderMode": 0,
    "route": "/how-to-buy"
  },
  {
    "renderMode": 0,
    "route": "/aboutus"
  },
  {
    "renderMode": 0,
    "route": "/about-us"
  },
  {
    "renderMode": 0,
    "route": "/products"
  },
  {
    "renderMode": 0,
    "route": "/products/*"
  },
  {
    "renderMode": 0,
    "route": "/login"
  },
  {
    "renderMode": 0,
    "route": "/signup"
  },
  {
    "renderMode": 0,
    "route": "/forgot-password"
  },
  {
    "renderMode": 0,
    "route": "/reset-password"
  },
  {
    "renderMode": 0,
    "redirectTo": "/account/profile",
    "route": "/account"
  },
  {
    "renderMode": 0,
    "route": "/account/profile"
  },
  {
    "renderMode": 0,
    "route": "/account/address"
  },
  {
    "renderMode": 0,
    "route": "/account/orders"
  },
  {
    "renderMode": 0,
    "route": "/account/wishlist"
  },
  {
    "renderMode": 0,
    "redirectTo": "/account/profile",
    "route": "/account/**"
  },
  {
    "renderMode": 0,
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/admin/mainpage"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/admin/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/admin/users"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/admin/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/admin/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/admin/feedbacks"
  },
  {
    "renderMode": 0,
    "route": "/product/*"
  },
  {
    "renderMode": 0,
    "route": "/collections/*"
  },
  {
    "renderMode": 0,
    "route": "/blogs"
  },
  {
    "renderMode": 0,
    "route": "/blogs/*"
  },
  {
    "renderMode": 0,
    "route": "/blog-catalog"
  },
  {
    "renderMode": 0,
    "route": "/letters"
  },
  {
    "renderMode": 0,
    "route": "/blog/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9621, hash: '7467e93e361267a92e495a8f3c0b2b673bc5b874797e1bbd605c6ca00f42d604', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9969, hash: '1cbf9af4ba3102282bbaf839402e7979ea19ee283f3a74c21dbdeb9903f286f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3SEBDQFR.css': {size: 40, hash: 'RzXWn47xU0o', text: () => import('./assets-chunks/styles-3SEBDQFR_css.mjs').then(m => m.default)}
  },
};
