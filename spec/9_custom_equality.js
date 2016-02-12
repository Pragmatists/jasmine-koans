describe("custom equality", function () {
    beforeEach(function () {
        pending();
    });


    beforeEach(function () {
        //Add custom equality tester using "jasmine.addCustomEqualityTester" that will be
        //comparing length of string for equality
    });

    it("should be custom equal because has same length", function () {
        expect("aaa").toEqual("bbb");
    });

    it("should be custom not equal because has diferent length", function () {
        expect("aaa").not.toEqual("bbbb");
    });
});
