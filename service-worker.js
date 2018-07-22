/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "db8310c8938a32e8d1831e3b6509f1bf"
  },
  {
    "url": "assets/css/0.styles.fa259ba6.css",
    "revision": "dce2a0846ca10ecd31cefde130f2bb74"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ba39672c.js",
    "revision": "2f029dfa2c1e48532289221f56b07887"
  },
  {
    "url": "assets/js/10.9e413ed0.js",
    "revision": "c97bba0a08fe66c731252718ba2800de"
  },
  {
    "url": "assets/js/11.60b769a5.js",
    "revision": "8e92d0d33a53e8084a7afbec598aed8d"
  },
  {
    "url": "assets/js/12.32f41b24.js",
    "revision": "d6fdc6320025e867f011ce8beb1cd3f5"
  },
  {
    "url": "assets/js/13.d7195bc8.js",
    "revision": "462442ddea4195492e9849882f511627"
  },
  {
    "url": "assets/js/14.6fe0ff2f.js",
    "revision": "05b0c4d9601e31aa9192848a97117a69"
  },
  {
    "url": "assets/js/15.ef3bddec.js",
    "revision": "b9f75d051e9582e236d2e5103d10c1ad"
  },
  {
    "url": "assets/js/16.16798a6f.js",
    "revision": "db884379818b7dda92d9949396264b63"
  },
  {
    "url": "assets/js/17.93a00d01.js",
    "revision": "0ff9ebcd524a4bf56edb8e6345177c07"
  },
  {
    "url": "assets/js/18.0f4d911a.js",
    "revision": "c1d4aca1eaeeb46a6a05c25c9f0e6de6"
  },
  {
    "url": "assets/js/19.1c0e857b.js",
    "revision": "3d3a68013b7990237103806add9aba64"
  },
  {
    "url": "assets/js/2.168138cc.js",
    "revision": "55e45e8b67b5de1c691b9b65afff14dd"
  },
  {
    "url": "assets/js/20.9c91a969.js",
    "revision": "b359ea1b0cd67b47f6373fabca82b560"
  },
  {
    "url": "assets/js/21.1ae8d83a.js",
    "revision": "6cef389987fc5aa45065d859164d7288"
  },
  {
    "url": "assets/js/22.11fb39df.js",
    "revision": "ee8cbe3da2cf89b0d53dc9ed03c61985"
  },
  {
    "url": "assets/js/23.a9a3d1c6.js",
    "revision": "329bdfd08102f0c998ad502ee4ab1805"
  },
  {
    "url": "assets/js/24.75d22c48.js",
    "revision": "8b6e4f13e25bc2d307136b8e1deda0b3"
  },
  {
    "url": "assets/js/25.9d4a2af5.js",
    "revision": "97ac473bdb9a4e08bf794733e6463c8d"
  },
  {
    "url": "assets/js/26.61d35736.js",
    "revision": "8878ac7fe3e00711e96d9a47174d2d01"
  },
  {
    "url": "assets/js/27.1ca0f08b.js",
    "revision": "f3d1c6e485baca0dde1e901c61fe25b9"
  },
  {
    "url": "assets/js/28.39d6f974.js",
    "revision": "647b0b03db9a735abb4bf44420b96909"
  },
  {
    "url": "assets/js/29.6b3afc0e.js",
    "revision": "5ea56b075e5cf33eece03f8fa3c6c0a7"
  },
  {
    "url": "assets/js/3.5623a881.js",
    "revision": "677a8d6cbd1443739633df0d1babe62f"
  },
  {
    "url": "assets/js/30.628d2112.js",
    "revision": "2e03d19ee7dd6748e45c1051f08a67ab"
  },
  {
    "url": "assets/js/31.842838b3.js",
    "revision": "3e1cca048ecc5aa3e1342fcb9ae1c825"
  },
  {
    "url": "assets/js/32.d9e09afa.js",
    "revision": "138bee41880b5aa002d01a9233d2ef07"
  },
  {
    "url": "assets/js/4.ba1a1d4b.js",
    "revision": "753a692def5512b2de403920f91013b4"
  },
  {
    "url": "assets/js/5.833a582f.js",
    "revision": "cee7f737984c34c3e0d8c2c6f976ad6f"
  },
  {
    "url": "assets/js/6.845690c4.js",
    "revision": "d629d7a1a155ff37130c4d398d55fa07"
  },
  {
    "url": "assets/js/7.148d669e.js",
    "revision": "c99bd9ec75258e294175579fb7b713f7"
  },
  {
    "url": "assets/js/8.8e19c273.js",
    "revision": "fbd627f8c148c588990f0e5be5a6aa05"
  },
  {
    "url": "assets/js/9.478c5ba5.js",
    "revision": "7d1b65f27bb9e5fc80456ad6e6563480"
  },
  {
    "url": "assets/js/app.1fd6dcd2.js",
    "revision": "5bc9bd43ad1f6a770daa6cd0b0d258fb"
  },
  {
    "url": "en/config/index.html",
    "revision": "f58f386a64e5a80d9624339dd618cc93"
  },
  {
    "url": "en/default-theme-config/index.html",
    "revision": "6681704b99104e730d8b19152f08b34b"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "e6eee8b2426e6b72479843ec80a6e2fc"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "dfd9cc1582a3a21f406accbe2f441a25"
  },
  {
    "url": "en/guide/custom-themes.html",
    "revision": "df7ba7e2705f6fededd9e84ebe8457a2"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "c28dca0f32e8fceb81b16d14f3b2fecc"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "b095948a4f4776a806c8bffe46433aa6"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "fcd49bc5c22a9e16c8c61261d60469e5"
  },
  {
    "url": "en/guide/index.html",
    "revision": "b93bd439b500290903737df0c3610912"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "2fd50ae21e6f41df7769acc594f42e10"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "ff25a2de7eaaa47ccb28cebd433895eb"
  },
  {
    "url": "en/index.html",
    "revision": "4e44f97e64e04f2145b847f99d241aeb"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "debce0e9290e8692b5ee889ddcdd7007"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "3fd43e349b9f7292dca2e3b607b67786"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "751a31a5722267e7e552c603ec20c655"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "b318041629fdfd46e79bf42aaa0c5fd9"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "eca11d73fe35eced7e76a0217aa28702"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "7739c01a1ee7d4189015c04ab5f94d37"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "dc530449a626bb556f468cc7b0adade3"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "ebee075e5c40c70dc96e72e7a521b213"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "7834ea58dfad732bd7e2e80007461db7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "fd0ef3d0a490bd36c4d0b58dea06c4b9"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "510958815094cafe48f783f6f1022e30"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "1a933fc2c9d59eb5043970650d522a10"
  },
  {
    "url": "zh/index.html",
    "revision": "050173298377484d1cd2f491f818fc8b"
  },
  {
    "url": "zh/notebook/auto-submit-to-different-git-platform.html",
    "revision": "6a248a0bc2a095516e78f8e29f9ff87e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
