document.getElementById('food-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const foodName = document.getElementById('food-name').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    const foodItem = {
        foodName,
        description,
        location
    };

    addFoodItem(foodItem);
    clearForm();
});

function addFoodItem(item) {
    const foodList = document.getElementById('food-list');
    const foodDiv = document.createElement('div');
    foodDiv.classList.add('food-item');

    foodDiv.innerHTML = `
        <h3>${item.foodName}</h3>
        <p>${item.description}</p>
        <p><strong>Location:</strong> ${item.location}</p>
    `;

    foodList.appendChild(foodDiv);
}

function clearForm() {
    document.getElementById('food-name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('location').value = '';
}
