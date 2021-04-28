// const myMixin = {
//     data(){
//         return {
//             msg: 'hello'
//         }
//     },
//     created(){
//         this.hello();
//     },
//     methods:{
//         hello(){
//             console.log('dddd hello!!!!', this.msg)
//         }
//     }

// }
// export default myMixin

export const myMixin = (type, data) => {
  return {
    data() {
      return {
        msg: "hello",
      };
    },
    created() {
      this.hello();
    },
    methods: {
      hello() {
        this.mixinsMsg = this.testmsg + " " + this.msg;
      },
    },
  };
};

export const mytestMixin = "data hellos";
