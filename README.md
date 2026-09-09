# Task Tracker CLI

A simple command-line interface (CLI) for managing tasks.
This project was built as part of the [Task Tracker project](https://roadmap.sh/projects/task-tracker) from roadmap.sh.

## Features

* Add, update, and delete tasks
* Mark tasks as `to-do`, `in-progress`, or `done`
* List all tasks
* Filter tasks by status
* Store tasks in a JSON file
* Built-in `--help` command
* Handles invalid commands and arguments

## Requirements

* [Node.js](https://nodejs.org/) installed

No external libraries or frameworks are required.

## How to Run

### Option 1: Run without installing the CLI

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/vincentmuller-pr/task-tracker.git
cd ./task-tracker
```

Run the application directly using the npm script:

```bash
npm run task-cli -- --help
```

For example:

```bash
npm run task-cli -- add "Buy groceries"
npm run task-cli -- list
npm run task-cli -- update 1 "Buy groceries and cook dinner"
npm run task-cli -- delete 1
```


### Option 2: Install the CLI locally with npm link

Clone the repository and navigate to the project directory:

```bash
git https://github.com/vincentmuller-pr/task-tracker.git
cd ./task-tracker
```

Create a global link to the local project:

```bash
npm link
```

You can now use the `task-cli` command from any directory:

```bash
task-cli --help
task-cli add "Buy groceries"
task-cli list
```

To remove the global link, navigate to the project directory:

```bash
npm unlink -g task-tracker-cli
```

## Usage

### Add a task

```bash
task-cli add "Buy groceries"
```

### Update a task

```bash
task-cli update 1 "Buy groceries and cook dinner"
```

### Delete a task

```bash
task-cli delete 1
```

### Mark a task as in progress

```bash
task-cli mark-in-progress 1
```

### Mark a task as done

```bash
task-cli mark-done 1
```

### Mark a task as todo

```bash
task-cli mark-to-do 1
```

### List all tasks

```bash
task-cli list
```

### List tasks by status

```bash
task-cli list done
task-cli list to-do
task-cli list in-progress
```

### Show help

```bash
task-cli --help
```

## Task Statuses

Tasks can have one of the following statuses:

| Status        | Description                       |
| ------------- | --------------------------------- |
| `to-do`       | Task has not been started         |
| `in-progress` | Task is currently being worked on |
| `done`        | Task has been completed           |

## Data Storage

Tasks are stored in a JSON file in the data directory of the project
The file is created automatically if it does not exist.