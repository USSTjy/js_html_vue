import { JSquestionList } from "@/utils/index";
export default {
  data() {
    return {
      msg: "other-js基础",
      questionList: JSquestionList,
    };
  },
  methods: {
    transAnswer(data) {
      let result = "";
      if (data.indexOf("<br/>") > -1) {
        result = data.split("<br/>");
      } else {
        result = data;
      }
      let res = typeof result;

      if (res === "string") {
        return {
          type: "string",
          data: result,
        };
      } else {
        return {
          type: "object",
          data: result,
        };
      }
    },
  },
};
