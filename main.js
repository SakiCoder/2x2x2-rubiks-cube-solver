let color;

function selectColor(selectedColor) {
    color = selectedColor;
    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(box => box.classList.remove('selected'));
    const selectedBox = document.querySelector(`.color-box.${color}`);
    selectedBox.classList.add('selected');
}

function colorSticker(stickerId) {
    const button = document.getElementById(stickerId);
    button.style.backgroundColor = color;
}

function reset() {
    const buttons = document.querySelectorAll(".sticker");
    buttons.forEach((button) => {
      button.style.backgroundColor = "rgb(150, 150, 150)";
    });
}

function rotateCube() {
    let topSide = document.getElementById('top');
    let transformValue = topSide.style.transform;
    var topRotationZ = transformValue.match(/rotateZ\((.*?)\)/) && parseInt(transformValue.match(/rotateZ\((.*?)\)/)[1].slice(0, -3));

    let bottomSide = document.getElementById('bottom');
    transformValue = bottomSide.style.transform;
    var bottomRotationZ = transformValue.match(/rotateZ\((.*?)\)/) && parseInt(transformValue.match(/rotateZ\((.*?)\)/)[1].slice(0, -3));

    let rightSide = document.getElementById('right');
    transformValue = rightSide.style.transform;
    var rightRotationY = transformValue.match(/rotateY\((.*?)\)/) && parseInt(transformValue.match(/rotateY\((.*?)\)/)[1].slice(0, -3));

    let frontSide = document.getElementById('front');
    transformValue = frontSide.style.transform;
    var frontRotationY = transformValue.match(/rotateY\((.*?)\)/) && parseInt(transformValue.match(/rotateY\((.*?)\)/)[1].slice(0, -3));
    
    let backSide = document.getElementById('back');
    transformValue = backSide.style.transform;
    var backRotationY = transformValue.match(/rotateY\((.*?)\)/) && parseInt(transformValue.match(/rotateY\((.*?)\)/)[1].slice(0, -3));
    
    let leftSide = document.getElementById('left');
    transformValue = leftSide.style.transform;
    var leftRotationY = transformValue.match(/rotateY\((.*?)\)/) && parseInt(transformValue.match(/rotateY\((.*?)\)/)[1].slice(0, -3));
    
    target = Math.ceil((topRotationZ + 90) / 90) * 90;

    var interval = setInterval(() => {
      topRotationZ++;
      bottomRotationZ++;
      rightRotationY--;
      frontRotationY--;
      backRotationY--;
      leftRotationY--;
      topSide.style = `transform: rotateX(90deg) rotateZ(${topRotationZ}deg) translateY(-100px); transform-origin: center top;`;
      bottomSide.style = `transform: rotateX(90deg) rotateZ(${bottomRotationZ}deg) translateY(100px); transform-origin: center bottom;`;
      rightSide.style = `transform: rotateY(${rightRotationY}deg) translateZ(100px);`;
      frontSide.style = `transform: rotateY(${frontRotationY}deg) translateZ(100px);`;
      backSide.style = `transform: rotateY(${backRotationY}deg) translateZ(100px);`;
      leftSide.style = `transform: rotateY(${leftRotationY}deg) translateZ(100px);`;
      if (topRotationZ >= target) {
        clearInterval(interval); // Stop the animation when desired rotation is reached
      }
    }, 10);
}

