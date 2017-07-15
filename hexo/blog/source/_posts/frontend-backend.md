---
title: frontend-backend
date: 2017-07-08 21:44:33
tags:
---

# 前后端架构思考

## 初步规划
- 前端jsp或模板+java请求接口
- 前端使用新的框架：Vue.js或React.js框架或Angular?
- 前端工作组的合并：原前端与PC、WAP
- 后端接口调整，独立的鉴权服务，使用jwt实现单点登陆
- 接口提供整合与管道功能
- 实现服务网关，路由，鉴权，日志功能
- 接口分版本管理，v1，v2
- 接口暴露的两种形式：通过Controller暴露，通过远程调用暴露(都需要有明确文档！)
- 接口请求需要有元信息：requestID，userID，timestamp，ip

## 待开发项
- 服务网关
- 缓存的设计、实现、与整合方式
- 服务管理后台：日志，服务监控（类似springboot-admin）

- 独立的鉴权服务
- 消息总线bus用以提供异步调用