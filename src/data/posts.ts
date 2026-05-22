import type { TravelPost } from '@/types/post';

/**
 * 游记条目数据源。
 * 将 imageSrc 替换为 /public 下静态资源或 CDN 地址即可接入真实照片。
 */
export const travelPosts: TravelPost[] = [
  {
    id: 'p-aurora',
    title: '极光下的一小时',
    location: 'Tromsø · NO',
    dateLabel: '2025.11',
    imageSrc: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&q=80',
    imageAlt: '夜空中的绿色极光与地平线城市灯光',
    excerpt:
      '零下二十度里呼吸成雾，才理解「等待」也可以是一种仪式。光带铺开时，耳边只有快门声和自己很轻的心跳。',
    tags: ['游记', '夜景', '长曝光'],
  },
  {
    id: 'p-coast',
    title: '海岸线向北',
    location: 'Reykjanes · IS',
    dateLabel: '2025.08',
    imageSrc: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    imageAlt: '公路通向远方的海岸与山脉',
    excerpt:
      '风把云层推得很低，路面像被海水打磨过。车里放旧电台，突然觉得「赶路」和「停留」可以同一天发生。',
    tags: ['公路', '情绪片', '冰岛'],
  },
  {
    id: 'p-mesa',
    title: '台地与余温',
    location: 'Monument Valley · US',
    dateLabel: '2024.05',
    imageSrc: 'https://images.unsplash.com/photo-1509316785289-025f5cd94683?auto=format&fit=crop&w=1600&q=80',
    imageAlt: '荒漠中的红色台地与黄昏光线',
    excerpt:
      '日落把岩层刷成铜色，影子被拉得很诚实。那一刻不想解释太多，只想把颜色记住，像记住某句没说完的话。',
    tags: ['风光', '色彩', '独行'],
  },
  {
    id: 'p-lake',
    title: '湖面静止术',
    location: 'Jiuzhaigou · CN',
    dateLabel: '2024.10',
    imageSrc: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1600&q=80',
    imageAlt: '平静的湖水反射山峦与树林',
    excerpt:
      '水把山对折了一次，世界变得对称而柔软。我忽然明白，旅行里最好的句子，常常是风景替你说出口的。',
    tags: ['倒影', '秋日', '中文随笔'],
  },
];
