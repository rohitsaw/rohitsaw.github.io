'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "cf702eceb2547e7a92e7a82531e87e42",
"/": "cf702eceb2547e7a92e7a82531e87e42",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "9a4dddba415c9ee5265cd5f5d9963a6a",
"manifest.json": "16903bfeca52a82e56468f3d1cf29796",
".git/COMMIT_EDITMSG": "5ca6e0277c23efb17802ca6b4ee88735",
".git/refs/remotes/origin/master": "ad13989f72a3232ff0b1c44566e3fd32",
".git/refs/heads/master": "ad13989f72a3232ff0b1c44566e3fd32",
".git/config": "0ee51b85c329f3332991f2b9aadd64a5",
".git/FETCH_HEAD": "61a2c23f0751f0361c583d553a061203",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/ORIG_HEAD": "7972c89ff0d33240798e1ff48ff9b1e0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "dba041a2856471a3fb288bf37a09e5bb",
".git/objects/26/ef206c63c0e28b7e1c1f67a18903c980c85389": "2d6eaff3a0428b372be311ca73068b97",
".git/objects/47/d3f0469cfc41a115e79ac671f3f353cc11dc00": "cbcdb8b16705f2228d3e82f60c8019de",
".git/objects/d6/c91c85dd44326596f7ef6374a7c22ec2f45ef5": "017707b51a92f2619d42a9a9b4916fcc",
".git/objects/c2/ac4975cc9e32797c09ca6bdd28794ea213f332": "9efb2ab09edd22196829d1b482b6db83",
".git/objects/be/3b71d95ae7e09acc34e48a4d44315414718524": "131980569e30958b04fb2171abdcd208",
".git/objects/fc/ab24abcaa8e907b2a61cc76a7bc8610b36ca5e": "87418e31cbe2a8edd934164059b92a03",
".git/objects/f0/383796c6060f3a2a2301732a155df24c316848": "119e5df9d73bb59e5cc0de7286b8c144",
".git/objects/f0/d98cf295f8474200c31e1364aa5eec5dd21931": "dc74e5760151a11b59be917ce24ee0eb",
".git/objects/10/539692204cba1abe18c65a9c6717ad741af190": "5c8309b5d95aa9d04df12c573d45c6aa",
".git/objects/10/9f4b2f538d1a06c109f5444be4cd58fe9a65c3": "1080ca6189d083c6bbc46e684c792340",
".git/objects/cd/d8eb456d23944b1036e334afe89a72546d4553": "5c3a795dd7c44cd1c228b7745fd3c96f",
".git/objects/e4/a766c6c0b3d27498f86be1264cdd0075f9e3e6": "bd0e57a61b3b8fe2665df87a619c2cdb",
".git/objects/4a/a536dbfc451621319ffa3f8ab7e0529f3b2651": "fb7a2ba00d1a46c3db7e2e6c4d0edfa1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/44/907ba350f256991211d63c9a3200afcdea8052": "8ef8cbdc2e7dbc6c536f73fb094e55fb",
".git/objects/9f/dab510ae4313a8ce1e7e46dd3f2551833f8770": "0c488732fa36c56ee4679687b37be14d",
".git/objects/eb/1fd940dabb663a470ae8176115cb2cceac47ea": "c632f25e3fdbd1e44a26afa64cc8b77a",
".git/objects/24/66a5e0111b65671f6a214e52f4f70d208cee78": "b359a71b6045c2c2caafb5878908b532",
".git/objects/d8/a67d66e54199422e206ed2177c45f8a03cb8cf": "a79a4f4c12f65f7597c5f65a82832fa8",
".git/objects/65/861b91fe7af65372dcdeed4c8d71a8301a3760": "934d64c543d9c19ecb51fa44d35a1d4b",
".git/objects/79/6d7a80b7fb8ef8d74e6fd1a6b44587709442f9": "d8514ca27f2e378f3fd12b87cd4392cb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/16/78a7363d054eacbeba4cb62e48cbedbe4956b8": "c48c4554f81dd033b60c96c53d835ecf",
".git/objects/16/1cd7c64fc3d36a1c8651523904bf4f873207d4": "b0eccaa8705d31abe592c85c5a5b6f45",
".git/objects/8c/561fb771a3543274f86889c50af1f8e7994e09": "319e034ed6da8efce1bf826309198856",
".git/objects/8c/d785f36d236124f111a225436338f2894d3260": "27f597a658a9da6a92d02ba903da068c",
".git/objects/00/babf4a7b36737ed13ace9089b0b50eabf6f551": "219f541ebca6ec7a0c71d5ec3728887a",
".git/objects/00/6c79b884b4cecc051dcdcbf200501a73f174fe": "8ec900ad7c70a55cab06330bb9b224df",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/0a/ecf8a8bd5b638d80531408b72debc99a7ab117": "0ecdfb3097ae9806745dd400e7f38536",
".git/objects/ba/e3bb69cc2dbd5d0b0c37c3e767b2827120c7a1": "ac72514d702f5a929481817399d92969",
".git/objects/94/3e7de7aef7f7fc44add453f573a83e04e77b7c": "7109bc4253f385157c13ef65e98dceb1",
".git/objects/72/957f607a33aebab57dee9093c7f84f525d57b8": "9176869697777ef3e50a99122f433890",
".git/objects/96/5d6b5dad41776ca5c1fe487cd1408262e22337": "cd7334d3912c444ae66a533e93eb37f0",
".git/objects/01/dc93e040b78db0448e9cfe94f288741bcbc269": "20ba5fc53e39556bba8877eb38af3cd0",
".git/objects/21/50da53ff1eb9699477d92d31f85ec3ae3f19cf": "9ff2b1c18d54bf3b59a8da94c09f9f62",
".git/objects/db/829dbcf524998b77d77707542e332b32e43e5d": "68480318305f375846ff28754e956d8a",
".git/objects/f2/28df3f3655ee82efa4761aff3fad900c07b216": "f5a2a324df55a7252d5a8ed2a946b3c1",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/c6/ac1f20f2bf0a5f298e26279f36459f625b4ff3": "01125beb6f76f96378bdc4b88ba65d6b",
".git/objects/c6/cdc4e546a2e1989f2e8e70d79bcc58495b49a8": "93d2ad1d2a3fa63f31f72e7a8d791c91",
".git/objects/40/7e26064269ed64d07b82bc54642c275c7a8459": "d34fef31e1d56936498d65e9fca6fe5a",
".git/objects/82/512333acd056f52dbd4435399e931c5ddab3e4": "71cb56d039d854130163d119c8000923",
".git/objects/18/c9f7c3fbac6db979a7c56e3d7ec010ed359ba1": "207d696f782bb65771c22e436d1c9f00",
".git/objects/6b/4e8758419615bc09a45088f748e025a09de68f": "d7ad9fc4156515c729526ac382636566",
".git/objects/27/83e8e8440b07e78717c02e71bc0f31de2c5bcb": "e581cda5b25ef491ae313ec83fbe68e1",
".git/objects/c9/a43d8180972205cf6d2bfa17a7c518cbb3794f": "3d8aae119dab6a089b2fbdef1627a96e",
".git/objects/9c/3618f9aa908245ac736713d6fe614d3daa0001": "0eeac60d8dbbdf820f67e91a1482be76",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/08/5016806cdab0d09b518466fc5f4976712f9842": "2bb419f4bf23e621301a159efa803eae",
".git/objects/08/dc5c1b1e8bc93f29f263ba4d1ad2349e58802f": "d81a498b8ae10d8546b4ff430cd34255",
".git/objects/32/082fb2d2b9aac07ff92f41c4a0257f7b23388e": "ffd87adb8a2b7a25fbfb094e1d37c4a1",
".git/objects/32/8e591cd5cb73662bae6996cbcb985fcc85c8cb": "6306818549c5929d53e62aa629db7d2f",
".git/objects/cc/b927bc3be7f8454ac627ffb373aa0d929d0eb6": "c467ede99499542825a3fb6112691385",
".git/objects/89/4d8f8cd88388ddca69c6102475d119b73ca145": "c1e0c675f4c19afbc2e826761e8d5cd6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/03/52d87884a762cede5ecd0cab2453af126431f6": "36987e55e2990b9d341fc5b151b4ddeb",
".git/objects/b0/d082f34ac22de509ef20b2a909db1536f719e4": "e4cc037c80cbf1748f401ecea5ef0ec5",
".git/objects/c5/d92cb9e58ef8d1d086059ad236705a992006f3": "1875b2f3ceca382583f0557e2efe1628",
".git/objects/73/68870c93c3eaa2fd196a9020d5c19b0451532e": "30e431b8add6e36cc1a0709192594181",
".git/objects/f1/efca18e5296bce72eb44283a1a47dd1f435c6c": "c4e408b8164b18a573f4d55aaaabe735",
".git/objects/b6/b74f542fca85fe4d61108883664433d35f5e5d": "86a9858794916936ffc0917997e05871",
".git/objects/69/c2f334ec4b02107003d72fc2c988d33368879a": "c5036893e74c2cb785f7b2b2986676cb",
".git/objects/83/6b0f218ea421cf0dc6e47d30fced77a525be70": "1d29bb69cc14cb15e8859a9d3f37767f",
".git/objects/6a/0ff9c96d8e121a316c684a0122e361f8efde3a": "84c1a027d2b4a4921c9dac187e2e36f1",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/31/2018162a6219613a15d681ad7a363ed57edd0a": "6ac9115b6ae54f1e6ee5afc585c6d4c7",
".git/objects/60/b848c31a8edd2eb4a49841b0d8806058dc56aa": "b9a95166ea2b82efed0c07dc07e32594",
".git/objects/71/d0ac4beb71f5ee7fb59527ae41559856e6a9f3": "b3f7eaae1d5d4eea132c8fa5973017c5",
".git/objects/53/a294a5c0ec19088fc994327e25c60ec93a1a11": "4a03d1450b93011c977279b025a5dc38",
".git/objects/53/65b0ed74c0da5ebfd49aac7a079b559fad54c4": "fb3bba23a643e3d3df63271b6485f9ea",
".git/objects/b9/265a2a512e7d563d69f35b71a7177cb4ab0fd3": "c982799e48afaf96d587708d47ddd66d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/b5/5ab92bf4bd6f3e998419c3dc1b707d8b4be933": "e1daec3c63aa03aaf9f10d4189156ea2",
".git/objects/15/45daea16a8dc93721df518a704952dff362a5b": "1e57cc33a57f6aa97c2f787332057174",
".git/objects/9b/7460082694efcfa28ac619e79c851af0e7700d": "2f8e9d201d614d83e05461aec857c06c",
".git/objects/9b/33f31e7a93e0d28c237f48682da67f95d3ed56": "146de8dd3fc3b26269836160dc3d8523",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/d1/d729585ca242fe13bbb5efffe44606003ff348": "e7916a441e81f021d3d01c8497d08db1",
".git/objects/09/2a93a4387a1e98ed64f317e1bf41a0b9a04322": "fa63601d5777ebbe6468e092cec30826",
".git/objects/09/c7239f97a2ed677ea60f063e5068ad0f26b783": "7c407c698186bb0ab0f32e22b0f1fc3c",
".git/objects/46/77331eaeae8cb21aab7abdc10ef9d881f07df1": "810ea24cd5c75798df5b7b24f55a0656",
".git/objects/05/f2ff8a011865ac26836be99a4d101984cb9bdc": "2441e991e8c5347d6ed0ac6be997f42b",
".git/objects/05/ef3425b741304cb89607b00618114515ea69ee": "6a841253c2789dcce65de081b1138c75",
".git/objects/05/7d53fb89d00ad75e8737ec92cda37b4fd90e36": "2b06a4e4e7de7cd48df32840aa3cb658",
".git/objects/3b/7ebc24829f3f37a9c5dd40fdec5150e0a6923b": "83d7296665d442d22757d1e9ad6fa677",
".git/objects/25/9e6b6b38cf43acbad15d716ca6268bf324e13f": "d84014dd6fabec8b78425eb43873343d",
".git/objects/04/55d9b498e369c6c0840a5d4b44b2a01863307b": "c03a6aeff3a6a1f885b675e56d357eba",
".git/objects/04/157570a68969b7ba98805bd0b8ff99bdbb683d": "7d79ce5751f13720fdcc8e7c22fdba69",
".git/objects/4e/d6803d564530b99f56bf2006373f89fb7f4643": "d7a5b750c1dd94a3b8c64f60c3ef61da",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/1c/8899643341c4e47328603e021c6e4b24668b3c": "724d95e213e0c4efee6d14652d9e2e67",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/a3/915449270a6282f0b263d05889c891d9404e58": "556cde3f8b35c3282d8fed67166c4688",
".git/objects/e9/924c762e69057fad91485fd3ae3da85deeca1b": "34dcf52b0d727b9060a17c2fd17479be",
".git/objects/91/da7cc8b77125821ef8232dcfe3e160dc112886": "3ba549d17c011c510ddedac2fb84e498",
".git/objects/91/e7c51ad936d2642bc0e7f955d8db7e959fea71": "cefc488d4012b3b8540d995666d51380",
".git/objects/a6/a173757a3292d3e32fd4f0617a6064947291eb": "83736da5844e9cfde3dd910330e655a6",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/36/5146dc4e510a98fee07bcc116802a27f2ce4c9": "9e20b48b9389ab337c784bda4e9a53e5",
".git/objects/36/a5b93882a1e0ba88d17160fe2340bae3675d43": "eb921a79621d7c815055a839ebc5465c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/c3/00c1aad32fc4bca44487409d9891ca0502cb9e": "9cf7d4edb3ab835cd850b63f5d445e57",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/19/936e48f64ef1a0839c8ec4761ef6558d948b18": "15fce345a59df58dca6536f97c9a7e31",
".git/objects/2e/874c6621be4894e1f431637dd1bfafaaccee4b": "450114cd3dd727ddcd09c1c859c82d88",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/logs/refs/remotes/origin/master": "f266f964326d757393b33fa2f0b40bb6",
".git/logs/refs/heads/master": "bb000e63e254953c069b28bab5f0de30",
".git/logs/HEAD": "bb000e63e254953c069b28bab5f0de30",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/AssetManifest.json": "d30298aa7b20a145bd41385f7b1ea78c",
"assets/NOTICES": "076c2d218603daebdb7df2185e98098f",
"assets/FontManifest.json": "5a6c1ab7a8babfa1a06fc7d33d163b04",
"assets/fonts/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/fonts/Raleway-VariableFont_wght.ttf": "3b5635ac5d39c28200bf3993d90d09c7",
"assets/fonts/LeckerliOne-Regular.ttf": "a5038c85831f8de71480980b1f664651",
"assets/fonts/Raleway-Italic-VariableFont_wght.ttf": "676edc6dcd84e2d64bb6d3f242651d59",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/asset/images/codeforces.jpeg": "641f2013bb450335f4a80a69041a56c2",
"assets/asset/images/udacity.png": "136d2f15c37fc0048f21f7672361d16f",
"assets/asset/images/Rohit.jpg": "046569db7d5e3f7545ad00aebdb323fa",
"assets/asset/images/codechef.jpg": "dc7b8126e6d7ca46440cadcd373ef1ef",
"assets/asset/images/leetcode.png": "0c435ab948b151fd834be55f80a09794",
"assets/asset/images/linkedin.jpeg": "725fbe667d7ff227b5fbfa042a6ecfbe",
"assets/asset/images/github.png": "09f5c6ae0d73877c4fc2595170735ff9",
"assets/asset/images/spoj.jpeg": "f882b6ea0f026f26ecf8b2b99d3df6e0",
"assets/asset/images/hackerrank.png": "36a6830d09df60c8c1fe6992f41aa4d3",
"assets/asset/images/college.png": "6cc48daa112fabf5d87447f191ab4388",
"assets/asset/images/coursera.jpeg": "90d02c140db330af01e6cc8e408e7bd5",
"assets/asset/images/atcoder.png": "d3503455a4183551fc64a1fe4983c607",
"assets/asset/images/hackerearth.jpg": "0c2b5c3bd61ee76221c8c97ed8146c3e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "492aef1aafd88a3214c26981e59a7991"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
