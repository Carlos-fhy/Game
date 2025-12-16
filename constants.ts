import { BehaviorCard, RiskLevel } from './types';

export const BEHAVIOR_CARDS: BehaviorCard[] = [
  // High Risk
  { 
    id: 'h1', 
    content: '不使用安全套的肛交', 
    correctLevel: RiskLevel.High,
    explanation: '直肠肠壁不仅粘膜薄、容易破损出血，而且直肠内病毒含量较高。在未采取保护措施的情况下，HIV 病毒极易通过破损的粘膜直接进入血液，传播风险极高。'
  },
  { 
    id: 'h2', 
    content: '拥有多个性伴并发生不使用安全套的性交', 
    correctLevel: RiskLevel.High,
    explanation: '性伴侣数量越多，遇到感染者的概率就越大。不使用安全套直接接触体液（精液、阴道分泌物），是 HIV 性传播的主要途径。'
  },
  { 
    id: 'h3', 
    content: '感染性病并发生不使用安全套的性交', 
    correctLevel: RiskLevel.High,
    explanation: '性病（如梅毒、疱疹等）常伴有生殖器溃疡或炎症，这破坏了皮肤粘膜屏障，使 HIV 病毒更容易进入人体或排出体外，大大增加了感染或传播的风险。'
  },
  { 
    id: 'h4', 
    content: '感染艾滋病病毒的妇女怀孕和分娩', 
    correctLevel: RiskLevel.High,
    explanation: '如果不进行医学干预（母婴阻断），HIV 病毒可以通过胎盘直接传给胎儿，或在分娩过程中通过产道创口接触传播给婴儿。'
  },
  { 
    id: 'h5', 
    content: '共用未消毒的针头或注射器', 
    correctLevel: RiskLevel.High,
    explanation: '这是血液直接交换的途径。注射器针管中残留的微量血液若含有病毒，直接注入他人血管，感染概率极高，是传播效率最高的方式之一。'
  },
  { 
    id: 'h6', 
    content: '感染艾滋病病毒的妇女母乳喂养婴儿', 
    correctLevel: RiskLevel.High,
    explanation: 'HIV 病毒存在于感染者的乳汁中。婴儿的消化道粘膜非常娇嫩，且母乳喂养时间长、频率高，极易造成婴儿感染。'
  },
  { 
    id: 'h7', 
    content: '输入未经检测的血液或血液制品', 
    correctLevel: RiskLevel.High,
    explanation: '直接将含有病毒的血液输入体内，病毒量大且直接进入血液循环，感染风险接近 100%。目前正规医疗机构已严格把控，该风险主要存在于非法采供血。'
  },

  // Low Risk
  { 
    id: 'l1', 
    content: '用未经严格消毒的器械纹身、穿耳、针灸', 
    correctLevel: RiskLevel.Low,
    explanation: '如果器械上残留有上一位使用者的血液，存在血液交叉感染的可能。虽然通常血液量较少，不如直接输血风险高，但仍属于侵入性操作，存在明确的感染隐患。'
  },
  { 
    id: 'l2', 
    content: '共用剃须刀', 
    correctLevel: RiskLevel.Low,
    explanation: '剃须刀在使用过程中容易造成微小伤口并沾染血液。如果共用者双方都有皮肤破损，理论上存在血液传播的可能性。'
  },
  { 
    id: 'l3', 
    content: '共用牙具', 
    correctLevel: RiskLevel.Low,
    explanation: '刷牙时经常伴有牙龈出血，牙刷上可能残留血液。共用牙刷可能导致血液与口腔破损粘膜接触，存在理论上的传播风险。'
  },

  // Safe
  { 
    id: 's1', 
    content: '性行为中坚持全程正确使用安全套', 
    correctLevel: RiskLevel.Safe,
    explanation: '质量合格的安全套能有效阻隔体液（精液、阴道分泌物）的交换。坚持全程、正确使用是预防 HIV 性传播最有效的方法。'
  },
  { 
    id: 's2', 
    content: '礼节性接吻', 
    correctLevel: RiskLevel.Safe,
    explanation: '唾液中的 HIV 病毒含量极低，不足以造成感染。此外，唾液中含有抑制病毒的酶。礼节性接吻（干吻）完全安全。'
  },
  { 
    id: 's3', 
    content: '拥抱', 
    correctLevel: RiskLevel.Safe,
    explanation: 'HIV 不会通过完整的皮肤传播。日常的身体接触，如握手、拥抱，没有任何传染风险。'
  },
  { 
    id: 's4', 
    content: '互相按摩', 
    correctLevel: RiskLevel.Safe,
    explanation: '单纯的皮肤接触，没有体液交换，不会传播 HIV。'
  },
  { 
    id: 's5', 
    content: '自慰', 
    correctLevel: RiskLevel.Safe,
    explanation: '无论是单独自慰还是相互手淫，只要没有体液交换进入体内（如精液接触破损皮肤或粘膜），就是安全的。'
  },
  { 
    id: 's6', 
    content: '与感染者同桌吃饭、共用餐具', 
    correctLevel: RiskLevel.Safe,
    explanation: 'HIV 不能在消化道内存活（会被胃酸破坏），也不会通过唾液传播。共同进餐完全没有风险。'
  },
  { 
    id: 's7', 
    content: '无偿献血', 
    correctLevel: RiskLevel.Safe,
    explanation: '正规采血机构使用一次性无菌针头和器材，献血者本身不会因为献血行为而感染 HIV。'
  },
  { 
    id: 's8', 
    content: '共用浴室或马桶', 
    correctLevel: RiskLevel.Safe,
    explanation: 'HIV 离开人体后在外界环境中生存能力极差，很快就会失去活性。且完整的皮肤是良好的屏障，共用设施不会造成传播。'
  },
  { 
    id: 's9', 
    content: '一起游泳', 
    correctLevel: RiskLevel.Safe,
    explanation: '池水的稀释作用以及消毒剂（如氯）会迅速杀灭病毒。HIV 无法在水中存活和传播。'
  },
  { 
    id: 's10', 
    content: '共同参加体育运动', 
    correctLevel: RiskLevel.Safe,
    explanation: '汗液中不含 HIV 病毒。身体碰撞接触也不会导致传播。'
  },
  { 
    id: 's11', 
    content: '和感染者一起劳动居住', 
    correctLevel: RiskLevel.Safe,
    explanation: '日常的生活、工作接触，包括共用办公用品、工具等，均不涉及血液或体液交换，没有传播风险。'
  },
  { 
    id: 's12', 
    content: '蚊虫叮咬', 
    correctLevel: RiskLevel.Safe,
    explanation: '蚊子叮咬时只吸入血液，不会将上一人的血液吐回下一人体内。且 HIV 无法在昆虫体内生存和复制。'
  },
  { 
    id: 's13', 
    content: '打喷嚏', 
    correctLevel: RiskLevel.Safe,
    explanation: 'HIV 不会通过呼吸道传播，飞沫中也不含有导致感染的病毒量。'
  },
];

export const RISK_CONFIG = {
  [RiskLevel.High]: {
    label: '高危行为',
    color: 'bg-red-500',
    borderColor: 'border-red-500',
    textColor: 'text-red-600',
    bgColor: 'bg-red-50',
    icon: 'AlertTriangle'
  },
  [RiskLevel.Low]: {
    label: '低危行为',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    icon: 'AlertCircle'
  },
  [RiskLevel.Safe]: {
    label: '安全行为',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    icon: 'ShieldCheck'
  }
};
