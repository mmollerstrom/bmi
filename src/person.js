function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
};

Person.prototype.calculate_bmi = function(conversion) {
  calculator = new BMICalculator();
  if (conversion == "metric_bmi") {
    calculator.metric_bmi(this);
   }
  else {
    calculator.standard_bmi(this);
   }
};
