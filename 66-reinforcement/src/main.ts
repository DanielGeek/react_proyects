import './style.css';

// import './bases/01-const-let';
import './bases/02-template-string';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello World</h1>
  </div>
`;
