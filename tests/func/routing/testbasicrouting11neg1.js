/*
 * This is a basic func test for a Routing application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
    var suite = new Y.Test.Suite("Routing");
    
    suite.add(new Y.Test.Case({
	     "test BasicRouting11Neg1": function(){   
              Y.Assert.areEqual('/you/found/a/bad/path', Y.one('#url').get('innerHTML'));
              Y.Assert.areEqual('', Y.one('#name').get('innerHTML'));
              Y.Assert.areEqual('', Y.one('#call').get('innerHTML'));
              Y.Assert.areEqual('', Y.one('#params').get('innerHTML'));
              Y.Assert.areEqual('', Y.one('#verbs').get('innerHTML'));
         }
   }));    

   Y.Test.Runner.add(suite);
});
