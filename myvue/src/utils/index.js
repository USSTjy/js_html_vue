const JSquestionList = [
  {
    question: "JS的基础类型",
    answer: "",
  },
  {
    question: "JS和别的语言的区别",
    answer: "",
  },
  {
    question: "let const var的区别？变量提升的理解",
    answer: "",
  },
  {
    question: "什么是闭包？如何产生的？闭包的作用",
    answer: "",
  },
  {
    question: "this的指向问题，call bind apply",
    answer: "",
  },
  {
    question: "ES6的新特性？symbol怎么用？",
    answer: "",
  },
  {
    question: "箭头函数？和普通函数有什么区别",
    answer: "",
  },

  {
    question: "JS怎么判断数据类型？instanceof的原理",
    answer: "",
  },

  {
    question: "JS 进程、线程 协程？",
    answer: "",
  },
  {
    question: "async和await promise的应用？",
    answer: "",
  },
  {
    question: "内存泄漏？内存泄漏的场景及如何解决？内存泄漏的排查工具",
    answer: "",
  },
  {
    question: "0.11+0.22===0.33？二进制浮点数对小数的处理",
    answer: "",
  },
  {
    question: "异步任务JS是怎么处理的？eventloop的流程及宏任务与微任务的介绍",
    answer: "",
  },
  {
    question: "点击事件的几个阶段？eventDefault。。。",
    answer: "",
  },
  {
    question: "手写继承，foreach和map的区别？",
    answer: "",
  },
  {
    question: "JS原型链和继承，_proto_和prototype分别存储在哪里",
    answer: "",
  },

  {
    question: "JS作用域",
    answer: "",
  },

  {
    question: "new 的执行过程",
    answer: "",
  },
  {
    question: "es module和commonJS的区别",
    answer: "",
  },
  {
    question: "节流防抖？",
    answer: "",
  },
  {
    question: "node中的require加载文件的顺序",
    answer: "",
  },
  {
    question:
      "JS中数字最大限制问题，实现两个数字相加后的和（考虑到数值超出最大值2^53情况）",
    answer: "",
  },
  {
    question: "实现继承的所有方式",
    answer: "",
  },
  {
    question: "隐式原型和显式原型有什么用",
    answer: "",
  },

  {
    question: "节流中如何实现只有刚输入的第一次请求和输入完毕后的最后一次请求",
    answer: "",
  },
  {
    question: "回文？字符串中的所有回文",
    answer: "",
  },
  {
    question: "垃圾回收机制",
    answer: "",
  },
  {
    question: "什么是事件冒泡，它是如何工作的？",
    answer: "",
  },
  {
    question: "REST是什么,为什么使用它?",
    answer: "",
  },
  {
    question: "Array都用过什么方法",
    answer: "",
  },
  {
    question: "promise、generator、async/await 有什么区别",
    answer: "",
  },
  {
    question: "异步有哪些场景，怎么解决异步",
    answer: "",
  },
  {
    question: "js的构造函数、工厂模式、单例模式、观察者模式、装饰器模式",
    answer: "",
  },
  {
    question: "eventLoop原理",
    answer: "",
  },
  {
    question: "什么是变量提升、函数提升？",
    answer: "",
  },
  {
    question: "防抖和节流讲原理，手写代码，逐行讲解",
    answer: "",
  },
  {
    question: "手写一个nodejs中间件",
    answer: "",
  },

  {
    question: "手写一个简版redux和react-redux；",
    answer: "",
  },
  {
    question: "setTimeout实现setInterval",
    answer: "",
  },
  {
    question: "fetch,ajax,axios区别?",
    answer: "",
  },
  {
    question:
      "封装一个request函数，多个相同的请求过来不用发新的请求，直接读取第一个的结果",
    answer: "",
  },
  {
    question: "实现一个打点计时器",
    answer: "",
  },
  {
    question: "六种常见设计模式，手写简单demo",
    answer: "",
  },
  {
    question: "什么叫优雅降级和渐进增强？",
    answer: "",
  },
  {
    question: "请解释一下JavaScript的同源策略",
    answer: "",
  },
  {
    question: "AMD和CMD规范的区别？",
    answer: "",
  },
  {
    question: "为什么用requestAnimationFrame来代替setTimeout",
    answer: "",
  },
  {
    question: "二分查找的时间复杂度怎么求，是多少",
    answer: "",
  },
  {
    question: "ajax，get和post的区别，还有一些对于敏感信息的转码？",
    answer: "",
  },
  {
    question:
      "promise和setTimeout有什么区别，他们怎么执行，什么是宏任务什么是微任务，执行顺序又是怎么样的？",
    answer: "",
  },
  {
    question: "js介绍下自己对面向对象 (封装 继承 多态的理解)",
    answer: "",
  },
  {
    question: "你知道强缓存和协商缓存吗？他们都是通过那几个字段来判断的？",
    answer: "",
  },
  {
    question:
      "如何通过a(2)(3)() 来得到2*3的乘积？该方法要实现有参数传入时，计算乘积，没有参数传入时，返回乘积的结果。",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "用最简洁的代码实现数组去重",
    answer: "",
  },
];
const HTMLquestionList = [
  {
    question: "http和https的区别",
    answer: "",
  },
  {
    question:
      "HTTPS为什么更安全？ 说一下加密的过程？为什么要使用对称加密和非对称加密？",
    answer: "",
  },
  {
    question: "说一下http缓存",
    answer: "",
  },
  {
    question: "http建立过程，头部字段？三次握手过程？",
    answer: "",
  },
  {
    question: "http状态码 各个状态对应的含义",
    answer: "",
  },
  {
    question: "TCP和UDP的区别?哪个更安全？",
    answer: "",
  },

  {
    question: "输入URL到渲染过程",
    answer: "",
  },
  {
    question: "前后端的跨域请求方式？jsonp的原理",
    answer: "",
  },
  {
    question: "假设实现一个搜索框输入文字，有什么需要注意？",
    answer: "",
  },
  {
    question: "假设输入框文字与拼音一起输入，实现准确搜索的方法？",
    answer: "",
  },
  {
    question:
      "描述几种服务器和客户端之间的通信方式。描述一些网络协议是工作的（IP、TCP、http/S/2、UDP、RTC、DNS等）",
    answer: "",
  },
  {
    question: "localStorage、sessionStorage 区别；应用业务场景",
    answer: "",
  },
  {
    question: "请介绍下cache-control",
    answer: "",
  },
  {
    question: "请你谈谈Cookie的弊端",
    answer: "",
  },
  {
    question: "前端性能优化的理解",
    answer: "",
  },
  {
    question: "MV*框架的意义",
    answer: "",
  },
  {
    question: "盒模型和对BFC规范的理解",
    answer: "",
  },
  {
    question: "减少页面加载时间的方法",
    answer: "",
  },
  {
    question: "测试代码性能的工具",
    answer: "",
  },
  {
    question: "WEB应用从服务器主动推送Data到客户端有那些方式？",
    answer: "",
  },
  {
    question: "列举IE与其他浏览器不一样的特性？",
    answer: "",
  },
  {
    question: "网站重构的理解",
    answer: "",
  },
  {
    question: "XSS是什么，攻击原理，怎么预防。",
    answer: "",
  },
  {
    question:
      "业务场景：比如说百度的一个服务不想让阿里使用，如果识别到是阿里的请求，然后跳转到404或者拒绝服务之类的？",
    answer: "",
  },
  {
    question: "怎么保证传输的密钥的安全呢，会不会被篡改呢？",
    answer: "",
  },
  {
    question: "https的耗时都比http长，怎么避免这个问题？什么时候用https？等等",
    answer: "",
  },
  {
    question: "怎么实现草稿，多终端同步，以及冲突问题？",
    answer: "",
  },
  {
    question:
      "http的缓存，强缓存和弱缓存有什么区别？他们的一些请求头和响应头是怎么样的？强缓存命中的时候，请求回返回什么样的状态码？",
    answer: "",
  },
  {
    question: "cpu是如何开启进程、如何开始执行指令集？",
    answer: "",
  },
  {
    question: "Hubuilder可以一转三的原理是什么？",
    answer: "",
  },
  {
    question: "HTML parser --> DOM Tree",
    answer: "",
  },
  {
    question: "问到JOSNP原理，后台返回什么？什么时候出现跨域？",
    answer: "",
  },
  {
    question: "dom树构建",
    answer: "",
  },
  {
    question: "CSS parser --> Style Tree",
    answer: "",
  },
  {
    question: "移动端rem布局如何实现?简述原理?",
    answer: "",
  },
  {
    question: "移动端如何实现下拉到底部 跟随移动 结束后回弹的动画?",
    answer: "",
  },
  {
    question: "移动端如何优化首页白屏时间过长?",
    answer: "",
  },
  {
    question: "回流和重绘？如何规避带来的性能开销？；",
    answer: "",
  },
  {
    question: "cookie的samesite属性；",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];
const webackQuestionList = [
  {
    question:
      "webpack机制是什么，主要哪几部分，优化打包方法有哪些，都用过什么loader与plugin？",
    answer: "",
  },
  {
    question: "sourcemap是什么？",
    answer: "",
  },
  {
    question: "git rebase什么作用",
    answer: "",
  },
];
export { JSquestionList, HTMLquestionList, webackQuestionList };
