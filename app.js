const { prompt } = require('inquirer')
const fs = require('fs')

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'location',
    message: 'What city are you located in?'
  },
  {
    type: 'input',
    name: 'bio',
    message: 'Tell us about yourself.'
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'What is your LinkedIn URL?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub URL?'
  }
]


const writeToFile = (filename, data) => {
  let content = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.name}</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    </head>
    <body>
      <div class="container-fluid bg-danger text-light">
        <h1 class="container-fluid text-center">${data.name}</h1>
        <h2 class="container-fluid text-center">${data.location}</h2>
        <div>
          <p class="text-center">${data.bio}</p>
        </div>
      </div>
      <footer class="container-fluid bg-dark text-light">
        <a href="${data.linkedin}">Visit my LinkedIn profile</a>
        <a href="${data.github}">Visit my GitHub</a>
      </footer>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
  </html>
  `

  fs.writeFile(filename, content, (err) => {
    if (err) { console.log(err) }
    console.log(`${filename} added.`)
  })  
}

// call inquirer and prompt user for input
const initialize = () => {
  prompt(questions)
  .then(res => {
    writeToFile('./index.html', res)
  })
  .catch(err => console.log(err))
}

initialize()