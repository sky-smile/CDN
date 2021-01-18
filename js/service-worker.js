/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/hexo/public/2019102801-Markdown/index.html","c983a0bec443552a2a8b79b17eb4dc78"],["E:/hexo/public/2019102801-Markdown/markdown01.png","4f7829d59cde12baaeb7388286b6be1c"],["E:/hexo/public/2019102801-Markdown/md-flow.png","cabb861c8ebf0d4d692ede97620d5670"],["E:/hexo/public/2019110101-SafetyNet/index.html","9bc68e7f5f47e241dedaf017dbbdbb65"],["E:/hexo/public/2019110101-SafetyNet/safetynet01.jpg","a2cc085aeec86c9de993f02597452558"],["E:/hexo/public/2019110101-SafetyNet/safetynet02.jpg","77fb1a3436896b49c9fb2776f2af5536"],["E:/hexo/public/2019110101-SafetyNet/safetynet03.jpg","861f80ba02cbaf8ac9a0178674501ab6"],["E:/hexo/public/2019110101-SafetyNet/safetynet04.png","a652cf420145c82a0a19360f401c7b0a"],["E:/hexo/public/2019110101-SafetyNet/safetynet05.jpg","2f20300ee721448f9c2b1a26cd969889"],["E:/hexo/public/2019110101-SafetyNet/safetynet06.jpg","c5bd4bee21a212e6ab6bcd6a34020485"],["E:/hexo/public/2019110501-DataFrame/index.html","bd641d78a73953d26279e005e9ccb39e"],["E:/hexo/public/2019110501-DataFrame/pyspark01.jpg","151f53804d1b9315b26963649aff9a7c"],["E:/hexo/public/2019111101-Hive/hive01.jpg","86dc899ad3ec5da07f7bfdecc05f9008"],["E:/hexo/public/2019111101-Hive/index.html","68d7164a7f10ef3ce49f9fde1fc39e9f"],["E:/hexo/public/2019112801-Terminal/index.html","9a0049254286b736633a47ba30459b14"],["E:/hexo/public/2019112801-Terminal/windowsterminal001.jpg","0650efbc1a8aa67e5ede23ae465204ee"],["E:/hexo/public/2019112801-Terminal/windowsterminal002.jpg","62eedfff472d60e3fc3b559568802700"],["E:/hexo/public/2019112801-Terminal/windowsterminal003.jpg","ce2f3ca9171930940ce9d14fdecfbc5a"],["E:/hexo/public/2019112801-Terminal/windowsterminal004.jpg","51776cd9139884a80bfa8cc6c8a1eeed"],["E:/hexo/public/2019112801-Terminal/windowsterminal005.jpg","099616759dbfc20976d75c84bc8b2cc8"],["E:/hexo/public/2019112901-WSL/index.html","7f8a30546f48482938ce5f2e735ff320"],["E:/hexo/public/2019112901-WSL/wsl000.jpg","a9a12f72cb2700bdd270a0923be41bda"],["E:/hexo/public/2019112901-WSL/wsl001.jpg","177fa674dce4feb2185c82af3f0a2e41"],["E:/hexo/public/2019112901-WSL/wsl003.jpg","ebe72b95eb9cc5808159b4447c664ac0"],["E:/hexo/public/2019112901-WSL/wsl004.jpg","059b3689853678d0a6965b01df1ce7ea"],["E:/hexo/public/2019112901-WSL/wsl005.jpg","442e8440c5a327c2ba3b8444b76f3e8a"],["E:/hexo/public/2019112901-WSL/wsl006.jpg","c47c525e5f9fbc567649ff265246a5fc"],["E:/hexo/public/2019112901-WSL/wsl007.png","74446b07fe4388d3fb36d5ab249f2236"],["E:/hexo/public/2019120801-Windows/Windows01.jpg","270b027bef54697ec44bdbd44d45cfd9"],["E:/hexo/public/2019120801-Windows/index.html","e3eb784d51b1f25f69a190c1b7a9a13c"],["E:/hexo/public/2019120801-Windows/win01.jpg","44e45ea164774ba517036c77b2a63adc"],["E:/hexo/public/2019120901-LxRunOffline/index.html","ada9d1fb8c9ce412a3d0a73f15d9f916"],["E:/hexo/public/2019120901-LxRunOffline/wsl007.png","74446b07fe4388d3fb36d5ab249f2236"],["E:/hexo/public/2019121201-docker/Docker_logo.png","0c1d198acd0580ef908a04c4be549567"],["E:/hexo/public/2019121201-docker/docker01.png","30ef08d712e88b1733e71aa08db24c72"],["E:/hexo/public/2019121201-docker/index.html","8b32102e728b8fc2be5a9f0100449de9"],["E:/hexo/public/2019121202-docker/Docker_logo.png","0c1d198acd0580ef908a04c4be549567"],["E:/hexo/public/2019121202-docker/index.html","7f3891c5b809284aa2b2cc63c7370615"],["E:/hexo/public/2019121301-openwrt/01.png","301f7a9328ccb6bab5ce3ec4a4dfe0f3"],["E:/hexo/public/2019121301-openwrt/02.png","9a1a7779d390cd7be8039427e113d1e8"],["E:/hexo/public/2019121301-openwrt/03.png","a5c49b0128e36a3d090145e9544fc04e"],["E:/hexo/public/2019121301-openwrt/04.png","13e2a4180cb2331ebc3d76e80c16cb97"],["E:/hexo/public/2019121301-openwrt/index.html","62501d2201d75ac8280ebfcbca5d3a7c"],["E:/hexo/public/2019121301-openwrt/linux.jpg","b672ecda0c2f4751e7b6558dd3290dc7"],["E:/hexo/public/2019121601-UbuntuTime/index.html","0b7b0cbb055fcada3db7a0e6a4b9c0d6"],["E:/hexo/public/2019121601-UbuntuTime/time.jpg","5ae0458bbd62dac743a71898cc41d465"],["E:/hexo/public/2019121601-UbuntuTime/ubuntu.jpg","12d9fcc6116992e1f4f6e28ff67eea42"],["E:/hexo/public/2019122601-BackupSoftware/01.jpg","fc009ce288276bc352a5d750918f160c"],["E:/hexo/public/2019122601-BackupSoftware/index.html","1ebef872ce64d08f4d1767958b650d6a"],["E:/hexo/public/2020010801-python/index.html","916ae037a7b1405484b2d2ed730b5069"],["E:/hexo/public/2020010801-python/python01.png","5abfd7664d2987a7c881d1ec7a27b70d"],["E:/hexo/public/2020010801-python/python02.jpg","ca4ccc74d30461c5aa0b90ecd2cffc19"],["E:/hexo/public/2021010401-pythonCopy/index.html","0538cef94098144a527ef24041d9e282"],["E:/hexo/public/2021010401-pythonCopy/pythonCopy01.png","d4574b3303bb1b70fdd45a9948f22e56"],["E:/hexo/public/2021010401-pythonCopy/pythonCopy02.png","8b8f6a2a86618d7b8fe783664a29fd9b"],["E:/hexo/public/2021010401-pythonCopy/pythonCopy03.png","e6836ac995ebd5616fa937145464d1fc"],["E:/hexo/public/404.html","dc02622bdeab41ee74e4a22681dc327e"],["E:/hexo/public/README/image_001.jpg","325376e80832f8a1f7b27e4a92332595"],["E:/hexo/public/about/backiee7705.jpg","765d3b05f5933a3c415b3ba2b841b370"],["E:/hexo/public/about/index.html","d47256c81a1ee5b0c2b2b1018775a970"],["E:/hexo/public/archives/2019/10/index.html","48be3dcfc2834f947b2a45e989f220ce"],["E:/hexo/public/archives/2019/11/index.html","fe6560193be06295f56e39d99e08e4c7"],["E:/hexo/public/archives/2019/12/index.html","58586cbb5f287c6d7199ea47aa8b2888"],["E:/hexo/public/archives/2019/index.html","21abd1c2fab65e87493ca29ccc186259"],["E:/hexo/public/archives/2020/01/index.html","fa4f5429683f1a0dcd09792e72fe7f4f"],["E:/hexo/public/archives/2020/index.html","8c47a6e8cac2faab988f9653f613916d"],["E:/hexo/public/archives/2021/01/index.html","648dc418b54ac122ed89fd80b6226c22"],["E:/hexo/public/archives/2021/index.html","1128540972985698211590b106910c0a"],["E:/hexo/public/archives/index.html","d206159a188b80f6f6f0535f31a3bdf2"],["E:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/hexo/public/categories/Android/index.html","27c0117e106157c46b87538ec270f017"],["E:/hexo/public/categories/Docker/index.html","cc5f4b4383ade69a10d65ea4aa2c0215"],["E:/hexo/public/categories/Hive/index.html","f05d8008062a0d9164df887b86bdf554"],["E:/hexo/public/categories/Linux/index.html","28207be5620f84c822235bd3c440dd77"],["E:/hexo/public/categories/Spark/index.html","56362e70e7e531ad09108542dcdbfb21"],["E:/hexo/public/categories/WSL/index.html","d86332c857b63ad56930551e87c0f4f2"],["E:/hexo/public/categories/Windows/index.html","41bbafc9954dcd2913e3afef42ecb45f"],["E:/hexo/public/categories/index.html","e947a0e21aea2e7ef66d4d74125e2d79"],["E:/hexo/public/categories/other/index.html","327ff6861bfb07e227f7dc4bfeff6b91"],["E:/hexo/public/categories/python/index.html","f32b7dfc919351690b15a168d6710b9c"],["E:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["E:/hexo/public/css/index.css","9a6d9243f2f00de17d22ec6490e14a91"],["E:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/hexo/public/css/zhuti.css","fdb8fad5721d4bfdf3e222bb70882b55"],["E:/hexo/public/gallery/index.html","922a6447aa38496e06a2d70433ddac1f"],["E:/hexo/public/img/08.jpg","1f0fe815cfe601dc968b833c25a9c1d7"],["E:/hexo/public/img/1173406.jpg","d625f5347a70130225c344a07be77e6c"],["E:/hexo/public/img/12.jpg","358ed7c2b98def2e214e56b5c83a929a"],["E:/hexo/public/img/19.jpg","20b7065a2e49cdf205df6b72dc7c9fbc"],["E:/hexo/public/img/231005.jpg","7639510fef86991cc18b2cd19cc88aa4"],["E:/hexo/public/img/27.jpg","df764ccecd700e73658703887405a000"],["E:/hexo/public/img/36.jpg","a537b3e6b10dcbe54639d8a405662cdd"],["E:/hexo/public/img/39.jpg","7015ef4f4d47c7a1ac2d34cc94f501c4"],["E:/hexo/public/img/398105.jpg","1ce7bc756102a766b9ea0e059e34e440"],["E:/hexo/public/img/404.jpg","b408d58537dd4b632f2d7cdfb9edd011"],["E:/hexo/public/img/441017.jpg","ea18e21cee9bab2092e8ade2e1b7e142"],["E:/hexo/public/img/499219.jpg","2475146236b1f09996450f5591029547"],["E:/hexo/public/img/860.jpg","20543c5aa1d5d80611f0b8eceff68645"],["E:/hexo/public/img/877.jpg","8d1bcd496d782262ac5e29d3c988db5f"],["E:/hexo/public/img/902.jpg","503a17a2c6132eda7a83e0891b505e10"],["E:/hexo/public/img/951.jpg","61facc5a7d0eee95bc60a6c20489d664"],["E:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/hexo/public/img/avatar.png","3625d1f72c79e9e13dbf09c6ca84c895"],["E:/hexo/public/img/avatar009.jpg","1ab9c222d93a2f2ef63772b7b45a7915"],["E:/hexo/public/img/backiee-9212.jpg","04e73564b904e8dbfe2dfb46224987a9"],["E:/hexo/public/img/backiee121264.jpg","de4500e9c05a52aae713c1d0492159e8"],["E:/hexo/public/img/backiee126578.jpg","95e52ea558e159039b916e505f32d390"],["E:/hexo/public/img/comment_bg.png","c908202d45715a49bdb83fadca23b26c"],["E:/hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/hexo/public/img/icp.png","b73f7b68e7bfdff0d61dd5a042679e7a"],["E:/hexo/public/img/image001.png","c1efe06d204db035e7826a85ca2b9d8b"],["E:/hexo/public/img/image_306.jpg","68d11e17f65c3544cfc2a01d7c58907e"],["E:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/hexo/public/img/tx002.jpg","9b2df93f7ec94e000e2042c628ded47f"],["E:/hexo/public/index.html","6f6531a89bc1202dc1d4a1cbdbfb701e"],["E:/hexo/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["E:/hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/hexo/public/js/zhuti.js","d41d8cd98f00b204e9800998ecf8427e"],["E:/hexo/public/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["E:/hexo/public/link/index.html","8c8cecdb3823aec00e8843c640a99b1a"],["E:/hexo/public/movies/index.html","52456ccbec1a9eaa79a921a6e5175e6c"],["E:/hexo/public/music/index.html","2448ef7f0cea8bb040690d0ebe99ab38"],["E:/hexo/public/page/2/index.html","01e1ce6d7e3df327997398b7b719d2bd"],["E:/hexo/public/resume/index.html","95a655846b57f5156a82f56eabd40c83"],["E:/hexo/public/tags/Android/index.html","c8df562067b40df79f4c2ae7a559baa4"],["E:/hexo/public/tags/Docker/index.html","8198e7bbf9533da2cfe7f00b5fa9b809"],["E:/hexo/public/tags/Hive/index.html","39bba893573623c630e6219946672dc7"],["E:/hexo/public/tags/Linux/index.html","cd84d239029c2c8c58e8c62588d5b9db"],["E:/hexo/public/tags/Markdown/index.html","7eefd8d12aae1c0eef13da908092252f"],["E:/hexo/public/tags/PySpark/index.html","181376ecfb0412ef85d390358e985f56"],["E:/hexo/public/tags/Python/index.html","4f67e420a6efc204b1d8ef005f5f6295"],["E:/hexo/public/tags/Terminal/index.html","77be85157856713485d2a512a24e33a9"],["E:/hexo/public/tags/Ubuntu/index.html","77d874e441408fa11f72c07edb7a7189"],["E:/hexo/public/tags/WSL/index.html","d2a8a4d304926189ae2a6c09500a4507"],["E:/hexo/public/tags/Windows/index.html","3a8ffe7ee2dfc4d54a33b9f2e3a2ec8f"],["E:/hexo/public/tags/index.html","288cca3a027de84c275e1c1d27b68dd8"],["E:/hexo/public/tags/破解/index.html","641e1a83107158806a28542fdde8495a"],["E:/hexo/public/tags/软件/index.html","f76a09cca933ec2cffda8adb309f3726"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







