# 风险雷达：HIV 防治知识互动游戏

一款基于 React 开发的 HIV/艾滋病防治知识互动学习游戏，通过趣味性的卡片分类玩法，帮助用户了解不同行为的 HIV 传播风险等级。

## 功能特点

- **卡片分类玩法**：将不同行为卡片拖拽到对应的风险等级区域
- **即时反馈**：每次分类后立即获得正确与否的反馈及专家解析
- **精美动画**：使用 Framer Motion 实现流畅的交互动画
- **响应式设计**：支持桌面端和移动端访问

## 技术栈

- **前端框架**：React 19
- **开发语言**：TypeScript
- **构建工具**：Vite
- **动画库**：Framer Motion
- **图标库**：Lucide React
- **样式工具**：clsx

## 本地运行

### 环境要求

- Node.js（建议 18.0 或更高版本）
- npm 或 yarn

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/Carlos-fhy/Game.git
   cd Game
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **打开浏览器访问** `http://localhost:5173`

## 构建部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
Game/
├── components/          # React 组件
│   ├── FeedbackOverlay.tsx   # 反馈弹窗组件
│   ├── ResultsView.tsx       # 结果展示组件
│   └── Zone.tsx              # 风险区域组件
├── services/            # 服务层
│   └── geminiService.ts      # Gemini AI 服务
├── App.tsx              # 主应用组件
├── constants.ts         # 常量配置（行为卡片数据）
├── types.ts             # TypeScript 类型定义
├── index.tsx            # 应用入口
├── index.html           # HTML 模板
├── vite.config.ts       # Vite 配置
└── tsconfig.json        # TypeScript 配置
```

## 许可证

本项目仅供学习和教育用途。

---

> **提示**：了解 HIV 传播风险，保护自己和他人的健康！
