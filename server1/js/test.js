// Function to simulate inserting predefined rows into the database
function insertPredefinedRows() {
    // Array of predefined patient data
    const patients = [
        { name: 'Sara Brown', dob: '1901-01-01' },
        { name: 'John Smith', dob: '1941-01-01' },
        { name: 'Jack Ma', dob: '1961-01-30' },
        { name: 'Elon Musk', dob: '1999-01-01' }
    ];

    // Simulate server response
    patients.forEach(patient => {
        document.getElementById('responseArea').textContent += `Simulated Insert: ${patient.name} - Success!\n`;
    });
}

// Event listener for the insert button
document.getElementById('insertBtn').addEventListener('click', insertPredefinedRows);

// Function to submit SQL queries
function submitQuery() {
    const query = document.getElementById('queryText').value.trim();
    const method = query.toLowerCase().startsWith('select') ? 'GET' : 'POST';

    // Simulate different responses based on the query type
    if (method === 'GET') {
        // Simulate a SELECT query response
        document.getElementById('responseArea').textContent = `Simulated SELECT query response: Data for query "${query}"`;
    } else if (method === 'POST') {
        // Simulate an INSERT query response
        document.getElementById('responseArea').textContent = `Simulated INSERT query response: Inserted data for query "${query}"`;
    } else {
        alert('Only SELECT or INSERT queries are allowed.');
    }
}

// Event listener for the query submission button
document.getElementById('submitBtn').addEventListener('click', submitQuery);
