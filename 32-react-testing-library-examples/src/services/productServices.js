export const saveProduct = ({ name, size, type }) =>
  fetch('/products', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, size, type }),
});

export default {
  saveProduct,
}