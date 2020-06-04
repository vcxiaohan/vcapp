# 项目介绍

### 技术栈
基于**create-react-app**自定义了主流的项目结构，集成了市场流行的前端语言**react+antd-mobile+typescript**

### hooks
项目全部采用react最新特性hooks进行编写

### redux替代方案
由于hooks的支持，使用createContext和useReducer替换以往的redux

### 样式文件
支持scss的编写

### css动画
基于**react-transition-group**封装**VTransition**组件，内置了几个常用的css动画

### table组件
由于**react+antd-mobile**不存在**table**组件，自定义**VTable**组件以满足基本的表格需求

### 自定义项目配置
使用**react-app-rewired+customize-cra**在不对项目做**eject**的情况下自定义一些项目配置

### 手机适配方案
使用**postcss-px2rem**实现**antd-mobile**的rem高清适配方案

### 设计规范
设计稿应以**iPhone6/7/8**为基准进行设计，即输出**px为375*667**的设计稿，开发人员直接量取相应的px即可

### 时间格式化
采用轻量化的时间库**dayjs**

### 路由
采用最新的**react-router-dom**构建路由，自定义路由拦截

### 请求
采用流行的**axios**库发起请求，自定义请求拦截

### 模拟数据
在**public/mock**文件夹下可以编写接口模拟的返回数据

### 测试用例
使用jest编写组件测试用例

### 组件命名规范
建议以V开头命名，比如**VIcon**、**VNavBar**，避免和其他库的组件命名冲突

### 图片存储
[oss文件管理]()的**LotteryTicket**文件夹下

# 启动项目

npm start

# 运行测试

npm test

# 打包项目

npm run build

