This repository contains the source for the GIG Cymru architecture documentation website. The following instructions are for an autonomous AI agent to work with this repository.

### Getting Started

To get started, you will need to install the project dependencies. You can do this by running the following command:

`make install`

This will install the necessary tools to build and serve the documentation.

### Building and Serving the Documentation

To build and serve the documentation locally, run the following command:

`make run`

This will start a local server and you can view the documentation by navigating to `http://127.0.0.1:8000/` in your browser.

### Linting the Documentation

This project uses `markdownlint-cli2` to lint the markdown files in the `doc/` directory. To run the linter, you will first need to install it using `npm`:

`npm install markdownlint-cli2`

Once it is installed, you can run the linter by running the following command:

`make lint`

This will check all the markdown files in the `doc/` directory and report any errors.

**Important:** Before committing any changes to a Markdown (.md) file under the `doc/` path, you must run the linter and resolve any reported issues.