# Dream Portal Automation Testing

## Overview

This project contains automated test scripts for the Dream Portal web application using Playwright with TypeScript.

Application Under Test:

https://arjitnigam.github.io/myDreams/

The framework validates core UI functionality, dream data integrity, summary statistics, and AI-based dream classification.

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Playwright HTML Reporter

---

## Project Structure

```text
DreamPortalAutomation
│
├── tests
│   ├── dreamPortalTests.spec.ts
│   └── dreamAIClassification.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Test Coverage

### 1. Home Page Validation

File: `dreamPortalTests.spec.ts`

Validations:

* Verify Dream Portal home page loads successfully
* Verify "My Dreams" button is visible
* Verify clicking the button opens:

  * dreams-diary.html
  * dreams-total.html
* Verify pages open in separate tabs/windows

---

### 2. Dream Diary Validation

Validations:

* Verify exactly 10 dream entries exist
* Verify all rows contain:

  * Dream Name
  * Days Ago
  * Dream Type
* Verify Dream Type contains only:

  * Good
  * Bad

---

### 3. Dream Summary Validation

Validations:

* Good Dreams = 6
* Bad Dreams = 4
* Total Dreams = 10
* Recurring Dreams = 2

---

### 4. Recurring Dreams Validation

Validations:

* Flying over mountains appears more than once
* Lost in maze appears more than once
* Recurring dream count matches summary page

---

### 5. AI-Based Dream Classification

File: `dreamAIClassification.spec.ts`

A lightweight AI classification logic is implemented to classify dream names as:

* Good
* Bad

Examples:

* Monster chase → Bad
* Lost in maze → Bad
* Winning lottery → Good
* Flying over mountains → Good

The AI prediction is compared with the Dream Type displayed in the application and validated using Playwright assertions.

---

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run specific browser:

```bash
npx playwright test --project=chromium
```

---

## Test Report

Generate and open Playwright HTML Report:

```bash
npx playwright show-report
```

---

## Sample Execution Result

```text
Running 15 tests using 6 workers

15 passed
```

---

## Features Implemented

* Cross-browser execution

  * Chromium
  * Firefox
  * WebKit
* Automated assertions
* HTML reporting
* AI-based validation
* Structured Playwright framework
* Clean and maintainable code

---

## Author

Yogesh Shinde

QA Automation Assignment Submission
