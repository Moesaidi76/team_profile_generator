  
const Intern = require("../lib/Intern");

test("setting school via the constructor argument", () => {
    const testValue = "Columbia Engineering";
    const employee = new Intern("Grant", 1, "test@boxing.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Grant", 1, "test@boxing.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "Columbia Engineering";
    const employee = new Intern("Grant", 1, "test@boxing.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});