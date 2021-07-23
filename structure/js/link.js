var link = { traversal };
function traversal(linkedList, callback) {
  var current = linkedList;
  function link() {
    if (current.head) {
      current = current.head;
      link(current);
      callback(current.value);
    } else {
      while (current.next !== null) {
        callback(current.value);
        current = current.next;
        link(current);
      }
    }
  }
  link();
}
module.exports = link;
