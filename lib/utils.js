export const handleAddToCart = (data) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex((item) => item.id === data.id);

    if (index === -1) {
        // If the item is not in the cart, add it
        cart.push(data);
    } else {
        // If the item is already in the cart, remove it
        cart.splice(index, 1);
    }

    // Update the cart in localStorage after modification
    localStorage.setItem('cart', JSON.stringify(cart));
};
