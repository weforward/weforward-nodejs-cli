# weforward前端项目脚手架

## 全局安装脚手架
```bash
npm install weforward-cli -g
```

## 创建项目
进入需要创建项目的目录执行命令weforward init <项目名>
```bash
weforward init projectName
```

##安装依赖
```bash
npm install
```

## 运行项目

```bash
npm run dev
```

## 编译项目并提交到测试环境
```bash
npm run build-package
```

## 编译项目并提交到生产环境
```bash
npm run build-publish
```

## 环境变量配置说明(基于vue框架，所以环境变量的命名规范和vue保持一致)
配置.env文件

```bash

#NODE 环境
NODE_ENV=production

# APP公开入口
VUE_APP_WF_PUBLICPATH=/#{name}/#{tag}/

#接口域名，多个时使用英文逗号隔开
VUE_APP_WF_HOST=//g1.weforward.cn,//z1.weforward.cn

#是否增长版本
VUE_APP_WF_IS_GROW_VERSION=true

#是否打包
VUE_APP_WF_IS_PACKAGE=true

#是否发布
VUE_APP_WF_IS_DIST=true

#项目编译后提交的路径
VUE_APP_WF_DISTHUB_URL=http://xxx/dist/vue/

#编译并提交项目需要鉴权，内容格式为"用户名:密码"
VUE_APP_WF_DIST_AUTHORIZATION=username:password

#本开发环境默认端口
VUE_APP_WF_HOST_PORT=8080
#开发环境】服务名映射键值对模式，键值之间使用英文冒号隔开（属性名和值相同时可以只写属性名例如train等同于train:train），有多对值时使用英文冒号隔开
VUE_APP_DEV_SERVICENAME=train:traintest

```
