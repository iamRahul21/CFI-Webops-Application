
function main() {

    const quoteElement = document.querySelector('.quote');
  
    fetch('http://localhost:3000/get-quote')
      .then((response) => {
        return response.json()
      }
      )
      .then(data => {
  
        quoteElement.textContent = data.quote;
      })
      .catch(error => {
        quoteElement.textContent = 'Error fetching quote';
        console.error(error);
      });
  }
  
  function main2() {
    const quoteElement = document.querySelector('.quote');
    quoteElement.textContent = "Test";
  
  }
  main();