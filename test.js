// Unit Tests for the add method of Calculator class

// Test 1: Adding a positive number
function testAddPositiveNumber() {
    const calculator = new Calculator();
    calculator.add(5);
    const result = calculator.getValue();
    console.log("Test Add Positive Number: ", result === 5 ? "Passed" : "Failed");
}

// Test 2: Adding a negative number
function testAddNegativeNumber() {
    const calculator = new Calculator();
    calculator.add(-3);
    const result = calculator.getValue();
    console.log("Test Add Negative Number: ", result === -3 ? "Passed" : "Failed");
}

// Test 3: Adding zero
function testAddZero() {
    const calculator = new Calculator();
    calculator.add(0);
    const result = calculator.getValue();
    console.log("Test Add Zero: ", result === 0 ? "Passed" : "Failed");
}

// Test 4: Chaining add operations
function testChainAddOperations() {
    const calculator = new Calculator();
    calculator.add(2).add(3).add(5);
    const result = calculator.getValue();
    console.log("Test Chain Add Operations: ", result === 10 ? "Passed" : "Failed");
}

// Test 5: Adding a decimal number
function testAddDecimalNumber() {
    const calculator = new Calculator();
    calculator.add(2.5);
    const result = calculator.getValue();
    console.log("Test Add Decimal Number: ", result === 2.5 ? "Passed" : "Failed");
}

// Execute all tests
function runAddTests() {
    testAddPositiveNumber();
    testAddNegativeNumber();
    testAddZero();
    testChainAddOperations();
    testAddDecimalNumber();
}

// Call the function to run all tests
runAddTests();