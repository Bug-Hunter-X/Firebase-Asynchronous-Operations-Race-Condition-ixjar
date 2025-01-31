# Firebase Asynchronous Operations Race Condition

This repository demonstrates a common error when working with Firebase Realtime Database's asynchronous nature and provides a solution.

## Problem

When using `firebase.database().ref().set()`, which is an asynchronous operation, there is a potential for race conditions.  Code following the `set()` call might execute before the database update is complete, leading to incorrect results.

## Solution

The solution utilizes Promises or async/await to ensure that subsequent operations are only executed after the database update is complete. This prevents race conditions and guarantees data consistency.

## How to reproduce

1. Clone the repo.
2. Install Firebase: `npm install firebase`
3. Configure Firebase (replace placeholders with your credentials in `bug.js` and `bugSolution.js`).
4. Run the `bug.js` file to see the race condition in action.
5. Run the `bugSolution.js` file to see how to use Promises or async/await to fix the issue.