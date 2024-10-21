// Dados de exemplo
const people = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
    { name: "Jack Johnson", email: "jack@example.com", phone: "456-789-1230" }
];

function searchPerson() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');

    // Limpar resultados anteriores
    resultsContainer.innerHTML = '';
    noResults.style.display = 'none';

    // Procurar pessoas
    const results = people.filter(person =>
        person.name.toLowerCase().includes(searchTerm)
    );

    if (results.length > 0) {
        results.forEach(person => {
            const card = document.createElement('div');
            card.className = 'card';

            const name = document.createElement('h3');
            name.textContent = person.name;

            const email = document.createElement('p');
            email.textContent = `Email: ${person.email}`;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${person.phone}`;

            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(phone);

            resultsContainer.appendChild(card);
        });
    } else {
        noResults.style.display = 'block';
    }
}
