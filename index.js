const firstStep = document.querySelector("#step-1")
const secondStep = document.querySelector("#step-2")
const thirdStep = document.querySelector("#step-3")
const body = document.querySelector("body")
const img = document.createElement("img")
img.src = "https://c.tenor.com/u1sE4twRsfEAAAAC/cartman-south-park.gif"

function displayPlan() {
  const step1 = "Collect underpants."
  const step2 = "???"
  const step3 = "Profit!"
  firstStep.textContent = step1
  secondStep.textContent = step2
  thirdStep.textContent = step3
  body.append(img)
}
