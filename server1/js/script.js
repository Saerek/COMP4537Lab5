// Function to insert predefined rows into the database
function insertPredefinedRows() {
    // Array of predefined patient data
    const patients = [
        { name: 'Sara Brown', dob: '1901-01-01' },
        { name: 'John Smith', dob: '1941-01-01' },
        { name: 'Jack Ma', dob: '1961-01-30' },
        { name: 'Elon Musk', dob: '1999-01-01' }
    ];

    // Send each patient data as a POST request to the server
    patients.forEach(patient => {
        fetch('https://your-backend-server2.com/api/v1/patient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patient)
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('responseArea').textContent += `Inserted: ${patient.name} - Response: ${data}\n`;
        })
        .catch(error => console.error('Error:', error));
    });
}

// Event listener for the insert button
document.getElementById('insertBtn').addEventListener('click', insertPredefinedRows);

// Function to submit SQL queries
function submitQuery() {
    const query = document.getElementById('queryText').value.trim();
    const method = query.toLowerCase().startsWith('select') ? 'GET' : 'POST';
    const endpoint = 'https://your-backend-server2.com/api/v1/sql';

    if (method === 'GET') {
        // Encode the query for URL parameters
        const url = `${endpoint}?query=${encodeURIComponent(query)}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('responseArea').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
    } else if (method === 'POST') {
        // Send the INSERT query as a POST request
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('responseArea').textContent = data;
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Only SELECT or INSERT queries are allowed.');
    }
}

// Event listener for the query submission button
document.getElementById('submitBtn').addEventListener('click', submitQuery);
