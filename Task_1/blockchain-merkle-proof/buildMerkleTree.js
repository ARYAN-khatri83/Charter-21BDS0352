const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

// Example array of transaction hashes (replace this with the actual fetched transactions)
const transactions = [
    '0x95856e6f28588a5116eea84daf6df14fc99be09098c74636e90e410772286a05',
  '0xb126028210ae22e1d08a6132d3ca6cb84de701891c110a39142c2e6d06cd66f2',
  '0x8f493880087384a0ad434c7ef77b71ff248b3fcc3750f2383f7edb8bed5e7a41',
  '0xf0c7dbdb33fd5e0ea86f871a8bd9e71062fd796e6abb6218dce28d3907f9fd3e',
  '0x7910c23fe138d39261923a60871ade76e3d4ac7a011ffc97d950b976aeb896b5',
  '0x9f83b4c1f9f5f17d66df66c1268af0afe0f027f1f50ace049e50048a0112a927',
  '0xcd5f181f5435e33418805c9744c96640fe67b8abd89baa45f670039c24f8d2be',
  '0x3d6f21ada170ebd7574c1148e2adf1e729e4dd16e593cdb0bd98ac6849cb2881',
  '0x5e1054b9d5d1b79105280461e22e5c4a025bf962a54ea9a99f7a67005be94c65',
  '0x424ab6a4c39a58e1ead7a8450b690b607403f45945d5b9ed0967aa59920953e6',
  '0x06039975ff87a3dc8101fecb62741b8bda4751657951b6f8728c50a49045c00c',
  '0xe12c24c6b81e75b2743f582ba89add5396f77e8f361399087ad0569eb9ba7212',
  '0x0307e4e4a1c0cd3db634cdbc057cefe738f164fd5ccce056560b12129614b599',
  '0x6e38049e691c2f57ac021079d2de56f38ed65e22900218f26a7436b52e8f0f89',
  '0x4cda88fe88206ee0f06cc0122f18c6f874c66fff22406f71e283f42138427e3b',
  '0x327e0a571db18e1c67ca3b0a7a24d2660ddd79aeba71aacea27fce2a45c5f659',
  '0x299e56213f17219066b6017cc283c95aa749cf597d6be149364ba9842d3ecaa2',
  '0x2375858613193866c9f0b29af5565d57e0c9eb2301e9e56ec84076b516ee2b77',
  '0x835a2c93eeb56872e5bc923d4b7802111c1f71c986d1b67189d5018243f700cd',
  '0x3b5a8e28d6411bc76ef0701eda044470a0a8012a2abdac2fc371bc7aa41dfd0a',
  '0xe4a3b2a2ce8f314d107967b4e1c608929df5af0d189f15f68afbdafa0656ee46',
  '0xaba5b85fffc8500bae40679203609150e802035fe645fd7da61e8960620604b9',
  '0x22fe284be8a76850f9009694f3f3dee384039f88e0baf686a4df17a19ab768e9',
  '0x595681feaec850c0ac23966f6a321bdb1024523c47febbe3557315612199ec30',
  '0x7ed6561851cb66158c2ca101008fc88e0898c6c178365abf0564d367358d25dc',
  '0xe2c1d60b50a988b99aa8bccf4d1dc63892a671b4457e9ac1d7b034e3805bc900',
  '0x1c1277a5a636cb6d41224118302e738a41a7aa4dfcd0d98f2b89ae008dd49ae5',
  '0xf00a5242cc158b0ca9bab580e5814258aa0cc2fae983670ea065104a8427594d',
  '0xd584bc15cd229c54d946c0968f274a0169071b2fde0a702686e4eb6598e283da',
  '0xe10668cb037e3c997b09ac202cc24c95359de907e35d7ec2291eee4f108e9406',
  '0x9578772af57a030b429698ff80db55fa50f4e133468e191772a08aa5b79ac03a',
  '0x53752fd07ad9b698fe3a26bd015279248b5ba0c7a84177f24c9b4cae34f55766',
  '0xf9ebf054c81bcab6469b60ed82e52395980f87ef3512a7c29ec94bd49e22e59c',
  '0xbb85c61a693ac3eeac731bd51302364fcfbe1df920f6d53c957a9c8cc2276607',
  '0xcfcf4ae612586dab6f9134bd74e1bef9428141fa0fd0ab786b2e9ee77855e4cf',
  '0x72f637f5c6d7037c2b3f2c6a7dbca13d966a8fd2d79b0fc5077bf189f997dfaa',
  '0xb53c3a6697ac989a9078194b49d5ab0a790b80599212a7c0e8c8212e5fb3179a',
  '0xd83325621945f5f2db8bae0580a16d8dbadbd72a69394eb39ed6aa26c8f5d266',
  '0x662afcb8602a1f4504c0f72bc6add14142bca6dc7f4d3b77760688abd435d425',
  '0x14d17a21d0800a4a6784137f78fe1babd4142f824f224d16de960edf935ee5c3',
  '0xabc99849e294950585bb0f048ee08d486f711e3b947c11d1d535282dcfe335c5',
  '0x38349820d0d363b01d628d8c4201cb5301476b858a37983a829654125dc81b3d',
  '0x9ce6748430de8edc9a34d0b03987bd6b157ddd63c8e04961c744d221407c24dc',
  '0x3cad3ba3b6b458e84fc3c1b3528d44cc8ac9f6b3b41358043d9a3dc80974da56',
  '0x7edffc8ba3a26692e01070e697bc136d250e49a6fc8c2564e2acc7b6472d23d8',
  '0xa506abefe2f4dbc3cf0563ce0e8ff96b6d4db16818dce89499b4477258e087d5',
  '0xad626fde146ca07628801571387a615c7ffbf8c37b5ccc588b9aa1d716e5e918',
  '0x82556ef5b998812ea3a5f59cd8d3b6c6fdf13f12ac005c24f93d2628794a73d8',
  '0xb5c984f589b033fb59d989694522f23df219857ea92c67ff82f172915d9aa947',
  '0x9b059a014cae2a373cbb1c3f48207d478aa705e395543505be3ec3acac6e3d1b',
  '0xdd8a8869ee8a3a51c5e0bd50f42879bd5433c20809243eae4b41aa332715e34a',
  '0xd08b94c89bd577863942b267b5165f2f47c46927dc2bc863e5dc5be605516f11',
  '0x9683e1297baddb313f9d813bd6703bc66668dce25a992dee7d540dbd24f4f3c2',
  '0xf440c7263e2d0f611342956ec678d4a26d587c54762324c4be1965c5b159acb7',
  '0x6123681d762a306a2de56ac9f36d259be9bc0f3e0c981a32eb490c1ac3c86117',
  '0x84f2cc3c3a5be55769326c5db0f40afcc8789919271200f2e018fa5fd55c4129',
  '0xeeda5c0de594a2386bec72d4155dc9467edec48309c6d830fbcc8db999b0e45d',
  '0xd9d292d3d7ac721b01e3113cf2b744815bd6b769e935510e6096aa0af0eced07',
  '0x526d56c14eacb64cf998800ba5d67bc7963823b88a2b58f524d1d46675fe7f29',
  '0x45bad2232324f7b46c271dc6ec2b41115e035ef520e2adbd11f2e3404cf0cc4f',
  '0x52b7f5525f99713a61c3aedf3439c5146401e101e77ce8caefddf26c0a281f65',
  '0xedf90f6d1e0264ef89aa82624c423d1b595ef82758b6b5744757c1bc8588af74',
  '0xd220bd9022a69139b55faf95bce711fd3c96f64d70bc8044a2b4cb368e87f706',
  '0x737a972ab53d5badbf95228fc3453543d6d263dc1a36ee6db747dbaae3ac5b94',
  '0xcadec8ccefc36cf54cc178af09055cba79793fbf02bf8960e285625f1bf28d8e',
  '0xa53bece041d977270e9f09d641f90fa2ec0241877da19bd7e5fbb85530c3a9ee',
  '0x7c590824e7cbc64843e24fe1d8351c3644d9909acadee72e8b749e2c9ece6ad0',
  '0xff6622ce212084edca714762a5a28eb69d853339b4534cc84ef15c0661728e2d',
  '0xd82677ed22059d5c3502e60b10b1b5f2afbdb30596c265a7edb5b27b3af0ebef',
  '0x7836ad63303a75a422657d8739b1c586c44260e0c1c0351e4f37429d3406c776',
  '0xd56881b392b995c1a1ebdcdd0d632f2abba71740b965a73a2eec3fe59e3f5996',
  '0xdabf11d3131c95a7258103a5b3ea1ee2b2fa5d788ea060da3393bacf2be1877b',
  '0x8cf1ee18b9eb7df919327e76241865d6e0286746936eed00d2b9fccf9633891a',
  '0xd2d45a58771891249c21f65e62d2619cfee4abf7f288acf1232f10653f6955a5',
  '0xe02bcd0771a0e71693a32f11bcf92ead5271de6e783193306c2c01fe172a0d26',
  '0x023823fc0272fa574876da3dba2045d9aef1c87ded8ca78a597d05aef811c51a',
  '0xe25f857d32aea64d760dbf98c744d08362941c0b4d29718d8f6dc8294796ab26',
  '0xde9b1205f38b74da1574a8b16fe891041e180666965a4c48afbe625f0f28224a',
  '0xd2cc6060bd95c298a7c354ae8578c519c5a2c15574bf6cc8698954eeed9df591',
  '0xa83c26cfde171a00fc6fb27ddb8946c884e74a29bbdbce45298eb308b0405720',
  '0x6eebb0acef148f43ebc404085eee3aee819275adc305c89857f479517a11b98c',
  '0x65921da6d0c2277ce6e854895ae3c7b05b0665803fcfebe782152be41d6b5dcb',
  '0x4e21d867aaee8f3b791488c75f5bf4b978451d1459677a2c9ae3224b667d8993',
  '0x2ef0ede10c0f064a24ec37f475a580de5669c9c9ab0c854f4a0f593a37c3d916',
  '0xbd1febec2e2b5a934fb4287275038dc172eb4c73375308668fd635dbae37c8fc',
  '0x8a32952d0a26ab1cd1480acbcbb610200316b22e5190f5fc64a875395dc77913',
  '0x8fb24f3b1f3c430f63b946e44b6f4e40e84537327343e848824dcc7fdb3b2285',
  '0x9f47f99486b212e995fd7949beadd792626737e47ccba6933123e132719eb1ae',
  '0x5a607afc1681e8e889f9501c2172968fbf519f7b69b06cd3f44c09921eee56f9',
  '0x7d3799bcee2e237b0ce68617090de7bf1d89ddf585ee07dafc907dbc729a1cb4',
  '0x6b8541be7dd48aababd24db3f3b8cf8ba686a868eb67f3b8cff1ac5b223cb4cc',
  '0xb487b637d7d515058e296bb94f35b27925025eeff6652e99fd2ff5506bad2d60',
  '0x8fa3065fe34216b2550a791248f77b970f29ef2186a5e5a5d48db3833bca5fe6',
  '0xe106d22160b0ec2f912230edeb61d2bef4d2aadb4e9ba32ec33ff92309e45393',
  '0x53a8d0153b892ca109d323270bddaddfcfbfc8b64c6909429d379cac8f8f9ca0',
  '0x204e2bc577639c588d6a850f2874280e4d374ec18ff466e9c1fde79aee435898',
  '0xd56abecf22794d48a8453c6d6dfec2f324dab9ff5500caaadd6bfde77c8855d7',
  '0xc878738607bc03b9ad30bf87152f8db31dd9f0d18142e1e7c63230677df1aa87',
  '0x88088d1352481e0de416ffca196dab7aa843ce496a271b00b8ef9b75524c4811',
  '0xb77417fdd525a5f92f4a8d311df76199fe87e535292ab98fb24f66a25560f076',
];

// Convert each transaction hash into a leaf node by hashing it with keccak256
const leaves = transactions.map(tx => keccak256(tx));

// Create the Merkle tree
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

// Get the Merkle root
const root = tree.getRoot().toString('hex');
console.log('Merkle Root:', root);

// Example of generating a Merkle proof for a specific transaction
const selectedTransaction = transactions[0]; // Choose the transaction you want to verify
const leaf = keccak256(selectedTransaction);
const proof = tree.getProof(leaf).map(x => x.data.toString('hex'));

console.log('Merkle Proof:', proof);