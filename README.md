# 2x2x2 Rubik's Cube Solver

https://sakicoder.github.io/2x2x2-rubiks-cube-solver/ 

This is a 2x2x2 Rubik's Cube Solver web application, designed to find a solution to solve any scrambled configuration.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)
- [Algorithm](#algorithm)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Introduction

The 2x2x2 Rubik's Cube is a smaller version of the classic 3x3x3 Rubik's Cube. This solver aims to provide a straightforward solution to solve any scrambled 2x2x2 Rubik's Cube configuration.

## Features

- Solves the 2x2x2 Rubik's Cube from any initial scrambled state
- Finds the solution using the "Ortega" method
- Easy-to-use web interface:
    - Colour palette to input initial scrambled state of cube
    - 'Rotate cube' and 'Reset' buttons
    - Display of the solution on a virtual Rubik's Cube (using cubing.js library)

## Requirements

A web browser (e.g. Chrome, Firefox, Safari, Edge, etc.) is required. JavaScript must be enabled to run the app. Make sure your web browser supports ES2020 syntax.

## Usage

1. Open https://sakicoder.github.io/2x2x2-rubiks-cube-solver/ in your web browser.
2. Input the current cube state by using the colour palette and colouring the stickers accordingly.
3. Use the 'Rotate cube' button to rotate the cube around the y-axis to input the colours on totally 5 sides of the cube.
4. Click the 'Solve' button. This will start the solving process to generate the algorithm (moves to solve the cube) that will be outputted to the screen.
5. Play the solution on the virtual Rubik's Cube. You can use the arrows to step through the moves one at a time.

## Algorithm

This solver is based on the "Ortega" method, which is a speedsolving method that speedcubers use to solve the 2x2x2 cube in under 5 seconds.

There are three steps:

1. Make the bottom face
2. Orientate Last Layer
3. Permute Both Layers

## Contributing

Contributions to improve the 2x2x2 Rubik's Cube Solver web app are welcome! If you have any suggestions, find bugs, or want to add new features, feel free to open an issue or submit a pull request. Please follow the standard code of conduct and contribute respectfully. We value your feedback and collaboration.

To install the program source code, follow the following steps.

1. Clone the repository to your local machine:

```bash
git clone https://github.com/SakiCoder/2x2x2-rubiks-cube-solver.git
```

2. Navigate to the project directory

```bash
cd 2x2x2-rubiks-cube-solver
```

## Acknowledgements

This project uses the [cubing.js](https://github.com/cubing/cubing.js) library.

## License

This project is licensed under the [GNU General Public License (version 3)](https://github.com/SakiCoder/2x2x2-rubiks-cube-solver/blob/main/LICENSE).

---

Happy cubing!
