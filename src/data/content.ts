export interface ServiceItem {
  id: string;
  title: string;
  enTitle: string;
  icon: string;
  summary: string;
  points: string[];
  priceNote: string;
  tag: string;
}

export interface SpaceItem {
  id: string;
  name: string;
  category: 'office' | 'registration' | 'meeting' | 'lounge';
  capacity: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  idealFor: string;
  specs: {
    area?: string;
    airConditioning: string;
    access: string;
    amenities: string;
  };
}

export interface PricingPlanItem {
  id: string;
  name: string;
  enName: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  period: string;
  idealFor: string;
  features: { text: string; included: boolean }[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  company: string;
  title: string;
  industry: string;
  content: string;
  stayDuration: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const BUSINESS_INFO = {
  name: '亞巨聯合商務中心',
  enName: 'Ya Ju Business Center',
  tagline: '台中廣三SOGO正隔壁 · 旗艦級微型辦公室與工商登記首選',
  address: '台中市西區美村路一段22號7樓',
  landmark: '廣三SOGO百貨正隔壁 / 鄰近勤美誠品綠園道',
  phone: '04-2328-1008',
  phoneDisplay: '(04) 2328-1008',
  mobile: '0905-127-859',
  email: 'yj23281008@gmail.com',
  lineId: '@yaju',
  lineUrl: 'https://line.me/ti/p/~@yaju',
  fbUrl: 'https://www.facebook.com/p/%E4%BA%9E%E5%B7%A8%E8%81%AF%E5%90%88%E5%95%86%E5%8B%99%E4%B8%AD%E5%BF%83-Ya-Ju-BusinessCenter-100063969790975/',
  hours: '週一至週五 08:30 - 18:00',
  accessInfo: '進駐會員享 24 小時感應門禁自由出入',
  nearbyTransport: [
    { title: '優化公車專用道', desc: '科博館/廣三SOGO站下車，步行僅需 1 分鐘即達' },
    { title: '高鐵與台鐵接駁', desc: '搭乘市區公車或計程車約 15 分鐘直抵台中高鐵站' },
    { title: '周邊便利停車場', desc: '廣三SOGO地下停車場、忠明公園地下停車場步行 2 分鐘' }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'private-office',
    title: '獨立商務辦公室',
    enTitle: 'Private Serviced Office',
    icon: 'Building2',
    summary: '1~6 人專屬私密空間，對外大採光窗，精緻裝潢與全套辦公傢俱，一卡皮箱即刻開展業務。',
    points: [
      '獨立冷氣溫控設備，享有安靜私密辦公環境',
      '全套人體工學桌椅、文件專用密碼鎖置物櫃',
      '租金內含水電費、大樓管理費及高速光纖網路',
      '免費享用五星迎賓大廳、現磨咖啡與茶水'
    ],
    priceNote: '月租 NT$ 8,800 起',
    tag: '熱門進駐'
  },
  {
    id: 'virtual-office',
    title: '工商登記 / 借址營登',
    enTitle: 'Virtual Office & Address',
    icon: 'FileBadge2',
    summary: '提供台中西區黃金商業門牌，專人代收掛號信件與快遞包裹，提供即時通知與轉寄服務。',
    points: [
      '台中西區燙金商業登記地址，提升企業專業信譽',
      '專職秘書即時代收信件、包裹，Line/Email拍照通知',
      '每月贈送專業會議室租借優惠時數',
      '專業會計師事務所媒合，代辦公司設立與稅務申報'
    ],
    priceNote: '特惠 NT$ 1,500 /月起',
    tag: '創業者推薦'
  },
  {
    id: 'meeting-room',
    title: '專業會議空間租借',
    enTitle: 'Conference & Meeting Rooms',
    icon: 'Presentation',
    summary: '4~8 人及 6~20 人多功能會議室，配置 50 吋液晶大螢幕、玻璃白板與高速 Wi-Fi。',
    points: [
      '配備高解析 50 吋液晶電視，無線投影簡報超流暢',
      '大面積強化玻璃白板，腦力激盪與提案必備',
      '秘書前台訪客尊榮接待引導，免費提供現磨咖啡茶水',
      '會員享有時數折扣，亦歡迎外部團隊預約臨時租借'
    ],
    priceNote: '時租 NT$ 300 /時起',
    tag: '按時計費'
  },
  {
    id: 'business-support',
    title: '商務秘書與行政代辦',
    enTitle: 'Secretarial & Legal Support',
    icon: 'Sparkles',
    summary: '五星級飯店式櫃檯秘書，專業訪客接待、電話代接，並提供涉外人士居留簽證與特許代辦諮詢。',
    points: [
      '訪客第一線親切接待，維護企業尊榮形象',
      '電話專屬代接、留言紀錄與預約過濾服務',
      '涉外、港澳人士來台投資、居留、工作證及特許項目諮詢',
      '多功能高速影印、列印、掃描事務機設備支援'
    ],
    priceNote: '會員專屬整合支援',
    tag: '全方位後勤'
  }
];

// Actual Real Photos of 亞巨聯合商務中心
export const SPACES: SpaceItem[] = [
  {
    id: 'suite-1-2',
    name: '1~2人 精英採光辦公室',
    category: 'office',
    capacity: '1 - 2 人',
    description: '實景拍攝。專為微型團隊、SOHO自由工作者打造，空間方正溫馨，隔音極佳，標配辦公桌椅與置物櫃，立即展開高效工作。',
    image: '/src/assets/client_photos/yaju_real_2.jpg',
    price: 'NT$ 8,800 - 12,000 / 月',
    idealFor: '軟體開發者、設計師、外商駐台代表、微型創業家',
    features: ['獨立空調系統', '人體工學網椅及專屬辦公桌', '個人密碼置物櫃', '水電網路管理費全包', '每日秘書郵務代收'],
    specs: {
      area: '約 3~5 坪',
      airConditioning: '獨立分離式冷氣',
      access: '24 小時智慧磁卡進出',
      amenities: '免費享用現磨咖啡、冷熱飲水機、高速Wi-Fi'
    }
  },
  {
    id: 'suite-3-4',
    name: '3~4人 團隊核心辦公室',
    category: 'office',
    capacity: '3 - 4 人',
    description: '實景拍攝。大面採光開窗，空間開闊無壓迫感，適合成長期新創團隊與電商品牌，具備充足的私密討論空間與收納機能。',
    image: '/src/assets/client_photos/yaju_real_5.jpg',
    price: 'NT$ 15,000 - 19,800 / 月',
    idealFor: '數位行銷公司、中小貿易商、顧問顧問團隊、跨國分部',
    features: ['寬敞對外落地觀景窗', '4組完整專業辦公座位', '專用內線電話機及分機配置', '會客接待區優先使用權', '會議室每月贈送免費時數'],
    specs: {
      area: '約 6~8 坪',
      airConditioning: '獨立分離式溫控空調',
      access: '24 小時智慧磁卡進出',
      amenities: '茶水吧檯、微波爐、冰箱、多功能事務機'
    }
  },
  {
    id: 'suite-5-6',
    name: '5~6人 旗艦團隊辦公套房',
    category: 'office',
    capacity: '5 - 6 人',
    description: '實景拍攝。商務中心內大規格獨立套房，尊榮隔音玻璃隔間，寬大辦公桌與主管座位，彰顯公司雄厚實力與專業形象。',
    image: '/src/assets/client_photos/yaju_real_9.jpg',
    price: 'NT$ 22,000 - 28,000 / 月',
    idealFor: '律師會計師事務所、中型新創團隊、金融投顧、企業核心據點',
    features: ['高規格隔音雙層玻璃隔間', '主管座與專屬團隊座席', '可彈性加裝專屬電話總機系統', '專屬郵件速遞特別服務', '免費貴賓車位協調優惠'],
    specs: {
      area: '約 9~12 坪',
      airConditioning: '獨立冷暖智慧溫控',
      access: '24 小時磁卡門禁保全',
      amenities: '免費現磨咖啡無限享用、高級會客室無限次預約優惠'
    }
  },
  {
    id: 'virtual-registration',
    name: '黃金門牌 營業地址登記',
    category: 'registration',
    capacity: '純地址 / 彈性座席',
    description: '實景拍攝。合法取得台中西區美村路一段（廣三SOGO商圈）精華商業地址。免去實體租金負擔，享受專業秘書信件即時轉知。',
    image: '/src/assets/client_photos/yaju_real_3.jpg',
    price: 'NT$ 1,500 - 2,500 / 月 (年繳另享優惠)',
    idealFor: '居家辦公者、電商網拍賣家、海外企業在台分公司、籌備處',
    features: ['合規營業登記與稅籍設立', '掛號信件與包裹即時Line拍照通知', '可代收支票與政府重要公文', '訪客專人親切接待過濾', '附贈會議室每月使用時數'],
    specs: {
      airConditioning: '大樓全區空調',
      access: '平日秘書服務時間內隨時取件',
      amenities: '公共會客區使用權限、公共事務機優惠'
    }
  },
  {
    id: 'meeting-medium',
    name: '專業商務投影會議室',
    category: 'meeting',
    capacity: '4 - 12 人',
    description: '實景拍攝。適合客戶商談、部門例會、面試洽談與合約簽署。配備 50 吋高解析度螢幕及大面積磁性玻璃白板。',
    image: '/src/assets/client_photos/yaju_real_4.jpg',
    price: 'NT$ 300 - 500 / 小時 (會員享有專屬折扣)',
    idealFor: '商務簽約、小組討論、一對一面試、視訊連線會議',
    features: ['50吋高畫質電視螢幕（支援HDMI/無線投屏）', '大面積白板與白板筆配備', '獨立靜音空調環境', '冷熱飲用水與熱咖啡招待', '秘書訪客名片交換與引導'],
    specs: {
      area: '約 4~6 坪',
      airConditioning: '獨立靜音空調',
      access: '採線上/前台即時預約制',
      amenities: '提供轉接線材、簡報筆、咖啡茶水'
    }
  },
  {
    id: 'lounge-bar',
    name: '溫馨交誼吧檯與會客大廳',
    category: 'lounge',
    capacity: '全體進駐會員共享',
    description: '實景拍攝。溫馨舒適的休憩交流空間，配置專業現磨咖啡機、微波爐、冷熱飲水設備與舒適皮椅，激盪跨界合作靈感。',
    image: '/src/assets/client_photos/yaju_real_7.jpg',
    price: '進駐會員完全免費使用',
    idealFor: '午後小憩、非正式客戶寒暄、創業者跨界人脈交流',
    features: ['現磨香醇義式咖啡免費暢飲', '精選茶包與飲水機', '微波爐、冰箱等生活家電齊備', '每日知名報章雜誌免費閱讀', '舒適質感皮革沙發會客座席'],
    specs: {
      area: '全區公共空間百坪',
      airConditioning: '舒適全天候空調',
      access: '24 小時開放進駐會員使用',
      amenities: '高速Wi-Fi、充電插座隨處可得'
    }
  }
];

// WordPress Enfold Avia Native Pricing Table Data
export const ENFOLD_PRICING_PLANS: PricingPlanItem[] = [
  {
    id: 'plan-virtual',
    name: '工商營業登記 (借址營登)',
    enName: 'Virtual Office & Address',
    badge: '熱門首選',
    price: '1,500',
    period: '月起',
    idealFor: 'SOHO族、電商賣家、籌備處或分公司設立',
    features: [
      { text: '台中西區美村路一段 SOGO旁黃金商業門牌', included: true },
      { text: '專人秘書代收信件包裹，即時拍照回傳通知', included: true },
      { text: '政府稅務公文、重要掛號信件即時轉交', included: true },
      { text: '每月享有會議室免費租借折抵時數', included: true },
      { text: '百坪迎賓大廳會客區自由使用', included: true },
      { text: '專業會計師事務所記帳與工商代辦媒合', included: true },
      { text: '24小時專屬獨立辦公座位', included: false },
      { text: '獨立冷氣溫控與專屬密碼文件置物櫃', included: false }
    ],
    ctaText: '預約營業登記'
  },
  {
    id: 'plan-suite-1-2',
    name: '1~2人 精英獨立辦公室',
    enName: '1-2 Person Private Office',
    badge: '青創推薦',
    isPopular: true,
    price: '8,800',
    period: '月起',
    idealFor: '微型創業者、專業顧問、軟體工程師、獨立執業',
    features: [
      { text: '實體獨立私密辦公室，一卡皮箱立即進駐', included: true },
      { text: '獨立分離式冷氣溫控設備，安靜不受打擾', included: true },
      { text: '全套人體工學桌椅及專屬密碼鎖置物櫃', included: true },
      { text: '水電費、大樓管理費、光纖網路費全免全包', included: true },
      { text: '24 小時智慧感應門禁卡自由出入', included: true },
      { text: '秘書訪客親切接待、郵件包裹專人代收', included: true },
      { text: '公共咖啡吧檯義式現磨咖啡無限暢飲', included: true },
      { text: '可優惠加辦工商營業登記地址', included: true }
    ],
    ctaText: '預約現場賞屋'
  },
  {
    id: 'plan-suite-3-4',
    name: '3~4人 團隊核心辦公室',
    enName: '3-4 Person Team Office',
    badge: '旗艦規格',
    price: '15,000',
    period: '月起',
    idealFor: '成長型新創公司、數位行銷、貿易代理、外商辦事處',
    features: [
      { text: '大面採光開窗視野，採光充足格局方正', included: true },
      { text: '4 組完整辦公座位及高階事務配備', included: true },
      { text: '水費、冷氣電費、大樓管理費全面包含', included: true },
      { text: '贈送工商營業登記地址（借址設立）', included: true },
      { text: '每月贈送 10 小時商務會議室免費使用', included: true },
      { text: '24 小時自由出入與大樓紅外線保全監控', included: true },
      { text: '五星迎賓接待大廳與茶水吧檯全配支援', included: true },
      { text: '可依企業需求擴充內線電話分機系統', included: true }
    ],
    ctaText: '洽詢團隊房型'
  },
  {
    id: 'plan-meeting',
    name: '專業影音會議室租借',
    enName: 'Meeting Room Rental',
    badge: '計時計次',
    price: '300',
    period: '小時起',
    idealFor: '業務提案、客戶簽約、面試甄選、內部研討',
    features: [
      { text: '4~8人商務會議室 / 6~20人多功能演習廳', included: true },
      { text: '50 吋高解析液晶電視螢幕（無線投影/HDMI）', included: true },
      { text: '大面積強化磁性玻璃白板與書寫筆配備', included: true },
      { text: '雙層隔音強化玻璃隔間，商業隱私有保障', included: true },
      { text: '專人秘書前台接待引導，提供貴賓茶水咖啡', included: true },
      { text: '超高速專線無線 Wi-Fi 覆蓋，視訊順暢', included: true },
      { text: '長期租借或定期例會享有包時特惠專案', included: true },
      { text: '平假日皆可配合預約使用', included: true }
    ],
    ctaText: '預約會議時段'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: '陳柏宏 (David Chen)',
    company: '森霖智慧行銷有限公司',
    title: '創辦人兼執行長',
    industry: '數位品牌行銷',
    content: '當初尋覓台中辦公室近三個月，亞巨的位置無可挑剔！就在廣三SOGO隔壁，不管是台北客戶搭車來訪，或是平時下樓吃商業午餐都極為方便。秘書非常細心專業，信件一到立刻拍照通知，讓我們團隊能專注衝刺業績。',
    stayDuration: '進駐 2 年 6 個月'
  },
  {
    id: 'test-2',
    name: '林欣宜 (Emily Lin)',
    company: '香港商極光跨境商務顧問',
    title: '台灣辦事處負責人',
    industry: '跨國貿易與法規諮詢',
    content: '我們作為外商在台籌備分公司，營業登記與地址門牌是建立信任的第一步。亞巨提供的不僅是地址，還給予許多涉外法規登記的專業代辦媒合，手續非常流暢，而且會議室投影設備很新，開線上視訊會議毫無延遲！',
    stayDuration: '進駐 1 年 8 個月'
  },
  {
    id: 'test-3',
    name: '張建維 (Ken Chang)',
    company: '維度空間室內建築師事務所',
    title: '主持設計師',
    industry: '空間設計與工程規劃',
    content: '以前租傳統辦公室要自己付水電、打掃、請總機，隱形成本太高了。搬進亞巨後，獨立冷氣很安靜、採光充足，公共吧檯隨時有香醇咖啡，會客大廳更讓來訪的業主留下極佳印象，整體租金效益非常高。',
    stayDuration: '進駐 3 年'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '請問簽約進駐流程為何？最快多久可以開始辦公？',
    answer: '流程非常簡便且快速：您可以透過線上預約或電話安排現場參觀；挑選合適房型確認後，雙方簽署租賃合約並繳納押金與首月租金。在您確認款項當日即可領取感應磁卡與鑰匙，最快當天或次日即可攜帶筆電立即進駐辦公！',
    category: '進駐流程'
  },
  {
    question: '辦理「工商營業登記（借址營登）」需要準備哪些資料？',
    answer: '若是新設立公司，需準備：公司名稱預查核定書、負責人身分證正反面影本、公司印章及負責人便章；若是已有公司欲遷址，則需檢附最新公司設立/變更登記事項表、負責人證件等。亞巨秘書團隊將備妥合法租約與房屋稅單等全套送件文件，亦可協助媒合專業會計師一站式代辦。',
    category: '營業登記'
  },
  {
    question: '租金是否包含所有水電、大樓管理費及清潔費？是否有隱藏費用？',
    answer: '亞巨聯合商務中心採誠信透明定價！獨立辦公室租金已「全額包含」水費、電費（一般辦公常態用電）、高速光纖網路、大樓公共管理費、公共區域每日專人清潔費及咖啡茶水費。絕無額外收取公共水電分攤雜費，讓您精準掌控公司營運成本。',
    category: '費用與合約'
  },
  {
    question: '會員可以 24 小時自由進出辦公室嗎？夜間加班是否有安全保障？',
    answer: '是的！進駐辦公室之簽約會員享有 24 小時全年無休自由出入權限。全區設置智慧型門禁感應刷卡系統，各公共廊道與主要進出口皆有 24 小時高解析度數位紅外線監視錄影保全，即使深夜或週末假日加班亦非常安全舒適。',
    category: '空間設施'
  },
  {
    question: '非進駐會員可以單獨租借會議室嗎？如何預約？',
    answer: '非常歡迎！非會員亦可單獨租借 4~8 人精緻會議室或 6~20 人多功能研討會議室。您可以隨時透過本官網的線上預約表單、官方 LINE 或撥打專線 (04) 2328-1008 洽詢檔期。平日及週末皆可配合租用。',
    category: '會議空間'
  },
  {
    question: '平時有重要客戶來訪時，亞巨秘書會如何協助接待？',
    answer: '當訪客抵達 7 樓大廳櫃檯時，值班專業商務秘書會親切迎賓、詢問來意並核對身分，隨即透過電話或內線通知您；在您準備就緒前，秘書會引導貴賓於五星級會客沙發區入座，並奉上精緻茶水或現磨咖啡，為您的企業展現大器尊榮的第一印象。',
    category: '秘書服務'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: '台中西區SOGO商圈核心',
    description: '座落美村路一段22號7樓，緊鄰廣三SOGO百貨、勤美誠品綠園道，出門即是台灣大道優化公車道，商業往來與交通機能首屈一指。',
    icon: 'MapPin'
  },
  {
    title: '省下數十萬高昂初期成本',
    description: '免裝潢、免買傢俱、免拉網路、免煩惱水電管理費。一卡皮箱即刻開展業務，大幅降低微型創業與分公司設立的財務風險。',
    icon: 'TrendingUp'
  },
  {
    title: '專業秘書尊榮接待與信件管理',
    description: '專職行政團隊擔任您的企業門面，第一時間代收信件、包裹並拍照回傳，免除聘請專職行政人事負擔與漏收公文風險。',
    icon: 'UserCheck'
  },
  {
    title: '合法合規 100% 營登過件率',
    description: '全棟建築符合消防與建管法規，提供合法租賃憑證與完稅稅單，協助您快速完成國稅局設立查核，合法經營無後顧之憂。',
    icon: 'ShieldCheck'
  },
  {
    title: '彈性租期與升級擴充空間',
    description: '從一人創業、借址登記，到團隊擴增至 2~6 人獨立辦公室，皆可依企業發展階段隨時平順升級，靈活無負擔。',
    icon: 'Maximize2'
  },
  {
    title: '24小時智慧門禁與安心保全',
    description: '進駐會員隨身感應卡全天候自由出入，配備全區高畫質錄影與嚴格安全防護，提供安靜高專注的專業辦公氛圍。',
    icon: 'Lock'
  }
];
