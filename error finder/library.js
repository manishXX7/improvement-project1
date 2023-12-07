function searchBooks() {
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();

    if (searchQuery.length === 0) {
        document.getElementById('searchResults').innerText = 'Please enter a search query.';
    } else {

        let books = {
            'book 1': 'Author A',
            'book 2': 'Author B',
            'book 3': 'Author C'
        };

        const result = books[searchQuery];

        if (result) {
            const resultHTML = `<p>${searchQuery} by ${result}</p>`;
            document.getElementById('searchResults').innerHTML = resultHTML;
        } else {
            document.getElementById('searchResults').innerText = 'No books available.';
        }
    }
}



document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value;
    const authorName = document.getElementById('authorName').value;

    let confirmationMessage = '';
    if (bookTitle !== '' && authorName !== '') {
        confirmationMessage = `Thank you for recommending "${bookTitle}" by ${authorName}.`;
    } else {
        confirmationMessage = 'Please enter both book title and author name.';
    }

    document.getElementById('recommendationConfirmation').innerText = confirmationMessage;
});