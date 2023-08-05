fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                
                data.forEach(post => {
                    console.log(post);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });