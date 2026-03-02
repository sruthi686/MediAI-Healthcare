async function analyze() {
  const symptoms = document.getElementById("symptoms").value;

  const res = await fetch("/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symptoms })
  });

  const data = await res.json();

  document.getElementById("result").innerHTML = `
    <p>${data.diagnosis}</p>
    <p><strong>Recommended Specialist:</strong> ${data.specialist}</p>
  `;
}
