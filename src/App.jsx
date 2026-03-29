const cities = [
  'Dubai',
  'London',
  'New York',
  'Miami',
  'West Palm',
  'Abu Dhabi',
  'Paris',
];

export default function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', color: '#111' }}>
      <h1>Pantry</h1>
      <h2>Your kitchen, outside home.</h2>

      <p>
        A members-first neighborhood kitchen and shared private chef concept.
        Register your interest for your city.
      </p>

      <h3>Locations</h3>
      <ul>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>

      <h3>Join Interest List</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form will be connected later');
        }}
      >
        <input
          placeholder="Name"
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '300px' }}
        />
        <input
          placeholder="Email"
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px 16px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}