const statusContainer = document.querySelector('#opportunity-status')

function clearStatus() {
    statusContainer.innerHTML = '';
}

function renderOpportunity(event) {
    clearStatus();

    fetch('/api/opportunity', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        response.json().then(data => {
            statusContainer.innerHTML = '';

            data.opportunities.forEach(job => {
                const jobLi = `${job.job_title} at ${job.company}`;
                const statusLiEl = document.createElement('li');
                
                statusContainer.appendChild(statusLiEl)
                statusLiEl.innerHTML = jobLi
            });

        })
    })
}

renderOpportunity();