function solve() {
    const shownIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
    const colors = [];
    const colorCounts = {w: 0, y: 0, r: 0, o: 0, b: 0, g: 0};
    shownIds.forEach(id => {
      const element = document.getElementById(id);
      const color = element.style.backgroundColor.charAt(0);
      colors.push({ id: id, color: color });
      colorCounts[color]++;
    });
    rotationalSymmetry = 
    [['y','b','o','y','b'],
    ['y','o','g','y','o'],
    ['y','g','r','y','g'],
    ['y','r','b','y','r'],
    ['w','b','r','w','b'],
    ['w','r','g','w','r'],
    ['w','g','o','w','g'],
    ['w','o','b','w','o']];
    const lElement = colors.find((element) => element.id === "l").color;
    const kElement = colors.find((element) => element.id === "k").color;
    const pElement = colors.find((element) => element.id === "p").color;
    const oElement = colors.find((element) => element.id === "o").color;
    const tElement = colors.find((element) => element.id === "t").color;
    const sElement = colors.find((element) => element.id === "s").color;
    const hElement = colors.find((element) => element.id === "h").color;
    const gElement = colors.find((element) => element.id === "g").color;
    rotationalSymmetry.forEach(combination => {
      for (let i = 0; i < combination.length-2; i++) {
        let setOfThree = combination.slice(i, i + 3);
        if (setOfThree[0]==gElement && setOfThree[1]==lElement) {
          colors.push({ id : 'u', color: setOfThree[2] });
        }
        if (setOfThree[0]==kElement && setOfThree[1]==pElement) {
          colors.push({ id : 'v', color: setOfThree[2] });
        }
        if (setOfThree[0]==oElement && setOfThree[1]==tElement) {
          colors.push({ id : 'w', color: setOfThree[2] });
        }
        if (setOfThree[0]==sElement && setOfThree[1]==hElement) {
          colors.push({ id : 'x', color: setOfThree[2] });
        }
      }
    });
    colors.sort((a, b) => a.id.localeCompare(b.id)); // Order uvwz alphabetically
    let colorString = "";
    for (const obj of colors) {
      colorString += obj.color;
    }

    let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;

    function prnt() {
        // console.log();
        // console.log(`     ${a} ${b}`);
        // console.log(`     ${d} ${c}`);
        // console.log(`${e} ${f}  ${i} ${j}  ${m} ${n}  ${q} ${r}`);
        // console.log(`${h} ${g}  ${l} ${k}  ${p} ${o}  ${t} ${s}`);
        // console.log(`     ${u} ${v}`);
        // console.log(`     ${x} ${w}`);
    }

    function rotate(A, B, C, D, E, F, G, H, I, J, K, L) {
        const temp_A = A;
        A = B;
        B = C;
        C = D;
        D = temp_A;
        const temp_E = E;
        E = F;
        F = G;
        G = H;
        H = temp_E;
        const temp_I = I;
        I = J;
        J = K;
        K = L;
        L = temp_I;
        return [A, B, C, D, E, F, G, H, I, J, K, L];
    }

    function right() {
        [p, o, n, m, j, v, t, b, k, w, q, c] = rotate(p, o, n, m, j, v, t, b, k, w, q, c);
    }

    function up() {
        [d, c, b, a, j, n, r, f, i, m, q, e] = rotate(d, c, b, a, j, n, r, f, i, m, q, e);
    }

    function front() {
        [k, j, i, l, c, f, u, p, m, d, g, v] = rotate(k, j, i, l, c, f, u, p, m, d, g, v);
    }

    function down() {
        [w, v, u, x, s, o, k, g, t, p, l, h] = rotate(w, v, u, x, s, o, k, g, t, p, l, h);
    }

    function left() {
        [h, g, f, e, l, d, r, x, i, a, s, u] = rotate(h, g, f, e, l, d, r, x, i, a, s, u);
    }

    function back() {
        [s, r, q, t, b, o, x, e, a, n, w, h] = rotate(s, r, q, t, b, o, x, e, a, n, w, h);
    }

    function execute(alg) {
        for (const move of alg.split(" ")) {
            if (move === "R") {
                right();
                prnt();
            } else if (move === "U") {
                up();
                prnt();
            } else if (move === "F") {
                front();
                prnt();
            } else if (move === "R'") {
                right();
                right();
                right();
                prnt();
            } else if (move === "U'") {
                up();
                up();
                up();
                prnt();
            } else if (move === "F'") {
                front();
                front();
                front();
                prnt();
            } else if (move === "D") {
                down();
                prnt();
            } else if (move === "D'") {
                down();
                down();
                down();
                prnt();
            } else if (move === "B") {
                back();
                prnt();
            } else if (move === "B'") {
                back();
                back();
                back();
                prnt();
            } else if (move === "L") {
                left();
                prnt();
            } else if (move === "L'") {
                left();
                left();
                left();
                prnt();
            } else if (move === "U2") {
                up();
                up();
                prnt();
            } else if (move === "R2") {
                right();
                right();
                prnt();
            } else if (move === "D2") {
                down();
                down();
                prnt();
            } else if (move === "F2") {
                front();
                front();
                prnt();
            } else if (move === "L2") {
                left();
                left();
                prnt();
            } else if (move === "B2") {
                back();
                back();
                prnt();
            }
        }
    }

    const scrambled_state = colorString;
    lst = scrambled_state.split('');
    [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x] = lst;
    prnt();

    // Adjust according to the current rotation position
    let topSide = document.getElementById('top');
    let transformValue = topSide.style.transform;
    var topRotationZ = transformValue.match(/rotateZ\((.*?)\)/) && parseInt(transformValue.match(/rotateZ\((.*?)\)/)[1].slice(0, -3));
    if (topRotationZ % 360 === 90) {
      execute("U D'");
    } else if (topRotationZ % 360 === 180) {
      execute("U2 D2");
    } else if (topRotationZ % 360 === 270) {
      execute("U' D");
    }

    let finalAlg = "";
    let fc = u;
    let first_two_pieces = "";

    if (v === fc) {
        
    } else if (a === fc) {
        first_two_pieces = "U R2";
    } else if (b === fc) {
        first_two_pieces = "R2";
    } else if (c === fc) {
        first_two_pieces = "U' R2";
    } else if (d === fc) {
        first_two_pieces = "U2 R2";
    } else if (i === fc) {
        first_two_pieces = "U' R U R'";
    } else if (j === fc) {
        first_two_pieces = "F' U' F";
    } else if (m === fc) {
        first_two_pieces = "R U R'";
    } else if (n === fc) {
        first_two_pieces = "U2 R U' R'";
    } else if (q === fc) {
        first_two_pieces = "F' U F";
    } else if (r === fc) {
        first_two_pieces = "R U2 R'";
    } else if (e === fc) {
        first_two_pieces = "F' U2 F";
    } else if (f === fc) {
        first_two_pieces = "R U' R'";
    } else if (k === fc) {
        first_two_pieces = "R U' R' U R U' R'";
    } else if (p === fc) {
        first_two_pieces = "R U R' U' R U R'";
    } else if (o === fc) {
        first_two_pieces = "R2 F";
    } else if (w === fc) {
        first_two_pieces = "R' F' U F";
    } else if (t === fc) {
        first_two_pieces = "R";
    } else if (x === fc) {
        first_two_pieces = "B2 R2";
    } else if (s === fc) {
        first_two_pieces = "B R";
    } else if (h === fc) {
        first_two_pieces = "B' U R2";
    }

    if (first_two_pieces !== "") {
        finalAlg += `${first_two_pieces} `;
        execute(first_two_pieces);
    }

    let br = "";

    if (w === fc) {
        
    } else if (a === fc) {
        br = "B2";
    } else if (b === fc) {
        br = "U' B2";
    } else if (c === fc) {
        br = "U2 B2";
    } else if (d === fc) {
        br = "U B2";
    } else if (m === fc) {
        br = "U R' U2 R";
    } else if (n === fc) {
        br = "R' U' R";
    } else if (i === fc) {
        br = "R' U2 R";
    } else if (j === fc) {
        br = "U' R' U' R";
    } else if (q === fc) {
        br = "U' R' U R";
    } else if (r === fc) {
        br = "U R' U' R";
    } else if (e === fc) {
        br = "R' U R";
    } else if (f === fc) {
        br = "U2 R' U' R";
    } else if (s === fc) {
        br = "B' U B'";
    } else if (h === fc) {
        br = "B";
    } else if (x === fc) {
        br = "B2 U' B2";
    } else if (o === fc) {
        br = "R' U' R U R' U' R";
    } else if (t === fc) {
        br = "R' U R U' R' U R";
    }

    if (br !== "") {
        finalAlg += `${br} `;
        execute(br);
    }

    let bl = "";

    if (x === fc) {
        
    } else if (a === fc) {
        bl = "L U2 L' U' L U L'";
    } else if (b === fc) {
        bl = "U' L U2 L' U' L U L'";
    } else if (c === fc) {
        bl = "U2 L U2 L' U' L U L'";
    } else if (d === fc) {
        bl = "U L U2 L' U' L U L'";
    } else if (e === fc) {
        bl = "L U L'";
    } else if (q === fc) {
        bl = "U' L U L'";
    } else if (m === fc) {
        bl = "U2 L U L'";
    } else if (i === fc) {
        bl = "U L U L'";
    } else if (n === fc) {
        bl = "L U' L'";
    } else if (r === fc) {
        bl = "U L U' L'";
    } else if (j === fc) {
        bl = "L U2 L'";
    } else if (f === fc) {
        bl = "U' L U2 L'";
    } else if (h === fc) {
        bl = "L U L' U' L U L'";
    } else if (s === fc) {
        bl = "L U' L' U L U' L'";
    }

    if (bl !== "") {
        finalAlg += `${bl} `;
        execute(bl);
    }

    let lc = "";
    const oppositeColours = ["b", "g", "r", "o", "w", "y"];
    for (let index = 0; index < oppositeColours.length; index++) {
      if (oppositeColours[index] === fc) {
        if (index % 2 === 1) {
          lc = oppositeColours[index - 1];
        } else {
          lc = oppositeColours[index + 1];
        }
      }
    }

    let oriented = 0;
    if (a === lc) {
      oriented++;
    }
    if (b === lc) {
      oriented++;
    }
    if (c === lc) {
      oriented++;
    }
    if (d === lc) {
      oriented++;
    }

    let preollauf = "";
    let ollcase = "";
    let diag = false;

    if (oriented === 0) {
      if (i === lc && j === lc && q === lc && r === lc) {
        ollcase = "H";
      } else if (m === lc && n === lc && e === lc && f === lc) {
        ollcase = "H";
        preollauf = "U'";
      } else if (j === lc && q === lc) {
        ollcase = "Pi";
      } else if (f === lc && m === lc) {
        ollcase = "Pi";
        preollauf = "U'";
      } else if (i === lc && r === lc) {
        ollcase = "Pi";
        preollauf = "U2";
      } else if (n === lc && e === lc) {
        ollcase = "Pi";
        preollauf = "U";
      }
    } else if (oriented === 1) {
      if (a === lc) {
        if (q === lc) {
          ollcase = "Bs";
        } else {
          preollauf = "U";
          ollcase = "Bas";
        }
      } else if (b === lc) {
        if (r === lc) {
          ollcase = "Bas";
        } else {
          preollauf = "U'";
          ollcase = "Bs";
        }
      } else if (c === lc) {
        if (i === lc) {
          ollcase = "As";
        } else {
          ollcase = "S";
          preollauf = "U";
        }
      } else if (d === lc) {
        if (j === lc) {
          ollcase = "S";
        } else {
          ollcase = "As";
          preollauf = "U'";
        }
      }
    } else if (oriented === 2) {
      if (a === lc && b === lc) {
        preollauf = "U";
      } else if (b === lc && c === lc) {
        
      } else if (c === lc && d === lc) {
        preollauf = "U'";
      } else if (d === lc && a === lc) {
        preollauf = "U2";
      } else if (a === lc && c === lc) {
        ollcase = "L";
        if (i === lc) {
          
        } else {
          preollauf = "U2";
        }
        diag = true;
      } else if (b === lc && d === lc) {
        ollcase = "Lt";
        if (j === lc) {
          
        } else {
          preollauf = "U2";
        }
        diag = true;
      }
    }

    if (preollauf !== "") {
      finalAlg += `${preollauf} `;
      execute(preollauf);
    }

    if (oriented === 2 && diag === false) {
      if (i === lc) {
        ollcase = "T";
      } else {
        ollcase = "U";
      }
    }

    const Ha = "R2 U2 R' U2 R2";
    const Pi = "F R U R' U' R U R' U' F'";
    const Sa = "R U R' U R U2 R'";
    const As = "L' U' L U' L' U2 L";
    const Bs = "R' U' R U' R' U2 R";
    const Bas = "L U L' U L U2 L'";
    const Ta = "R U R' U' R' F R F'";
    const Ua = "F R U R' U' F'";
    const La = "F R' F' R U R U' R'";
    const Lt = "F' R U R' U' R' F R";

    if (ollcase === "H") {
      finalAlg += `${Ha} `;
      execute(Ha);
    } else if (ollcase === "Pi") {
      finalAlg += `${Pi} `;
      execute(Pi);
    } else if (ollcase === "S") {
      finalAlg += `${Sa} `;
      execute(Sa);
    } else if (ollcase === "As") {
      finalAlg += `${As} `;
      execute(As);
    } else if (ollcase === "Bs") {
      finalAlg += `${Bs} `;
      execute(Bs);
    } else if (ollcase === "Bas") {
      finalAlg += `${Bas} `;
      execute(Bas);
    } else if (ollcase === "T") {
      finalAlg += `${Ta} `;
      execute(Ta);
    } else if (ollcase === "U") {
      finalAlg += `${Ua} `;
      execute(Ua);
    } else if (ollcase === "L") {
      finalAlg += `${La} `;
      execute(La);
    } else if (ollcase === "Lt") {
      finalAlg += `${Lt} `;
      execute(Lt);
    }

    let pbl = "";
    let top_bar_position = "";
    let bottom_bar_position = "";
    let top_bars = 0;
    let bottom_bars = 0;

    if (e === f) {
      top_bars++;
      top_bar_position += "1";
    }
    if (i === j) {
      top_bars++;
      top_bar_position += "2";
    }
    if (m === n) {
      top_bars++;
      top_bar_position += "3";
    }
    if (q === r) {
      top_bars++;
      top_bar_position += "4";
    }
    if (g === h) {
      bottom_bars++;
      bottom_bar_position += "1";
    }
    if (k === l) {
      bottom_bars++;
      bottom_bar_position += "2";
    }
    if (o === p) {
      bottom_bars++;
      bottom_bar_position += "3";
    }
    if (s === t) {
      bottom_bars++;
      bottom_bar_position += "4";
    }

    if (top_bars === 4 && bottom_bars === 4) {
      
    } else if (top_bars === 0 && bottom_bars === 0) {
      pbl = "R2 F2 R2";
    } else if (top_bars === 1 && bottom_bars === 0) {
      if (top_bar_position === "1") {
        pbl += "U' ";
      } else if (top_bar_position === "2") {
        
      } else if (top_bar_position === "3") {
        pbl += "U ";
      } else if (top_bar_position === "4") {
        pbl += "U2 ";
      }
      pbl += "R U' R F2 R' U R'";
    } else if (top_bars === 0 && bottom_bars === 1) {
      if (bottom_bar_position === "1") {
        pbl += "D ";
      } else if (bottom_bar_position === "2") {
        
      } else if (bottom_bar_position === "3") {
        pbl += "D' ";
      } else if (bottom_bar_position === "4") {
        pbl += "D2 ";
      }
      pbl += "R' D R' F2 R D' R";
    } else if (top_bars === 1 && bottom_bars === 1) {
      if (bottom_bar_position === "1") {
        pbl += "D ";
      } else if (bottom_bar_position === "2") {
        
      } else if (bottom_bar_position === "3") {
        pbl += "D' ";
      } else if (bottom_bar_position === "4") {
        pbl += "D2 ";
      }
      if (top_bar_position === "1") {
        pbl += "U' ";
      } else if (top_bar_position === "2") {
        
      } else if (top_bar_position === "3") {
        pbl += "U ";
      } else if (top_bar_position === "4") {
        pbl += "U2 ";
      }
      pbl += "R2 U' B2 U2 R2 U' R2";
    } else if (top_bars === 4 && bottom_bars === 0) {
      pbl += "R2 L2 F R U' R' U' R U R' F' R U R' U' R' F R F'";
    } else if (top_bars === 4 && bottom_bars === 1) {
      if (bottom_bar_position === "1") {
        
      } else if (bottom_bar_position === "2") {
        pbl += "D' ";
      } else if (bottom_bar_position === "3") {
        pbl += "D2 ";
      } else if (bottom_bar_position === "4") {
        pbl += "D ";
      }
      pbl += "R' U R' U' R' F R2 U' R' U' R U R' F' R2";
    } else if (top_bars === 0 && bottom_bars === 4) {
      pbl += "F R U' R' U' R U R' F' R U R' U' R' F R F'";
    } else if (top_bars === 1 && bottom_bars === 4) {
      if (top_bar_position === "1") {
        
      } else if (top_bar_position === "2") {
        pbl += "U ";
      } else if (top_bar_position === "3") {
        pbl += "U2 ";
      } else if (top_bar_position === "4") {
        pbl += "U' ";
      }
      pbl += "R U R' U' R' F R2 U' R' U' R U R' F'";
    }

    if (pbl !== "") {
      finalAlg += `${pbl} `;
      execute(pbl);
    }

    let auf = "";
    if (k === j) {
      
    } else if (k === f) {
      auf = "U'";
    } else if (k === r) {
      auf = "U2";
    } else if (k === n) {
      auf = "U";
    }
    if (auf !== "") {
      finalAlg += `${auf} `;
      execute(auf);
    }

    finalAlg = finalAlg.trim();

    console.log(`The final algorithm is ${finalAlg}`);

    if (
        (a === b && b === c && c === d) &&
        (e === f && f === g && g === h) &&
        (i === j && j === k && k === l) &&
        (m === n && n === o && o === p) &&
        (q === r && r === s && s === t) &&
        (u === v && v === w && w === x) &&
        (a !== e && e !== i && i !== m && m !== q && q !== u)
      ) {
        // success
    } else {
        // error
    }

    function reverseAlgorithm(algorithm) {
      const moves = algorithm.split(" ");
      function reverseMove(move) {
        if (move.endsWith("'")) {
          return move.slice(0, -1);
        } else {
          return move + "'";
        }
      }
      const reversedMoves = moves.reverse().map(reverseMove);
      const reversedAlgorithm = reversedMoves.join(" ");
      return reversedAlgorithm;
    }

    function getRotationSetupMoves(c, j) {
      if (c === "w" && j === "g") {
        return "";
      } else if (c === "w" && j === "r") {
        return "y";
      } else if (c === "w" && j === "b") {
        return "y2";
      } else if (c === "w" && j === "o") {
        return "y'";
      } else if (c === "y" && j === "g") {
        return "z2";
      } else if (c === "y" && j === "r") {
        return "z2 y'";
      } else if (c === "y" && j === "b") {
        return "z2 y2";
      } else if (c === "y" && j === "o") {
        return "z2 y";
      } else if (c === "g" && j === "y") {
        return "x";
      } else if (c === "g" && j === "r") {
        return "x y";
      } else if (c === "g" && j === "w") {
        return "x y2";
      } else if (c === "g" && j === "o") {
        return "x y'";
      } else if (c === "b" && j === "y") {
        return "x' y2";
      } else if (c === "b" && j === "r") {
        return "x' y";
      } else if (c === "b" && j === "w") {
        return "x'";
      } else if (c === "b" && j === "o") {
        return "x' y'";
      } else if (c === "r" && j === "b") {
        return "z' y2";
      } else if (c === "r" && j === "w") {
        return "z' y'";
      } else if (c === "r" && j === "g") {
        return "z'";
      } else if (c === "r" && j === "y") {
        return "z' y";
      } else if (c === "o" && j === "b") {
        return "z y2";
      } else if (c === "o" && j === "w") {
        return "z y";
      } else if (c === "o" && j === "g") {
        return "z";
      } else if (c === "o" && j === "y") {
        return "z y'";
      }
    }

    const reversedAlgorithm = reverseAlgorithm(finalAlg);
    const rotationSetupMoves = getRotationSetupMoves(c, j);
    const setupAlgorithm = rotationSetupMoves + " " + reversedAlgorithm;

    inputDiv = document.querySelector(".input-container");
    inputDiv.classList.add("hidden");
    twistyPlayer = document.getElementById("twisty-player");
    twistyPlayer.setAttribute("experimental-setup-alg", setupAlgorithm);
    twistyPlayer.setAttribute("alg", finalAlg);
    algorithm = document.getElementById("final-alg");
    algorithm.innerHTML = finalAlg;
    outputDiv = document.querySelector(".output-container");
    outputDiv.classList.remove("hidden");
}

function done() {
    const outputDiv = document.querySelector(".output-container");
    outputDiv.innerHTML = 
    `
    <h2 id="final-alg"></h2>
    <twisty-player
    id="twisty-player"
    experimental-setup-alg=""
    puzzle="2x2x2"
    alg=""
    ></twisty-player>
    <button id="done-btn" onclick="done()">Done</button>
    `;
    outputDiv.classList.add("hidden");
    reset();
    const inputDiv = document.querySelector(".input-container");
    inputDiv.classList.remove("hidden");
}
