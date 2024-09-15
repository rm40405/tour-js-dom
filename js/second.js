const main = document.getElementById('second-section');
const section = document.createElement('section');

section.innerHTML = `
    <h2>Section 3</h2>
    <p>This is section 3.</p>
    <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    </ul>
    <button>Click Me</button>
    `
    main.appendChild(section);
