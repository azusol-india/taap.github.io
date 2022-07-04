'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "896449a2050147aa7eb0404fe2d8c006",
"splash/logo.png": "a0a4db6d6e59f0b4a023106b2427a688",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "d15e703a9657d08fbf47dc831b80c6b9",
"index.html": "cda6ffb012a13991952e6cd43f4a3234",
"/": "cda6ffb012a13991952e6cd43f4a3234",
"main.dart.js": "5e24612877bfd223de72a5f4c1d75244",
"16.png": "21981bdbb24f223b6184e14bf91f7d2c",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/512.png": "42b138ebd8e7a0c05d0f4c87af435074",
"icons/192.png": "06369bf2f0390677adf29a07079020dc",
"manifest.json": "b0eb93e85ff230368f7213ece4ac0e20",
"assets/AssetManifest.json": "a8c683b1c803f17aaa9489dcfd025506",
"assets/NOTICES": "4844fe5aec96f78dd5d196f197fd1099",
"assets/FontManifest.json": "c5e91fbbb4772d416cdd6e48b357a318",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/roboto.ttf": "46e48ce0628835f68a7369d0254e4283",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/CustomIcons.ttf": "2b6620b65feff0ccbb4b52458309f6e2",
"assets/assets/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"assets/assets/flags/me.png": "590284bc85810635ace30a173e615ca4",
"assets/assets/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"assets/assets/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"assets/assets/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"assets/assets/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"assets/assets/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"assets/assets/flags/af.png": "220f72ed928d9acca25b44793670a8dc",
"assets/assets/flags/cy.png": "f7175e3218b169a96397f93fa4084cac",
"assets/assets/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"assets/assets/flags/aq.png": "216d1b34c9e362af0444b2e72a6cd3ce",
"assets/assets/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"assets/assets/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"assets/assets/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"assets/assets/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"assets/assets/flags/ag.png": "6094776e548442888a654eb7b55c9282",
"assets/assets/flags/ms.png": "ae3dde287cba609de4908f78bc432fc0",
"assets/assets/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"assets/assets/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"assets/assets/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/assets/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"assets/assets/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"assets/assets/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"assets/assets/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"assets/assets/flags/mq.png": "710f4e8f862a155bfda542d747f6d8a6",
"assets/assets/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"assets/assets/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"assets/assets/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"assets/assets/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"assets/assets/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"assets/assets/flags/as.png": "5e47a14ff9c1b6deea5634a035385f80",
"assets/assets/flags/bh.png": "264498589a94e5eeca22e56de8a4f5ee",
"assets/assets/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/assets/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"assets/assets/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"assets/assets/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"assets/assets/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/assets/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"assets/assets/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"assets/assets/flags/ua.png": "b4b10d893611470661b079cb30473871",
"assets/assets/flags/tv.png": "04680395c7f89089e8d6241ebb99fb9d",
"assets/assets/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"assets/assets/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"assets/assets/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/assets/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"assets/assets/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"assets/assets/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"assets/assets/flags/aw.png": "e22cbb318a7070c92f2ab4bfdc2b0118",
"assets/assets/flags/bz.png": "756b19ec31787dc4dac6cc19e223f751",
"assets/assets/flags/bm.png": "3c19361619761c96a0e96aabadb126eb",
"assets/assets/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"assets/assets/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"assets/assets/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"assets/assets/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"assets/assets/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/assets/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"assets/assets/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/assets/flags/ls.png": "2bca756f9313957347404557acb532b0",
"assets/assets/flags/bo.png": "15c5765e4ad6f6d84a9a9d10646a6b16",
"assets/assets/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"assets/assets/flags/ck.png": "f390a217a5e90aee35f969f2ed7c185f",
"assets/assets/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"assets/assets/flags/au.png": "9babd0456e7f28e456b24206d13d7d8b",
"assets/assets/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"assets/assets/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"assets/assets/flags/nz.png": "7587f27e4fe2b61f054ae40a59d2c9e8",
"assets/assets/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"assets/assets/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"assets/assets/flags/tc.png": "036010ddcce73f0f3c5fd76cbe57b8fb",
"assets/assets/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"assets/assets/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"assets/assets/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"assets/assets/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"assets/assets/flags/in.png": "1dec13ba525529cffd4c7f8a35d51121",
"assets/assets/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"assets/assets/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"assets/assets/flags/gs.png": "14948849c313d734e2b9e1059f070a9b",
"assets/assets/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"assets/assets/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"assets/assets/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"assets/assets/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"assets/assets/flags/gb-nir.png": "3eb22f21d7c402d315e10948fd4a08cc",
"assets/assets/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"assets/assets/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/sv.png": "38809d2409ae142c87618709e4475b0f",
"assets/assets/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"assets/assets/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"assets/assets/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"assets/assets/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"assets/assets/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"assets/assets/flags/kr.png": "79d162e210b8711ae84e6bd7a370cf70",
"assets/assets/flags/gf.png": "83c6ef012066a5bfc6e6704d76a14f40",
"assets/assets/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"assets/assets/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"assets/assets/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"assets/assets/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"assets/assets/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"assets/assets/flags/pn.png": "ab07990e0867813ce13b51085cd94629",
"assets/assets/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"assets/assets/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"assets/assets/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/assets/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"assets/assets/flags/do.png": "fae653f4231da27b8e4b0a84011b53ad",
"assets/assets/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"assets/assets/flags/gb.png": "ad7fed4cea771f23fdf36d93e7a40a27",
"assets/assets/flags/gu.png": "13fad1bad191b087a5bb0331ef5de060",
"assets/assets/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"assets/assets/flags/hm.png": "e5eeb261aacb02b43d76069527f4ff60",
"assets/assets/flags/sg.png": "bc772e50b8c79f08f3c2189f5d8ce491",
"assets/assets/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"assets/assets/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"assets/assets/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"assets/assets/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"assets/assets/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"assets/assets/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"assets/assets/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"assets/assets/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"assets/assets/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/assets/flags/dm.png": "e4b9f0c91ed8d64fe8cb016ada124f3d",
"assets/assets/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"assets/assets/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"assets/assets/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"assets/assets/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"assets/assets/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"assets/assets/flags/qa.png": "bcb7cfa9fa185e00720f901c4a522531",
"assets/assets/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"assets/assets/flags/pr.png": "d551174a2b132a99c12d21ba6171281d",
"assets/assets/flags/si.png": "24237e53b34752554915e71e346bb405",
"assets/assets/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"assets/assets/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"assets/assets/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"assets/assets/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"assets/assets/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"assets/assets/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/assets/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"assets/assets/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"assets/assets/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"assets/assets/flags/iq.png": "8e9600510ae6ebd2023e46737ca7cd02",
"assets/assets/flags/ky.png": "3d1cbb9d896b17517ef6695cf9493d05",
"assets/assets/flags/sh.png": "9c0678557394223c4eb8b242770bacd7",
"assets/assets/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"assets/assets/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"assets/assets/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/assets/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/assets/flags/is.png": "907840430252c431518005b562707831",
"assets/assets/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"assets/assets/flags/fk.png": "a694b40c9ded77e33fc5ec43c08632ee",
"assets/assets/flags/fj.png": "214df51718ad8063b93b2a3e81e17a8b",
"assets/assets/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"assets/assets/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"assets/assets/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"assets/assets/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"assets/assets/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/assets/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"assets/assets/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"assets/assets/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"assets/assets/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"assets/assets/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"assets/assets/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"assets/assets/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"assets/assets/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"assets/assets/flags/ki.png": "4d0b59fe3a89cd0c8446167444b07548",
"assets/assets/flags/jm.png": "074400103847c56c37425a73f9d23665",
"assets/assets/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"assets/assets/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"assets/assets/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"assets/assets/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"assets/assets/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"assets/assets/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"assets/assets/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"assets/assets/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"assets/assets/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/assets/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/assets/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"assets/assets/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"assets/assets/flags/de.png": "5d9561246523cf6183928756fd605e25",
"assets/assets/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/assets/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"assets/assets/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"assets/assets/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"assets/assets/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"assets/assets/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"assets/assets/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"assets/assets/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"assets/assets/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"assets/assets/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"assets/assets/flags/ao.png": "1c12ddef7226f1dd1a79106baee9f640",
"assets/assets/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"assets/assets/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"assets/assets/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"assets/assets/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"assets/assets/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"assets/assets/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"assets/assets/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"assets/assets/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"assets/assets/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/assets/flags/vg.png": "6855eed44c0ed01b9f8fe28a20499a6d",
"assets/assets/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"assets/assets/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"assets/assets/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"assets/assets/flags/mx.png": "8697753210ea409435aabfb42391ef85",
"assets/assets/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"assets/assets/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"assets/assets/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"assets/assets/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"assets/assets/flags/al.png": "f27337407c55071f6cbf81a536447f9e",
"assets/assets/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"assets/assets/flags/cr.png": "08cd857f930212d5ed9431d5c1300518",
"assets/assets/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/assets/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"assets/assets/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"assets/assets/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"assets/assets/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"assets/assets/flags/nu.png": "4a10304a6f0b54592985975d4e18709f",
"assets/assets/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"assets/assets/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"assets/assets/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"assets/assets/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"assets/assets/flags/xk.png": "980a56703da8f6162bd5be7125be7036",
"assets/assets/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"assets/assets/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"assets/assets/flags/ai.png": "d6ea69cfc53b925fee020bf6e3248ca8",
"assets/assets/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"assets/assets/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"assets/assets/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"assets/assets/flags/ca.png": "81e2aeafc0481e73f76dc8432429b136",
"assets/assets/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"assets/assets/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"assets/assets/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"assets/assets/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"assets/assets/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"assets/assets/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"assets/assets/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"assets/assets/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"assets/assets/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"assets/assets/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"assets/assets/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"assets/assets/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"assets/assets/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"assets/assets/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"assets/assets/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"assets/assets/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/assets/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"assets/assets/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"assets/assets/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"assets/assets/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"assets/assets/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"assets/assets/flags/za.png": "7687ddd4961ec6b32f5f518887422e54",
"assets/assets/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"assets/assets/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"assets/assets/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"assets/assets/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"assets/assets/images/person_circle.svg": "dd0df25329ea4906d3084e6abc5e1348",
"assets/assets/images/twitterlogo.jpg": "f781719ebe1bc693c634509c51d2bf00",
"assets/assets/images/person.svg": "5f481b2653b3a4f98e9cffb6348dadf7",
"assets/assets/images/google_icon.png": "54955fcf195ba64a7ef3fc5213bda081",
"assets/assets/images/pin.png": "13a393f3ab87cfa200effc34a21ee549",
"assets/assets/images/logout.svg": "f5d69802881b4ddc1976877f0d943feb",
"assets/assets/images/bookmark_plus.svg": "c95717e6c86ec8fbdccb4cb89f8628d4",
"assets/assets/images/tag.svg": "23b5fffc282fa8ce8d935ab6b23f5dd6",
"assets/assets/images/arrow_back.svg": "d7056b618f9606c055cbd23c27e808a6",
"assets/assets/images/user_status.svg": "66b97b9cde14a763120b75daf8477f43",
"assets/assets/images/user.png": "a19c7d4bb9c368fc49a6a8e66b9f8623",
"assets/assets/images/funnel.svg": "76c3a2d70e598f6af95cf47c5f1c5c88",
"assets/assets/images/googlelogo.png": "a71287b6208aba540472f58d3e6db77e",
"assets/assets/images/gear.svg": "f142545c2a66146ecedbd18c7fce0aeb",
"assets/assets/images/speedometer.svg": "3399f6ae46b83e88eeea480a2e3360ba",
"assets/assets/images/people.svg": "172ce8ec296098b6af36640dfa9760ff",
"assets/assets/images/logo_ex.png": "053dec3e0c37d196ed9e08d937752c64",
"assets/assets/images/person_plus.svg": "4cfb60dae90e9b7c3266310ecfe88389",
"assets/assets/images/logo.png": "a0a4db6d6e59f0b4a023106b2427a688",
"assets/assets/images/edit.svg": "5ed85260191701fe68dfc5db123782e1",
"assets/assets/images/plus_circle.svg": "da5b7948e12ead925f16e5b36edbf926",
"assets/assets/images/delete.svg": "8db4e757ae6c3d66dfb70339911a8eef",
"assets/assets/images/fblogo.jpg": "def9605cd1ca41de96da0d04fae3a7b6",
"assets/assets/images/eye.svg": "0fcc1944eba8716d478967c690ec7072",
"assets/assets/images/gmailogo.jpg": "fd20f349aaf833fa72f58f606c116454",
"assets/assets/images/calendar_plus.svg": "f92d5bab5373c4fc1de17dbaa714c5fe",
"assets/assets/images/logo.svg": "e639b112dd26be10d9406ec1fefcbbf8",
"assets/assets/images/help.svg": "8c6f9b66b1f6e3ee3edda77c38149e10",
"assets/assets/images/logo_ex.svg": "15e45fd488d0457acd3bcfca313d20ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
