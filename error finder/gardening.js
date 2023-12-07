function filterPlants() {
    const filter = document.getElementById('filter').value;


    let plants = {
        flowers: ['Rose', 'Tulip', 'Daisy'],
        vegetables: ['Tomato', 'Cucumber', 'Pepper'],
        fruits: ['Apple', 'Pear', 'Cherry']
    };

    let filteredPlants = [];

    if (filter === 'all') {
        // If the filter is "all," concatenate all plant arrays
        filteredPlants = plants.flowers.concat(plants.vegetables, plants.fruits);
    } else {
        // Otherwise, use the selected filter
        filteredPlants = plants[filter];
    }
 
    let plantListHTML = '';
    filteredPlants.forEach(function(plant) {
        plantListHTML += '<p>' + plant + '</p>'; 
    });
    document.getElementById('plantList').innerHTML = plantListHTML;
}

document.getElementById('forumPostForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;


    if (postTitle === '' || postContent === '') {
        alert('Please fill in both title and content for your post.');
    } else {
        
        alert(`Your post titled "${postTitle}" has been added.`);
    }
});