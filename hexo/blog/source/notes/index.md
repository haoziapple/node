---
title: notes
noDate: 'true'
---

# 个人笔记

## interceptor与filter区别
_org.springframework.web.servlet.HandlerInterceptor_
>HandlerInterceptor is basically similar to a Servlet 2.3 Filter, but in contrast to the latter it just allows custom pre-processing with the option of prohibiting the execution of the handler itself, and custom post-processing. Filters are more powerful, for example they allow for exchanging the request and response objects that are handed down the chain. Note that a filter gets configured in web.xml, a HandlerInterceptor in the application context.
***
>As a basic guideline, fine-grained handler-related preprocessing tasks are candidates for HandlerInterceptor implementations, especially factored-out common handler code and authorization checks. On the other hand, a Filter is well-suited for request content and view content handling, like multipart forms and GZIP compression. This typically shows when one needs to map the filter to certain content types (e.g. images), or to all requests.

- [个人笔记](#个人笔记)
    - [interceptor与filter区别](#interceptor与filter区别)