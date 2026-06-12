# 🧪 Dream Portal Automation Testing

## 📌 Project Overview
This project automates functional testing of the Dream Portal web application using Playwright with TypeScript. It validates UI behavior, data consistency, and includes bonus AI-based classification validation logic.

---

## 🌐 Application Under Test
https://arjitnigam.github.io/myDreams/

---

## ⚙️ Tools & Technologies
- Playwright
- TypeScript
- Node.js
- HTML Reporter

---

## 🧪 Test Coverage

### ✅ Part 1: Core UI Automation

#### 🏠 Home Page (index.html)
- Verify loading animation appears and disappears after ~3 seconds
- Validate main content visibility
- Validate navigation links open:
  - dreams-diary.html
  - dreams-total.html

---

#### 📊 Dream Diary Page (dreams-diary.html)
- Validate exactly 10 dream entries
- Validate Dream Type values are only:
  - Good
  - Bad
- Validate all rows have:
  - Dream Name
  - Days Ago
  - Dream Type

---

#### 📈 Summary Page (dreams-total.html)
- Validate:
  - Good Dreams = 6
  - Bad Dreams = 4
  - Total Dreams = 10
  - Recurring Dreams = 2
- Validate recurring dreams:
  - "Flying over mountains"
  - "Lost in maze"

---

### 🤖 Part 2: Bonus AI Validation
- Implemented rule-based AI classification
- Each dream is categorized as Good or Bad
- Compared AI output with table values
- Assertions used to validate correctness

---

## 🏗️ Project Structure