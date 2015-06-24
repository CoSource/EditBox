/**
 * Created by Richard on 24/06/2015.
 */
describe('Edit Box', function() {

    var scope,
        element,
        compiled,
        html,
        someone;

    beforeEach(module("app"));
    beforeEach(module('editBox.html'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        testContent = "test content";
        html = "<edit-box>" + testContent + "</edit-box>";
        compiled = $compile(html);
        element = compiled(scope);
        console.log(element);
        scope.$digest();

    }));
    it('transclude should contain content', function(){
        expect(element.text()).toContain(testContent);
    })
});
