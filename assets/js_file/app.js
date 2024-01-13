// paragraph database

const paraDatabase = [
  "Frontend Mentor offers realalistic coding challenges to help developers improve their front end coding skills with projects in HTML, CSS, and JavaScript. Its suitable for all levels and ideal for portfolio building",
  "Frontend Mentor offers both free and premium plans. The free plan provides access to a variety of coding challenges to help developers improve their skills in HTML, CSS, and JavaScript. However, certain additional features and challenges are available under the premium plan.",
  "yes, you can use Frontend Mentor projects in your portfolio. Frontend Mentor encourages developers to use the projects they complete on the platform in their portfolios. It is a great way to showcase your coding skills and demonstrate your ability to work on real-world projects.",
  "The platform offers a blog and guides section where you can find articles and tutorials on various web development topics. These resources can be valuable for learning new concepts",
];

const sections = document.querySelectorAll(".bodyTexts");

sections.forEach((section, index) => {
  const img = section.querySelector("img");
  const newPTag = document.createElement("p");
  let isActive = false;

  section.addEventListener("click", () => {
    console.log(section, index);
    if (isActive === false) {
      img.src = `assets/images/icon-minus.svg`;
      newPTag.innerText = paraDatabase[index];
      section.append(newPTag);
      isActive = true;
    } else {
      newPTag.remove();
      isActive = false;
      img.src = `assets/images/icon-plus.svg`;
    }
  });
});
