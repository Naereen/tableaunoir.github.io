# tableaunoir

**Tableaunoir is an online blackboard tool**.
It can be used as a traditional blackboard but you can also create interactive animations via the use of "fridge magnets".
"Tableau noir" means blackboard in french.

The online version is available here: [tableaunoir.github.io](https://tableaunoir.github.io/)
(another instance is here: http://tableaunoir.irisa.fr)


## Example of use

Tableaunoir is used for teaching at [ENS Rennes](https://dit.ens-rennes.fr/). You are free to use it for your own teaching!
The main advantage is that the screen is fully black: there are no buttons that annoy the students.
Tableaunoir is controlled by a graphic tablet and by the keyboard of the computer (7 keys!).

It makes it very interactive compared to fixed slides. See by yourself:

<img src="./photos/tableaunoir_amphi.jpg"  alt="Photo demonstration of tableaunoir.github.io in a classroom (1/3)" width="300"/>
<img src="./photos/tableaunoir_amphi2.jpg" alt="Photo demonstration of tableaunoir.github.io in a classroom (2/3)" width="300"/>
<img src="./photos/tableaunoir_amphi3.jpg" alt="Photo demonstration of tableaunoir.github.io in a classroom (3/3)" width="300"/>

## Features

* Of course, you can draw and erase.
* You can also use kind of predefined fridge magnets that you can move on the board, to make animation e.g. for illustrating sorting algorithms, etc.
* Create your own customized "fridge magnets" for interactive courses (drag & drop an image in any format!).
* Color palette for chalk.
* Divide vertically the screen in two.
* Change the color of magnets' background.
* Save the current board for future use.
* Load a board.
* Switch back and forth between whiteboard and blackboard.
* Create a new panel on the right, and move left/right.

You can teach online by sharing the screen with Discord, Zoom, Teams, etc.

## Screenshots

<img src="./img/screenshot.png" alt="Screenshot demonstration of tableaunoir.github.io, with magnets for sorting algorithms" width="300"/>
<img src="./img/screenshot2.png" alt="Screenshot demonstration of tableaunoir.github.io, with magnets for graph algorithms" width="150"/>
<img src="./img/screenshot3.png" alt="Screenshot demonstration of tableaunoir.github.io, with magnets for B-tree algorithms" width="300"/>
<img src="./img/simcitygraph.png" alt="Screenshot demonstration of tableaunoir.github.io, with magnets for graphs with Sim City inspired nodes" width="300"/>
<img src="./img/euclide.png" alt="Screenshot demonstration of tableaunoir.github.io, with a demonstration written on two boards" width="300"/>

## Offline version

If you prefer to use an offline version, it is possible. You have to install [Electron](https://www.electronjs.org/) and then the application can be launched as follows (from the main folder):
```bash
$ electron mainElectron.js
```

## License
Tableaunoir is open-source under the [GPL v3.0](https://github.com/tableaunoir/tableaunoir.github.io/blob/master/LICENSE) license.
