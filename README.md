# 🚀 BFHL API

This is a simple **REST API** built using **Node.js + Express** and hosted on **Vercel**.  
It processes an input array and returns classification of numbers, alphabets, special characters, and some additional logic as per the task requirements.

---

## 📌 Features
- Accepts an array via **POST /bfhl**.
- Returns:
  - ✅ API status (`is_success`)
  - ✅ User ID (`divyansh_rai_08082003`)
  - ✅ Email ID (`divyansh.rai2022@vitstudent.ac.in`)
  - ✅ Roll Number (`22BLC1106`)
  - ✅ Even Numbers
  - ✅ Odd Numbers
  - ✅ Alphabets (converted to uppercase)
  - ✅ Special Characters
  - ✅ Sum of all numbers (as string)
  - ✅ Concatenated alphabets in reverse order with alternating caps

- Supports:
  - **GET /bfhl** → Shows default demo output (for Chrome/browser testing)
  - **POST /bfhl** → Processes user-provided input array (for Postman/other clients)

---

## 🛠️ Tech Stack
- **Node.js** (Runtime)
- **Express.js** (Framework)
- **Vercel** (Hosting)

---

## 🔗 Hosted Endpoint
👉 [https://bfhl-api-do59.vercel.app/bfhl](https://bfhl-api-do59.vercel.app/bfhl)

---

## 📩 API Usage

### ▶️ POST `/bfhl`
Request Body:
```json
{
  "data": ["2","a","y","4","&","-","*","5","92","b"]
}
📸 Screenshots

Response:

{
  "is_success": true,
  "user_id": "divyansh_rai_08082003",
  "email": "divyansh.rai2022@vitstudent.ac.in",
  "roll_number": "22BLC1106",
  "odd_numbers": ["5"],
  "even_numbers": ["2","4","92"],
  "alphabets": ["A","Y","B"],
  "special_characters": ["&","-","*"],
  "sum": "103",
  "concat_string": "ByA"
}
