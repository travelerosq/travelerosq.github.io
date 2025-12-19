fetch("assets/data/gallery.json")
  .then(res => res.json())
  .then(artworks => {
    const gallery = document.getElementById("gallery");

    const borderMap = {
      wide: "border-wide.svg",
      square: "border-square.svg",
      tall: "border-tall.svg"
    };

    shuffleArray(artworks);

    artworks.forEach(art => {
      gallery.insertAdjacentHTML("beforeend", `
        <div class="art-piece ${art.type}">
          <div class="art-inner">
            <img src="assets/images/art/${art.file}" class="art-img" alt="">
          </div>
          <img src="assets/images/${borderMap[art.type]}" class="art-border" alt="">
        </div>
      `);
    });
  })
  .catch(err => console.error("Failed to load gallery:", err));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
