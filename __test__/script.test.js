import Validator from "../src/script";
test("Checking the correct username format", () => {
  const result = new Validator("Alex-777_a").validateUsername();

  expect(result).toBe("Alex-777_a");
});

test("Checking the incorrect username format", () => {
  const result = new Validator("77Alex").validateUsername();

  expect(result).toBe("Invalid username!");
});

test("Checking the incorrect username format", () => {
  const result = new Validator("Alex77").validateUsername();

  expect(result).toBe("Invalid username!");
});

test("Checking the incorrect username format", () => {
  const result = new Validator("Alex_7777-a").validateUsername();

  expect(result).toBe("Invalid username!");
});

test("Checking the incorrect username format", () => {
  const result = new Validator("-Alex77_77-a").validateUsername();

  expect(result).toBe("Invalid username!");
});

test("Checking the incorrect username format", () => {
  const result = new Validator("Alex_").validateUsername();

  expect(result).toBe("Invalid username!");
});

test("Checking the incorrect username format", () => {
  const result = new Validator("Алекс").validateUsername();

  expect(result).toBe("Invalid username!");
});
