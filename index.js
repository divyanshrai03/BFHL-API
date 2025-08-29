const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

function processData(inputArray) {
  let even = [];
  let odd = [];
  let alphabets = [];
  let specials = [];
  let sum = 0;

  // classify input
  inputArray.forEach(item => {
    if (!isNaN(item)) {
      const num = parseInt(item, 10);
      if (num % 2 === 0) even.push(item.toString());
      else odd.push(item.toString());
      sum += num;
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      specials.push(item);
    }
  });

  // concat_string (reverse + alternating caps)
  const allChars = inputArray.filter(x => /^[a-zA-Z]+$/.test(x)).join("");
  let concatStr = "";
  let toggle = true;
  for (let i = allChars.length - 1; i >= 0; i--) {
    concatStr += toggle ? allChars[i].toUpperCase() : allChars[i].toLowerCase();
    toggle = !toggle;
  }

  return {
    is_success: true,
    user_id: "divyansh_rai_08082003",
    email: "divyansh.rai2022@vitstudent.ac.in",
    roll_number: "22BLC1106",
    odd_numbers: odd,
    even_numbers: even,
    alphabets: alphabets,
    special_characters: specials,
    sum: sum.toString(),
    concat_string: concatStr
  };
}

// ✅ GET route (default demo data for browser)
app.get("/bfhl", (req, res) => {
  const sampleInput = ["2","a","y","4","&","-","*","5","92","b"];
  res.status(200).json(processData(sampleInput));
});

// ✅ POST route (main logic with user input)
app.post("/bfhl", (req, res) => {
  try {
    const inputArray = req.body.data || [];
    res.status(200).json(processData(inputArray));
  } catch (error) {
    res.status(500).json({ is_success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
