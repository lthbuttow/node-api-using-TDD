test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('Devo saber conhecer as principais assertivas do jest', () => {
  const object = {
    name: 'John',
    mail: 'john@mail.com',
  };
  expect(object).toHaveProperty('name');
  expect(object).toHaveProperty('name', 'John');
  const object2 = {
    name: 'John',
    mail: 'john@mail.com',
  };
  expect(object).toEqual(object2);
});
