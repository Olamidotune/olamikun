'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6d1ef7c3fc015f27eae53a3cdf868807",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "9c87708d2559643fa08f20adb6ed40d7",
"/": "9c87708d2559643fa08f20adb6ed40d7",
"main.dart.js": "acf07e843d45859f6fe0bd4980bb556c",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/ORIG_HEAD": "c0a5fe7eaa6f64db7eef933466c0105f",
".git/config": "d7f98902e317ea147adc09b2a9cf045b",
".git/objects/0d/932f8282c0836984de87578ff551de127f8564": "131f4fdc220a4c52a39f9683427a1538",
".git/objects/95/ccc0aa778769eeae97b9f06e404650f1c5318d": "2053efc0484d60787216b8cbda848c9c",
".git/objects/59/6adb96791c1336beab0266cae999c130ca1f32": "34db41a1f53073dcc0eba743ef3ff9a1",
".git/objects/59/22053a8368da4716a1d2d3ac2558df167e4820": "051769e6cf8085acda8cc91012c86715",
".git/objects/0c/72a2370540614597bbe13296f575c5263499c6": "87289f59fad400c06546f52c658812c9",
".git/objects/0c/ce701f10016cb4a18d5097a06b06f6fb25b974": "90087df68de4bea0d262e70bcb638727",
".git/objects/50/50de9a1189b910c1bff3bae5b5ebf104c5d34a": "cc43ea61fbc981d9173379d675a926c6",
".git/objects/3b/e50657598f3d90b710249b12a99b69e4528a58": "c693058d11b6515e5189ef30bfc337b8",
".git/objects/03/c19c48a5dbcd1c0d2e1f0e25cba349502be20f": "8c800b01d6015548826752186bd2f20b",
".git/objects/9b/a0147c060629379d590978519f9b65432ef633": "f852d5a41bb85b8a4fecc8655ecfaade",
".git/objects/9e/cdf688dc8b6931f5123505b08d9965747ddfbb": "5ced96035d6c424e4fcd1c9133df4e31",
".git/objects/04/b67c5599604467b34a64263ef3b471e01fc516": "9c332b33f25f60c3b1f65a6b733fd91e",
".git/objects/04/d31579ee1c5ce17fe45c03f7e7d81b9c110600": "968ceef752d3910171d1031116de424e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/51/c777c313e58762482cac230f569ee4cdbd659a": "50fed78100f6c3f150a68c26f10adf4f",
".git/objects/51/409eedf4211c1c2494221134a21012b807c5bb": "87fa547b0442b9e202d2716b96418f00",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/34/0fdf9ac4589b67f30c61b52f23e9659d64116b": "1eaa23c1eff00ed40e91b2a096a5e95e",
".git/objects/9c/a25a44697e60e7242eecb648cb8dca8df25631": "5c2422f8a5724287ea2c3d537fe9c359",
".git/objects/9c/ea9b9975173d42b0637db4815331d0f42c4d0f": "b930559d156fea064ee487aee5f93d9d",
".git/objects/a3/672851074c6b3d2eb667a0d6a0da8c517ee5bf": "49f0301baec6e6d6b12357c72fe93230",
".git/objects/b2/8efb8cece6322a7d3b6283a4dc3b3154da0172": "aa7a30d6f6d90a73882056f1e48579d9",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/45228f6d0f38032a8ab19c36cf26eb467ee97f": "f7011cff1cdb75cac6e3a75688bd06e9",
".git/objects/be/95d45d75041d61b30579f3ee6846eebb83b467": "2de5820e74df0c2c15059cddd5a172bb",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/01d399d55654b3fb1869177584cb5a2ccc44e2": "1413507b03f3de9b07def0c024001c39",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/983c51d9cc4f04ae6267d9a22c26210accef46": "02b1299fb952ad16a7b14ce428ab1f06",
".git/objects/a2/14f2fd72485da3f193efbe4538d6e6cab2c419": "bc877efb18ca0f957fee2460343c2f83",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/56cbf387ca1aa7ca4ea7c7cce14b71addb4b68": "f67db0c4fb44f7480588f3140e9cb707",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/fe/88cc9bb9b73b8128a1364cb26835deae8032ce": "6e32b72d131fa76ac2b0b0adbef79fb1",
".git/objects/c6/ddfee84573e9c6f1ba23ec78b778f2b1305dce": "542a940cfa3b0d1874e9bee57cc8a003",
".git/objects/ec/ee275a307cf39845b9e8966eaf8e299dd0473e": "57b10de2a04d96d3a854ce10acc135c6",
".git/objects/4e/213b8ae332450bf11337891cecf52d6b912b5c": "e9172f13afe5940c17bc9e91b2d48860",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/f8a1bc15aab56f491f7c30c7e7d35514072414": "41ac2791370812cb3b9d962445adcdc1",
".git/objects/7d/38d9c76a0f939888a203e2863cc13e7a17dfa4": "5e947c10de70b3de1dc276ccfe83cda2",
".git/objects/29/1926861014ccc4b3436ebe24798bc371750ffc": "f79eea82ad7a22a85253567b93724e85",
".git/objects/7c/accdcf6c65ebfe455a13ac9d653651c860c245": "9f2349c3c1fd30109391a92e1e5cee4c",
".git/objects/16/6cbc5a4162563a275c1f67d782b90c900fe82d": "c28ea61bd8ecddc75e54533570cbeb57",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/45/4ad611c6a9f17f9701e55c1bfadf5027d75693": "25440393a715ce692ac5f35bae9cf2ff",
".git/objects/74/b41f05a7eaf779d726270f656e9695fc3c81f5": "04c7caa720d40b3fe155b684fd0617c6",
".git/objects/28/bf56bfa1df9f9f4f4928aacd389d77a1ab33d7": "e3d9ee52f100e640fcd162520fe817de",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/9cfc7273f328c75ba9d53a15d34d2a888e5e50": "7aa79bfed24b1e57c15d7346ae472512",
".git/objects/4c/f9ae23ffaf62309d59f42a1ca971e16342ea41": "fefc43ec0807a9b6e5a1f739b1056167",
".git/objects/4c/5e49786196523f52119a8c5a1eca5f3022b535": "a47aabf0c0fb5bf6c6a304a1715fb26d",
".git/objects/26/347bf4adce352dffbcba01bc12ee6346c2120c": "1a2e17de2817d0fabdf7a2bf23fad2d0",
".git/objects/4d/afa68e4230f60c45a56220fa68b2dda1bed3d5": "6c778ee87b36a9f0b9a25527008bb1bc",
".git/objects/2a/a634ee6945a528d069912d1cf29d4ae17d26c4": "79c13e3834f79130cc53fee7268c8c22",
".git/objects/88/34aadde26e068100ad21667fe1d4a78012d928": "1400b1abf7c75d18108ce83eed34617e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/5beeb39e07bd4eca981bf16778b46ffa87a82f": "a6e60bd773a2019a55abc48329c599fb",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/42ae360415c5924f362634d01229df09c67787": "175378f49976527a2b8ee8be826edfbd",
".git/objects/07/513e39af2ac81cba4d3f4fc42a9028579a9d1e": "4a87eaa2170e11e6eac4c2977213b624",
".git/objects/00/e9109a04c97bfc308100d42f938e794c46794d": "f20b5f0962ed1bf53054140171f76f7e",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/65/40ff0e2087b88a210d8fb6f327f79a20fa2da2": "d12adbd7c06622f3bd02734ca18e209b",
".git/objects/62/ec644eed2b21c2e7d1ee3a89c382044753232d": "b9b9d6e63b2e2835f19102949adeff0a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/cf70b4f853d5d3d0ec0898070a46568f1d817a": "a686a2fa40b332e1ba39fb9d9844c412",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/01/cbfc72c50d18dcb7a8fd28c77d1186ac3432cf": "deab9ecd1006f035bc46bf485b4d798b",
".git/objects/39/a553507b7112a55840f31f03c33e470c2f0cb0": "0ccc92edc346e8b821ef0c49974af3cd",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/55/c927ea738d1878d2842e9f044f70c012aab8c4": "df2acf469e84108e6659cc774933134d",
".git/objects/97/dea7318a1267dff0751eab5440522f87d8829b": "7e0a0e32988d027135d82ef5b411bdce",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/6ab2c09ccf5e1cb57b56000534afc2341988d5": "2520539b9f698c6cd5da67adabb07a10",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a403cf53238ee4e047b576f4f8f9c99251eb6a": "9c9fd820a5ba986c386e93a72b2b6a21",
".git/objects/d4/043780f92d9ab3acae72ca57b2ba80a415b447": "14b82b37735e960fc0be49e5dba79b8a",
".git/objects/a0/adf77ffc4438257628bd92590f6164ab56c9ad": "66ba87fb14f0fb59233fd340eeffc906",
".git/objects/a7/6449fcb2e95291401e2f78fe398ae0b9251fae": "25572cb159977310350d377a24b5d966",
".git/objects/a9/e479fb797a5e12a2e3e3a449dfaa44b6b5776c": "f217f37cb8025acef7d36abdc1416219",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b0/c814ee6ee3ab2a015fdcc7a6fc7d03abf1aa67": "a42212a283baf791602074412f602534",
".git/objects/b0/41b64a9208002db039fa1dc9fc25723defa83e": "b28138ff242cfe239bb62fac70abe662",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/cc/ee92bb7dc75f0fc10105683323317803e7d24a": "07ccd74f0c9a442cc45aec0b52f81134",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/a202313f920c91a2e7381d923a044424e6ff71": "ec2f10d8ca4a2b114c85015f59e985e2",
".git/objects/fa/c91d9042e68f9c076b62d9ed79bebabc4e44e5": "d2626d0d80e696cf24a3b768b36295a4",
".git/objects/c5/f6be529dd8a9a0f019f87d6b6a06da119165ba": "4ce4797f98841dc0e03c98daf4c010a6",
".git/objects/c5/c0ed5342bc169dc55245787658990fe586b6d1": "c0d21349eebfe93d5f00048fa1aacfb2",
".git/objects/cb/fdf2ff136f6ec3a55b487677961d4a46808784": "9c5dcba3001fc853821f32aab6fbc360",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/4f7d794e51c9cea24740bdd7ec1c581589d06b": "3fc0dbcd2c816cb0e2623a464eeab426",
".git/objects/77/f096e058ed210a0b49149fc9190f682aea2281": "f0c266a7b508f379c4242eb2a52d5c68",
".git/objects/70/5eee9f7d97812e992bff92bb09b010305b78cf": "6692d743a24009e5c03e9aef841a9cfe",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/7c3797d822b62d4bc003255f3caaf93cf0e501": "93455b92ca92198f5e267640988fcdf3",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/20bd4c3c111fa87b92e8ddc76a101af7d549cb": "4fc1c521298bf549ac291a4cf2434ce8",
".git/objects/2e/9b3a157e7f1efda81bbbeb19765ee917c3db2e": "32ab683f30c66f1b618271b0bd38e996",
".git/objects/78/8571c41fa08cde0e0f2f30d653ef841c988016": "60f3a9af1740f4aba41860500a4f12c3",
".git/objects/13/60cef3ae6bdd6381968ddd3d0fb9988449cd57": "ac7b7e92d92ab586d7d0e6e6a8a00517",
".git/objects/7f/650adbdaf79732da1afe3c7753b7616c2974ae": "23fc2e231724775194ab64569f3a4a41",
".git/objects/14/d0ede96d9509568439b75cacf2174771952014": "d012da36555d193b399a99d70a16bfec",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "3e36e01abe4b2fe975775049e681a0ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f63fcab7bc29e3cea7519594930909f7",
".git/logs/refs/heads/adjustments": "0c39c327a365f581b3723fb8eab7769a",
".git/logs/refs/heads/final-changes": "9ba1ee88e627c0fa4bbef5f08720d55f",
".git/logs/refs/remotes/origin/adjustments": "c4481f77dda09b9e3745206148a9561a",
".git/logs/refs/remotes/origin/main": "c4481f77dda09b9e3745206148a9561a",
".git/logs/refs/remotes/origin/final-changes": "8e1d150981e95c6d55413d22174e55ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/adjustments": "cd775c21f208bd178cc25d6c5e347a3e",
".git/refs/heads/final-changes": "c0a5fe7eaa6f64db7eef933466c0105f",
".git/refs/remotes/origin/adjustments": "e4355fc646f4ab5817a2f745a88282d5",
".git/refs/remotes/origin/main": "e4355fc646f4ab5817a2f745a88282d5",
".git/refs/remotes/origin/final-changes": "c0a5fe7eaa6f64db7eef933466c0105f",
".git/index": "5a9364dd175632d021e2f078219e6d86",
".git/COMMIT_EDITMSG": "d6acad02a9c4f00902160fcea5a004ff",
".git/FETCH_HEAD": "cc0a2cf0ff40724c801eac148c13c95c",
"assets/AssetManifest.json": "57d5e2ba33914038ce155c49da8e2248",
"assets/NOTICES": "a146712f1a75058d7642d5ef6ee4c70f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ed133616e03877f3e99fcbb5414bc53c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "eb1175f8e7f9b21099c441ebe091f32e",
"assets/fonts/MaterialIcons-Regular.otf": "ec044e65822188040a0f3be1c1e6664b",
"assets/assets/images/her9.jpg": "6821cb35b5373e6a0140fd4b838257a0",
"assets/assets/images/her8.JPG": "cdce59ff80518e1dc046cd95a8cc2f63",
"assets/assets/images/us.JPG": "94fcd1f33779162d6cac407671e1f0e5",
"assets/assets/images/her6.JPG": "4719e8b306e611c8ad80e055d238cf9a",
"assets/assets/images/her7.JPG": "256205f6536e51ab755e74c54ba77211",
"assets/assets/images/her5.JPG": "e7cdf03bbbae358e9b3b14de3e094585",
"assets/assets/images/her4.JPG": "3e5318073df54e4c760bbd3b93483e51",
"assets/assets/images/her1.JPG": "6d7e8689a638a95837c4f23ff6d59616",
"assets/assets/images/her3.JPG": "68ee2c11ed41bac225e5ca3194754bc6",
"assets/assets/images/her2.JPG": "0ca21fa0589ac39eccc963e33600551f",
"assets/assets/icon/icon.png": "e1c2c1eabf1d33ca3b0ab20aaeec3349",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
