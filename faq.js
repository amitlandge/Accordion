const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
  faqData.forEach((item) => {
    let element = `<div class="faq">
    <div class="faq_header">
    <h3>${item.question}</h3>
    
    <div onclick="createFaq(${item.id})" class="show_btn">+</div>
    </div>
    
    <p class="hidden hidden-${item.id}">${item.answer}</p>
    </div>`;

    accordianBody.innerHTML += element;
  });
}
showFaq();

function createFaq(id) {
  let show = document.querySelector(`.hidden-${id}`);
  show.classList.toggle("show");
  btnStatusUpdate(id);
}

function btnStatusUpdate(id) {
  let show = document.querySelector(`.hidden-${id}`);
  let sibling = show.parentNode.firstElementChild;
  let lastChild = sibling.lastElementChild;

  if (lastChild.innerHTML == "-") {
    lastChild.innerHTML = "+";
  } else if (lastChild.innerHTML == "+") {
    lastChild.innerHTML = "-";
  }
  console.log(lastChild);
}
