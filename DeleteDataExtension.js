(function (/* root, doc */) {
<script runat="server">
Platform.Load("core","1.1");
var prox = new Script.Util.WSProxy();
var objectID = "pallavi";

var res = prox.deleteItem("DataExtension", { "CustomerKey":objectID });


</script>

}(window, document));
