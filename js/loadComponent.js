async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error("Component not found");
    const html = await res.text();
    const container = document.getElementById(id);
    container.innerHTML = html;

    container.querySelectorAll('script').forEach(oldScript => {
      const script = document.createElement('script');
      if (oldScript.src) {
        script.src = oldScript.src;
      } else {
        script.textContent = oldScript.textContent;
      }
      document.body.appendChild(script);
      oldScript.remove();
    });
  } catch (err) {
    console.error(err);
  }
}
