export function randomId() {
  const id = String(
    Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 10000),
  ).padStart(5, '0');

  return id;
}
