if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const o=e=>s(e,n),d={module:{uri:n},exports:r,require:o};a[n]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1170dbfb698313be2544317159a61466"},{url:"/_next/static/L_O9xOqVh70ZpTyFX8V_O/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/_next/static/L_O9xOqVh70ZpTyFX8V_O/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/229-ba6b86f5f6b65230.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/263-8a6127f5afd509a4.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/472-1f5ac1b508124fbf.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/548-ede5a2f7ea4bc68a.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/615-793f0ec4f26cbd7a.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/630-6c4fe0092505c82b.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/697-85aa6bcda8c1cc56.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/752-8758933fecfcd06d.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/770-b3810c3f1e6d12e2.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/799-af93b434c284205c.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/874-2a52c7a80ba22755.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/895-5be1bf14b30d0ab6.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/919-42f7bca7ce61bfd3.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/app/(route)/attendancy/list/%5Bid%5D/page-d10002352317ce13.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/app/(route)/attendancy/list/page-db9274afa9e33026.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/app/(route)/attendancy/roaster-management/%5Bid%5D/page-32bb0e5de3972958.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/app/(route)/attendancy/settings/page-8f4fe15b8c61b2bc.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/app/(route)/auth/register/page-656a4d79b134e2a2.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/app/layout-fc96d6f25941e76c.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/app/not-found-8dbafdd2baef7eb4.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/app/page-488ae15f0e725b5e.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/fd9d1056-24ce7b61cc881710.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/main-afafa68eb0dac3b2.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/main-app-d0e60c4391c1e502.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-c0ad27d3c22939f7.js",revision:"L_O9xOqVh70ZpTyFX8V_O"},{url:"/_next/static/css/00d3aa610b96f3d0.css",revision:"00d3aa610b96f3d0"},{url:"/_next/static/media/checked-circle.5b9f8eed.svg",revision:"f475f0675cf8daed3d4edc74c5d93f07"},{url:"/_next/static/media/checked-square-lined.4f75729c.svg",revision:"14bb61def5de0a1086cd05ca072cf5a0"},{url:"/_next/static/media/checked-square.bff36be7.svg",revision:"44574d4c01840275b7028394a2c696a5"},{url:"/_next/static/media/unchecked-circle.ba694dfa.svg",revision:"2aecd404eea21067c32dc09bb5dd0581"},{url:"/_next/static/media/unchecked-square.4cc2da76.svg",revision:"a91de0c57c3654537c3284276fd6e863"},{url:"/images/app-icon/footer-company.png",revision:"0540553c08da5545429ca820274b6ae1"},{url:"/images/app-icon/header-icon.svg",revision:"c7024a2d6ab81249a3913390a24dcb54"},{url:"/images/app-icon/header-title.svg",revision:"ab0c7aa188c40a2c79e325bb341072a3"},{url:"/images/app-icon/icon-128x128.png",revision:"f40e000547816b5d9ca1fe8117ac7132"},{url:"/images/app-icon/icon-144x144.png",revision:"1d7d7ac0c3b3ea38deb04b96ea90d475"},{url:"/images/app-icon/icon-152x152.png",revision:"69bdede77d74db40137d3cb88f8fa54b"},{url:"/images/app-icon/icon-192x192.png",revision:"2c9e68d10619d2031b1581619f1389a8"},{url:"/images/app-icon/icon-256x256.png",revision:"ceafeed4297ac6861f70bb768fbe1568"},{url:"/images/app-icon/icon-384x384.png",revision:"036eef030944fd51ed3d60cd9352c9a3"},{url:"/images/app-icon/icon-48x48.png",revision:"d422551d2bbd490ed00af712afa8229d"},{url:"/images/app-icon/icon-512x512.png",revision:"94b52b41ee6028b55e96c7f801015b51"},{url:"/images/app-icon/icon-72x72.png",revision:"abe874ee06b77bfcf6e5170d186cb7a9"},{url:"/images/app-icon/icon-96x96.png",revision:"4e8b46149d1021cf8e70bc5077877ca0"},{url:"/images/avatars/avatar-user.svg",revision:"5d3569877984aca013cf419d7f2aa48e"},{url:"/images/avatars/default.png",revision:"e5a49ed8cdf7c75647abd64b2e133186"},{url:"/images/avatars/mong.png",revision:"2b20ae702856964cbad45555cde9cd48"},{url:"/images/avatars/pepe.png",revision:"48d644909b7d49e807a8e044b4421728"},{url:"/images/avatars/pico.png",revision:"b16a75244be89b70fd8ad8d589cf50d3"},{url:"/images/avatars/rabong.png",revision:"6f541911ba354d220f9ac7958f178a78"},{url:"/images/avatars/shasha.png",revision:"abc6f51c0befe9075787d710fec73615"},{url:"/images/avatars/sun.png",revision:"68e245d70d108258f50658859cedbb76"},{url:"/images/avatars/sunny.png",revision:"d1ad435750c010eacd6ce15b1c3947cf"},{url:"/images/class/lion.svg",revision:"a598fdb124a235335af33380396744bd"},{url:"/images/error/error.svg",revision:"6365e5ec4b067269363458b7ccf72561"},{url:"/images/event/detail1.png",revision:"0f2bee13b18a2bc9148b9b0e0720eaa7"},{url:"/images/event/event1.png",revision:"10f585d6fb2428bff78225e355c7f41b"},{url:"/images/event/event2.png",revision:"9c07b4582467b9a7f18f22907337b50b"},{url:"/images/event/event3.png",revision:"5e85742eb94fecbc80543a6678568126"},{url:"/images/gallery/gallery1.png",revision:"9cce62b20459feaf250ec6b2a2f621be"},{url:"/images/gallery/gallery2.png",revision:"0d6727562cc6c3d3dcea77402f42dd2b"},{url:"/images/gallery/gallery3.png",revision:"80e0a12336d103e517d7128fb3622ff5"},{url:"/images/gallery/gallery4.png",revision:"be967fd99d966aff0751810dd339d558"},{url:"/images/gallery/gallery5.png",revision:"f3a25678fe8d66c6440fb19c2eaf1c85"},{url:"/images/gallery/gallery6.png",revision:"5b799064ee5d004f98569dcd13a94354"},{url:"/images/greeting/greeting.svg",revision:"7322de164bf5a665c0e66f42719f67c6"},{url:"/images/home/appstore-qr.png",revision:"3d6d3609d7a88e6fa8fd844080761cb4"},{url:"/images/home/lion-pencil-lg.png",revision:"03eeb558a129f76883673a9d72462ded"},{url:"/images/home/lion-tablet-lg.png",revision:"db0b64713e2f0f48bedbcf8b6ad2556b"},{url:"/images/home/playstore-qr.png",revision:"3d6d3609d7a88e6fa8fd844080761cb4"},{url:"/images/home/section-3-0.png",revision:"2f7d677fec8b6346b79aea76ca4baf3e"},{url:"/images/home/section-3-1.png",revision:"59582d4d32cb403d56b2b85309d09205"},{url:"/images/home/section-3-2.png",revision:"6f318cedc99a13d9224d725a14368b0b"},{url:"/images/home/section-3-3.png",revision:"b4f1df4effdfd0d665bbc69d998ecb0b"},{url:"/images/home/section-3-4.png",revision:"658b3d94494682ed2e9a9f380e0ee9df"},{url:"/images/home/section-4-bottom.png",revision:"b5181d261904dceddca8c854ff0794c9"},{url:"/images/icons/arrow-up.svg",revision:"0c7601483535d3d035e68dacec9a42d8"},{url:"/images/icons/arrow/keyboard-arrow-left-black.svg",revision:"8f4ca21da38e005e4027ab6188e1e155"},{url:"/images/icons/arrow/keyboard-arrow-left.svg",revision:"a5b42d3731af5f62cb7a9fccd85a104e"},{url:"/images/icons/arrow/keyboard-arrow-right-black.svg",revision:"ead18d5e0be11f4e2668a4ef9637cb08"},{url:"/images/icons/arrow/keyboard-arrow-right.svg",revision:"4839569fb1e924048d0db516b53429d3"},{url:"/images/icons/calendar-month.svg",revision:"45fc531569314aabbee71c314913affb"},{url:"/images/icons/checkbox/checked-circle.svg",revision:"f475f0675cf8daed3d4edc74c5d93f07"},{url:"/images/icons/checkbox/checked-square-lined.svg",revision:"14bb61def5de0a1086cd05ca072cf5a0"},{url:"/images/icons/checkbox/checked-square.svg",revision:"44574d4c01840275b7028394a2c696a5"},{url:"/images/icons/checkbox/disable-circle.svg",revision:"3b494277e6cf762ea5c21f9143065eaa"},{url:"/images/icons/checkbox/disable-square.svg",revision:"2618439d79ba46fda54ec09ff1c6afae"},{url:"/images/icons/checkbox/unchecked-circle.svg",revision:"2aecd404eea21067c32dc09bb5dd0581"},{url:"/images/icons/checkbox/unchecked-square.svg",revision:"a91de0c57c3654537c3284276fd6e863"},{url:"/images/icons/close.svg",revision:"d04e01258ede1ee891de4be809ef8594"},{url:"/images/icons/logo-android-gray.svg",revision:"e48b7653a468a9c52151ebff24165f9d"},{url:"/images/icons/logo-android.png",revision:"1ead987f764fece72e66ad3298c3dcd7"},{url:"/images/icons/logo-apple-gray.svg",revision:"1e751e0a8d7287ac5ee866dd5a734e73"},{url:"/images/icons/logo-apple.png",revision:"caef78df875c1ba510d9d8059d283dec"},{url:"/images/icons/logo-blog-gray.svg",revision:"fd09b4871bd4ec04a2d27af18b950888"},{url:"/images/icons/logo-instagram-gray.svg",revision:"9661e5104a4b80268e4b65e16501c017"},{url:"/images/icons/logo-kakao-gray.svg",revision:"2f03c330d4d85806bf06fcbb52eb1acd"},{url:"/images/icons/logo-youtube-gray.svg",revision:"3fbb9e05fa806cae5c297c93ea6084a9"},{url:"/images/icons/logout.svg",revision:"ea36e55bc2b87e721a2410b4f1de255d"},{url:"/images/icons/menu.svg",revision:"54df6f386effdde31510fe045c4749f7"},{url:"/images/icons/more-horiz.svg",revision:"223f12b3bf98f1bab0b50a12acd19064"},{url:"/images/icons/pencil.svg",revision:"a38f627a813de9b989eb8ae1da2d8082"},{url:"/images/icons/profile-plus.svg",revision:"3902e7d55a3ec76f58b6aa8a2060eff6"},{url:"/images/icons/round-arrow-left.svg",revision:"d62bf7ab574d3466d23ffb6de9a2bff5"},{url:"/images/icons/search.svg",revision:"14a2b7a3618a6d383d23c10b46a3430f"},{url:"/images/icons/sns/logo-google.svg",revision:"5b2d3ff850de116efbac5c24756e123f"},{url:"/images/icons/sns/logo-kakao.svg",revision:"4cbc6b7f787e7bbe18685c53dedf7002"},{url:"/images/icons/sns/logo-naver.svg",revision:"868af8bab7e9d291f2550ba1a3775afb"},{url:"/images/icons/storage/change-user-img.svg",revision:"8e24e1a986e6d243148beb3cc1ce1479"},{url:"/images/icons/storage/delete-img.svg",revision:"8a1c66011c8eb6669ab4ec35bf6aabe4"},{url:"/images/icons/storage/edit-pencil.svg",revision:"99a54fb2eeea0aaa21a3b1a32e10f837"},{url:"/images/icons/storage/share-kakao.svg",revision:"b306d923769a47d71ccf650051b2cc6f"},{url:"/images/icons/swiper-next-arrow.svg",revision:"3e03278db292ff77c9931a95de54d131"},{url:"/images/icons/swiper-prev-arrow.svg",revision:"6a30963797e3960c74c4c2d80a89f7c5"},{url:"/images/pattern/pattern.png",revision:"ad8e3d72c219ae85da2717c6c8938fc9"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
