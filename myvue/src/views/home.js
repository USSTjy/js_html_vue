// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SmartList from "@/components/smart-list.vue";
import SmartListTwo from "@/components/smart-list-two.vue";
import { formatId, filterMessage, filterParams } from "@/filters";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SmartList,
    SmartListTwo,
  },
  data() {
    return {
      list: [],
      rawId: "1212121212",
      message: "nonon",
      filters: "afaffaff",
    };
  },
  filters: {
    formatId,
    filterMessage,
    filterParams,
  },
  methods: {
    handleClick() {
      console.log("samrt-list");
    },
    handleClickTwo() {
      console.log("samrt-list-two");
    },
  },
};
