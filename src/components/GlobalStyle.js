import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@100;200;300;400;500;600;800;900&display=swap);

body {
  font-family: 'Nunito', sans-serif;
}




*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}



:root {
  --primary-color: #2695eb;
  --secondary-color: #05d864;
}

/* BASE STYLES */


html,
body {

 
}

body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-track {
  background: #1f1e1e;
}

body::-webkit-scrollbar-thumb {
  background: #3c3c3c;
  border-radius: 50px;
  border: 3px solid #3c3c3c;
}

h1 {
  font-size: 30px;
  font-weight: 500;
}

p {
  margin: 20px 0 10px;
  font-size: 1.1rem;
}



`;

export default GlobalStyle