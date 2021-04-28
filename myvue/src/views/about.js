import { mapState, mapMutations } from "vuex";
export default {
  name: "About",
  components: {},
  data() {
    return {
      title: "测试store",
    };
  },
  filters: {},
  computed: {
    storeData: function() {
      console.log("dddd", this.$store);
      return this.$store.state.storeData;
    },
    testData: {
      set: function() {
        return this.$store.commit("test/modulesMutations", "testData-hello");
      },
      get: function() {
        return this.$store.state.test.modulesData;
      },
    },
    bookData: {
      set: function() {
        return this.$store.commit(
          "book/modulesMutations",
          "testData-hello-book"
        );
      },
      get: function() {
        return this.$store.state.book.modulesData;
      },
    },
    ...mapState({
      twoRootData: "storeData",
      //   twoBookData: (state) => state.book.modulesData,
      //   twoTestData: (state) => state.test.modulesData,
    }),
    ...mapState("book", {
      twoBookData: "modulesData",
    }),
    ...mapState("test", {
      twoTestData: "modulesData",
    }),
    ...mapState("myModule", {
      myModuleData: "data",
    }),
  },
  methods: {
    ...mapMutations("book", {
      bookModules: "modulesMutations",
    }),
    ...mapMutations("test", {
      testModules: "modulesMutations",
    }),
    handleClick() {
      this.testModules("ddddd");
      //   this.$store.commit("test/modulesMutations", "testData-hello");
      console.log("samrt-list");
    },
    handleClickTwo() {
      //   this.$store.commit("book/modulesMutations", "testData-hello--book");
      console.log("samrt-list-two");
      this.bookModules("book");
    },
  },
};
