const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  try {
    const inputArray = req.body.data || [];

    let even = [];
    let odd = [];
    let alphabets = [];
    let specials = [];
    let sum = 0;

    // classify input
    inputArray.forEach(item => {
      if (!isNaN(item)) {
        // it's a number
        const num = parseInt(item, 10);
        if (num % 2 === 0) even.push(item.toString());
        else odd.push(item.toString());
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        // alphabets
        alphabets.push(item.toUpperCase());
      } else {
        // special characters
        specials.push(item);
      }
    });

    // concat_string (all alphabets concatenated, reversed, alternating caps)
    const allChars = inputArray.filter(x => /^[a-zA-Z]+$/.test(x)).join("");
    let concatStr = "";
    let toggle = true;
    for (let i = allChars.length - 1; i >= 0; i--) {
      concatStr += toggle
        ? allChars[i].toUpperCase()
        : allChars[i].toLowerCase();
      toggle = !toggle;
    }

    // final response
    res.status(200).json({
      is_success: true,
      user_id: "divyansh_rai_08082003",   // ✅ your name + DOB (ddmmyyyy)
      email: "divyansh.rai2022@vitstudent.ac.in", // ✅ your email
      roll_number: "22BLC1106",           // ✅ your roll no
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alphabets,
      special_characters: specials,
      sum: sum.toString(),
      concat_string: concatStr
    });
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
