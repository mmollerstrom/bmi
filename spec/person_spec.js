  describe("Person", function() {
    var person;

  beforeEach(function() {
    person = new Person({weight: 76, height: 180});
  });

  it("should have weight of 76", function() {
  expect(person.weight).toEqual(76);
});

  it("should have height of 180", function() {
  expect(person.height).toEqual(180);
  });
});
/*
describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
  });

  it("should have weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(186);
  });
});
*/
