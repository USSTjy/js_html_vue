const JSquestionList = [
  {
    question: "JS的基础类型",
    answer:
      "值类型(基本类型):字符串（String）、数字（Number）、布尔（Boolean）、空（Null）、未定义（Undefined）、Symbol;<br/>引用数据类型: 对象（Object）、数组（Array）、函数（Function）",
  },
  {
    question: "Symbol的使用",
    answer:
      "Symbol 本质上是一种唯一标识符，可用作对象的唯一属性名;<br/>ymbol 数据类型的特点是唯一性，即使是用同一个变量生成的值也不相等;<br/>Symbol 数据类型的另一特点是隐藏性，for···in，object.keys() 不能访问;<br/>但是也有能够访问的方法：Object.getOwnPropertySymbols(obj),Object.getOwnPropertySymbols 方法会返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值",
  },
  {
    question: "JS和别的语言的区别",
    answer:
      "JS是一种轻量级的编程语言;<br/>S是可以插入HTML页面的编程代码;<br/>JS插入HTML页面后，可由所有的现代浏览器执行",
  },
  {
    question: "let const var的区别？变量提升的理解",
    answer: `var是ES5提出的，let和const是ES6提出的；<br/>
    const声明的是常量，必须赋值（一旦声明必须赋值，不能使用null占位；声明后不能再修改；如果声明的是复合类型数据，可以修改其属性）；<br/>
    let和var声明的是变量，声明之后可以更改，声明时不赋值；<br/>
    var允许重复声明变量，后一个变量会覆盖前一个变量。let和const在同一作用域不允许重复声明变量，会报错；<br/>
    var声明的变量存在变量提升（将变量提升到当前作用域的顶部）。即变量可以在声明之前调用，值为undefined。
    let和const不存在变量提升。即它们所声明的变量一定要在声明后使用，否则报ReferenceError错。<br/>
    var不存在块级作用域。let和const存在块级作用域。
    `,
  },
  {
    question: "JS中变量的存储问题",
    answer: `JS中的变量是保存在栈内存中的：<br/>
    基本数据类型的值直接在栈内存中存储；值与值之间是独立存在的，修改一个变量不会影响其他变量；<br/>
    对象（引用数据类型）是保存到堆内存中的，每创建一个新的对象，就会在堆内存中开辟一个新的空间；而变量保存的是对象的内存地址（对象的引用）,如果两个变量保存的是同一个对象引用，当一个变量修改属性是，另一个也会受到影响；<br/>
    当清空一个变量的值时，只是断开该变量与对象的联系，另一个对象并不受影响<br/>
    当比较两个基本数据类型的值时，就是比较值；当比较两个引用数据类型时，比较的是对象的内存地址；
    `,
  },
  {
    question: "什么是闭包？如何产生的？闭包的作用",
    answer: `js的特殊之处在于：函数内部可以直接读取全局变量，在函数外部无法读取函数内的局部变量。<br/>
      闭包的含义就是从函数外部读取函数内的局部变量；在本质上，闭包就是将函数内部和函数外部连接起来的桥梁。<br/>
      闭包的作用：一是可以读取函数内部的变量，二是让这些变量的值始终保存在内存中。<br/>`,
  },
  {
    question: "JS中的词法作用域(静态作用域)和动态作用域",
    answer: `JavaScript没有用动态作用域概念，但 this 机制却和动态作用域类似！<br/>
    JavaScript是通过作用域链的方式进行变量查找的，而JS作用域链是词法作用域，也就做静态作用域！<br/>
    词法作用域：在函数声明（定义）时确定的;<br/>动态作用域：在函数调用时确定的.
    <br/>`,
  },
  {
    question: "this的指向问题，call bind apply",
    answer:
      "call和apply都是改变上下文中的this并立即执行这个函数，bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加，这是它们的区别，根据自己的实际情况来选择使用。",
  },
  {
    question: "ES6的新特性？symbol怎么用？",
    answer: "",
  },
  {
    question: "箭头函数？和普通函数有什么区别",
    answer:
      "es6中新增了箭头函数，箭头函数与通过function声明的函数不同，它的this是使用的声明时上下文中的this.并且不可通过apply, call等改变；<br/>" +
      "箭头函数不能作为构造函数，不能new,不然会报错;<br/>" +
      "箭头函数不能绑定arguments;<br/>" +
      "箭头函数，this代表上层对象，若无自定义上层，则代表window；普通函数，this代表当前对象；<br/>" +
      "箭头函数没有原型属性，prototype是属于普通函数用于获取原型对象的。",
  },

  {
    question: "JS怎么判断数据类型？instanceof的原理",
    answer:
      "4种方法判断数据类型: typeof/toString/constructor/instanceof;<br/>" +
      "instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。",
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
    answer:
      "在 JavaScript 中整数和浮点数都属于Number数据类型，所有数字(包括整数)都是以 64 位浮点数形式储存。JavaScript 里的数字是采用IEEE 754标准的 64 位双精度浮点数，计算机进行计算的时候，会把数字转换为二进制，进行运算之后再转换为十进制，但是运算过程中小数部分最多支持52位，就会出现运算精度问题。",
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

function bibaoTest() {
  var cat = "有鱼";
  function student() {
    var cat = "年年";
    function person2() {
      console.log(cat);
    }
    return person2;
  }
  var std = student();
  return std();
}
export { JSquestionList, HTMLquestionList, webackQuestionList, bibaoTest };
