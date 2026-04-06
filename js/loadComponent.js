async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error("Component not found");
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}
