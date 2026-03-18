# Interactive FizzBuzz GUI 

[![Deploy Next.js site to Pages](https://github.com/aurorastormbutterfly/fizzbuzz/actions/workflows/nextjs.yml/badge.svg)](https://github.com/aurorastormbutterfly/fizzbuzz/actions/workflows/nextjs.yml)

A modern, interactive GUI implementation of the classic FizzBuzz kata. 

This project was built as an introductory exercise to transition my existing React knowledge into the **Next.js** ecosystem. It takes a simple algorithmic challenge and elevates it into a fully-fledged web application featuring dynamic inputs, automated testing, and a component-driven architecture.

## Live Demo

The hosted site can be accessed here: [https://aurorastormbutterfly.github.io/fizzbuzz/](https://aurorastormbutterfly.github.io/fizzbuzz/)

---

## Project Goals & Portfolio Highlights

1. **Learn Next.js Basics**: Understand Next.js project structure and rendering mechanisms.
2. **Clean Code Architecture**: Separate business logic (the FizzBuzz algorithm) from the UI/presentation layer.
3. **Robust Testing**: Implement a modern, fast testing suite.
4. **UI/UX Excellence**: Leverage an industry-standard component library to build a responsive, accessible interface.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) & React 19
- **Language:** TypeScript
- **Styling & UI:** Sass / Custom CSS
- **Testing:** Vitest & JSDOM
- **CI/CD:** GitHub Actions (Automated deployment to GitHub Pages)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (v20 or higher recommended) and npm installed.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/fizz-buzz.git
   ```
2. Navigate into the project directory:
   ```sh
   cd fizz-buzz
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Running Tests

To execute the test suite via Vitest:
```sh
npm run test
```

---

## Architecture & Clean Code Practices

Even for a simple kata like FizzBuzz, I adhered to software engineering best practices to ensure the codebase remains scalable and maintainable:

- **Separation of Concerns:** The core FizzBuzz mathematical logic and array generation are decoupled from the React components (e.g., `fizzBuzzUtils.ts`). This ensures the algorithm can be tested in isolation without rendering the DOM.
- **Single Responsibility Principle (SRP):** Components are kept small and focused on a single task (e.g., slider input vs. results display).
- **TypeScript:** Strict typing is used throughout to catch errors at compile-time and improve developer experience/documentation.

## Testing Strategy

For this project, I chose **Vitest** over the traditional Jest setup. 

**Rationale for Vitest:**
- **Speed & Performance:** Vitest uses Vite under the hood, making it significantly faster than Jest, particularly for watch-mode execution.
- **Native ESM & TypeScript Support:** It works seamlessly with modern Next.js/React setups out of the box, requiring far less configuration and boilerplate than Jest.
- **JSDOM Integration:** Configured alongside `jsdom` to simulate the browser environment, allowing for future-proof React component testing using the same test runner as the utility functions.

The utilities (`getRange`, `fizzBuzzify`) are fully covered by unit tests validating both standard mathematical sequences and edge cases (e.g., negative steps, reversed bounds).

## UI & Styling Strategy (Sass)

To construct the interface, I chose to implement custom styling using **Sass** rather than relying on a heavy component library.

**Rationale & Benefits:**
- **Lightweight Footprint:** Writing custom styles ensures only the exact CSS required is shipped to the browser, optimizing load times.
- **Deepened CSS/Sass Knowledge:** Hand-crafting the layout using modern CSS layouts (like Flexbox/Grid) reinforced core frontend fundamentals.
- **Tailored UI:** Provided complete control over the application's design system, allowing for a highly specific, bespoke look and feel without battling framework overrides.

## CI/CD Pipeline

The project includes a fully functional continuous deployment pipeline utilising **GitHub Actions**. Upon every push to the `main` branch, the workflow automatically:
1. Checks out the code.
2. Caches and installs dependencies to speed up subsequent runs.
3. Runs the full Vitest unit test suite to validate code integrity.
4. Builds the Next.js application into a static site.
5. Deploys the build artifacts directly to GitHub Pages if all previous steps succeed.

---

*Designed and developed by Fern Leigh.*
