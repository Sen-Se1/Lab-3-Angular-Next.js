export default function Child({ states }) {
  return (
    <div className="child-box">
      <p><strong>States passed from parent:</strong></p>
      <ul>
        {states.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
