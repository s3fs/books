var C=Object.defineProperty,z=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var I=(e,r,o)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,u=(e,r)=>{for(var o in r||(r={}))M.call(r,o)&&I(e,o,r[o]);if(S)for(var o of S(r))B.call(r,o)&&I(e,o,r[o]);return e},h=(e,r)=>z(e,T(r));import{a as G,u as D,b as H,c as $,j as i,d as a,R as F,e as O,f as P,L as y,g as K,h as Y,i as W,B as J,P as Q}from"./vendor.7f9597da.js";const U=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};U();const V=(e={books:[],query:null,index:0,loading:!1,category:"All",sort:"Relevance",booksAmount:0},r)=>{switch(r.type){case"SEARCH":return h(u({},e),{books:r.data,query:r.query,booksAmount:r.amount});case"LOAD_MORE_BOOKS":return h(u({},e),{books:[...e.books,...r.data],index:e.index+30});case"SET_LOADING_STATE":return h(u({},e),{loading:!e.loading});case"CHANGE_CATEGORY":return h(u({},e),{category:r.data});case"CHANGE_SORT":return h(u({},e),{sort:r.data});default:return e}},R=(e,r,o)=>({type:"SEARCH",data:e,query:r,amount:o}),X=e=>({type:"LOAD_MORE_BOOKS",data:e}),Z=e=>({type:"CHANGE_CATEGORY",data:e}),ee=e=>({type:"CHANGE_SORT",data:e}),b=()=>({type:"SET_LOADING_STATE"}),v=async({data:e,index:r,category:o})=>{const t=`https://www.googleapis.com/books/v1/volumes?q=${e.split(" ").join("+")}${o!=="All"?`+subject:${o}`:""}&maxResults=30&startIndex=${r}`;return(await G.get(t)).data},w=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"],E=(e,r)=>(e=Math.ceil(e),r=Math.floor(r),Math.floor(Math.random()*(r-e+1)+e)),re=()=>`${w[E(0,w.length)]} ${w[E(0,w.length)]}`,te=["All","Art","Biography","Computers","History","Medical","Poetry"],ae=["Relevance","Newest"],oe=({dispatch:e,state:r})=>{const o=P();return a("div",{children:i("form",{className:"search-form",onSubmit:async t=>{t.preventDefault();const n=t.target[0].value;if(!n)return;t.target[0].value="",o("/books"),e(b());const s=await v({data:n,index:r.index,category:r.category});e(R(s.items,n,s.totalItems)),e(b())},children:[i("div",{className:"input-wrapper",children:[a("input",{className:"search-form_input",placeholder:"Enter a book name..."}),a("button",{type:"submit",className:"search-form_submit-button",children:"Search"})]}),i("div",{className:"search-form_selectors",children:[i("label",{htmlFor:"category-selector",children:["Category: "," ",a("select",{id:"category-selector",onChange:({target:t})=>e(Z(t.value)),children:te.map(t=>a("option",{children:t},t))})]}),i("label",{htmlFor:"sort-selector",children:["Sort by: "," ",a("select",{id:"sort-selector",onChange:({target:t})=>e(ee(t.value)),children:ae.map(t=>a("option",{children:t},t))})]})]})]})})},ne=({dispatch:e,state:r,books:o})=>{if(o===void 0)return a("h3",{className:"screen",children:"Hmm. No results for that."});const l=re(),t=async()=>{const c=await v({data:r.query,index:r.index+30,category:r.category});e(X(c.items))},n=async c=>{e(b());const d=await v({data:c,index:r.index,category:r.category});e(R(d.items,c,d.totalItems)),e(b())};if(o.length===0)return i("div",{children:[a("h3",{className:"screen",children:"Hi! Start searching the library by entering a title above."}),i("h3",{className:"screen",children:["Need inspiration? How about ",a(y,{to:"/books/",onClick:()=>n(l),children:l}),"?"]})]});const s=r.sort==="Relevance"?o:[...o].sort((c,d)=>{var p,m,g,f;return Number((m=(p=d.volumeInfo)==null?void 0:p.publishedDate)==null?void 0:m.substring(0,4))-Number((f=(g=c.volumeInfo)==null?void 0:g.publishedDate)==null?void 0:f.substring(0,4))});return i("div",{children:[i("h3",{className:"screen",children:["Found ",r.booksAmount,' books on "',r.query,'"']}),a("ul",{className:"book-card_container",children:s.map(c=>a(L,{book:c},c.id))}),a("div",{className:"pagination-button_container",children:a("button",{className:"pagination-button",onClick:t,children:"Load more..."})})]})},L=({book:e,page:r})=>{var o,l,t,n,s,c,d,p,m,g,f,k,N,x,_,j,q,A;return e==null?i("h3",{className:"screen",children:["No such book. ",a(y,{to:"/books",children:"Go to the main page."})]}):r?i("div",{children:[i("div",{className:"book-page_container",children:[a("img",{className:"book-page_image",src:(l=(o=e.volumeInfo)==null?void 0:o.imageLinks)==null?void 0:l.smallThumbnail}),i("div",{className:"book-page_contents",children:[a("span",{className:"book-page_contents__title",children:(t=e.volumeInfo)==null?void 0:t.title}),i("span",{className:"book-card_contents__categories",children:["Categories: ",((s=(n=e.volumeInfo)==null?void 0:n.categories)==null?void 0:s.join(", "))||"No categories listed"]}),i("span",{className:"book-card_contents__authors",children:["Authors: ",((d=(c=e.volumeInfo)==null?void 0:c.authors)==null?void 0:d.join(", "))||"Author unknown"]})]})]}),a("div",{className:"book-page_description",children:(p=e.volumeInfo)==null?void 0:p.description}),a("h3",{className:"screen",children:a(y,{to:"/books",children:"Go back"})})]}):a("li",{children:i(y,{className:"book-card",to:`/books/${e.id}`,children:[a("img",{className:"book-card_image",src:(g=(m=e.volumeInfo)==null?void 0:m.imageLinks)==null?void 0:g.smallThumbnail}),i("div",{className:"book-card_contents",children:[a("span",{className:"book-card_contents__title",children:((k=(f=e.volumeInfo)==null?void 0:f.title)==null?void 0:k.length)>40?`${(N=e.volumeInfo)==null?void 0:N.title.substring(0,40)}...`:(x=e.volumeInfo)==null?void 0:x.title}),a("span",{className:"book-card_contents__categories",children:(_=e.volumeInfo)==null?void 0:_.categories}),a("span",{className:"book-card_contents__authors",children:(q=(j=e.volumeInfo)==null?void 0:j.authors)==null?void 0:q.join(", ")})]}),a("div",{children:r?(A=e.volumeInfo)==null?void 0:A.description:null})]})},e.id)},ie=()=>{const e=D(),[r,o,l]=H(s=>[s.books,s.loading,s]),t=$("/books/:id"),n=t?r.find(s=>s.id===t.params.id):null;return i("div",{className:"container",children:[a(oe,{dispatch:e,state:l}),i(F,{children:[a(O,{path:"/books/:id",element:a(L,{book:n,page:!0})}),a(O,{path:"/books",element:o?a("h3",{className:"loading screen",children:"Loading... Please wait."}):a(ne,{books:r,dispatch:e,state:l})})]})]})},se=K(V,Y());W.render(a(J,{children:a(Q,{store:se,children:a(ie,{})})}),document.getElementById("root"));