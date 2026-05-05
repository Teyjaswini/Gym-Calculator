function calculateCalories() {
  let hours = parseFloat(document.getElementById("hours").value);

  if (isNaN(hours) || hours <= 0) {
    document.getElementById("result").innerText = "⚠️ Please enter valid hours!";
    return;
  }

  let calories = hours * 400;

  document.getElementById("result").innerText =
    "🏋️ Calories Burned: " + calories + " kcal";
}