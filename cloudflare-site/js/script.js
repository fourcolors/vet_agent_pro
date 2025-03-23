// Initialize htm with Preact
const html = htm.bind(preact.h);
const { useState, useEffect, render } = preact;

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return html`
    <form id="contact-form" onSubmit=${handleSubmit}>
      <div class="form-group">
        <label for="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value=${formData.name} 
          onChange=${handleChange} 
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value=${formData.email} 
          onChange=${handleChange} 
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          value=${formData.message} 
          onChange=${handleChange} 
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  `;
};

// Navigation Component
const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link) => (e) => {
    e.preventDefault();
    setActiveLink(link);
    document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
  };

  return html`
    <nav>
      <ul>
        <li>
          <a href="#home" onClick=${handleClick('home')} class=${activeLink === 'home' ? 'active' : ''}>Home</a>
        </li>
        <li>
          <a href="#about" onClick=${handleClick('about')} class=${activeLink === 'about' ? 'active' : ''}>About</a>
        </li>
        <li>
          <a href="#contact" onClick=${handleClick('contact')} class=${activeLink === 'contact' ? 'active' : ''}>Contact</a>
        </li>
      </ul>
    </nav>
  `;
};

// App Component
const App = () => {
  return html`
    <div class="app-container">
      <header>
        <h1>Welcome to My HTM Cloudflare Pages Site</h1>
        <${Navigation} />
      </header>

      <main>
        <section id="home">
          <h2>Home</h2>
          <p>This is a simple website built with HTM that can be deployed to Cloudflare Pages.</p>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>This template was created using HTM (Hyperscript Tagged Markup) as a starting point for Cloudflare Pages projects.</p>
          <p>HTM is a JSX-like syntax in plain JavaScript with no transpilation needed.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Feel free to reach out if you have any questions!</p>
          <${ContactForm} />
        </section>
      </main>

      <footer>
        <p>&copy; 2025 My HTM Cloudflare Pages Site. All rights reserved.</p>
      </footer>
    </div>
  `;
};

// Render the app
document.addEventListener('DOMContentLoaded', () => {
  render(html`<${App} />`, document.getElementById('app'));
});
