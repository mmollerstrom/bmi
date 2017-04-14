describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });


  beforeEach(function() {
    person = new Person({weight: 198.4, height: 73.2});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using standard method", function() {
    calculator.standard_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });
});
