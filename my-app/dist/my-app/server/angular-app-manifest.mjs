
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/CODE-main"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/sac-blog"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/contact"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/policy"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/privacy"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/term"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/ship"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/ship-method"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/how-to-buy"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/aboutus"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/about-us"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/products"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/products/*"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/login"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/signup"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/forgot-password"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/reset-password"
  },
  {
    "renderMode": 0,
    "redirectTo": "/CODE-main/account/profile",
    "route": "/CODE-main/account"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/account/profile"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/account/address"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/account/orders"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/account/wishlist"
  },
  {
    "renderMode": 0,
    "redirectTo": "/CODE-main/account/profile",
    "route": "/CODE-main/account/**"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/CODE-main/admin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/CODE-main/admin/mainpage"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/CODE-main/admin/orders"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/CODE-main/admin/users"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/CODE-main/admin/products"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/CODE-main/admin/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RR3KSJIO.js"
    ],
    "route": "/CODE-main/admin/feedbacks"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/product/*"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/collections/*"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/blogs"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/blogs/*"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/blog-catalog"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/letters"
  },
  {
    "renderMode": 0,
    "route": "/CODE-main/blog/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9641, hash: '375e8920f02fd4c3430ea94814e300609ec926eec2e389043a810eba03d0bcda', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9989, hash: '9cfb8668116b17299ee33d8eccf8a7a052a5135619b48a15f2003dec3def2647', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3SEBDQFR.css': {size: 40, hash: 'RzXWn47xU0o', text: () => import('./assets-chunks/styles-3SEBDQFR_css.mjs').then(m => m.default)}
  },
};
