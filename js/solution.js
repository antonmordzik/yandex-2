(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var sum = 0;
		matrixB = JSON.parse(JSON.stringify(map)); // copy
		for (var i = 0; i < map.length; i++) {
			for (var j = 0; j < map[i].length; j++) {
				if (map[i][j] == 1 && matrixB[i][j] == 1) {
					sum += 1;
					check(i, j, map, matrixB);
				}
			}
		}
		return sum;

    }

    function check(i, j, matrixA, matrixB) {
		matrixB[i][j] = 0;
		// main matrix
		if (i < matrixA.length - 1 && j < matrixA[i].length - 1 && i > 0 && j > 0) {
			if (matrixA[i][j + 1] == 1 && matrixB[i][j + 1] == 1) {
				check(i, j + 1, matrixA, matrixB);
			}
			if (matrixA[i + 1][j] == 1 && matrixB[i + 1][j] == 1) {
				check(i + 1, j, matrixA, matrixB);
			}
			if (matrixA[i][j - 1] == 1 && matrixB[i][j - 1] == 1) {
				check(i, j - 1, matrixA, matrixB);
			}
			if (matrixA[i - 1][j] == 1 && matrixB[i - 1][j] == 1) {
				check(i - 1, j, matrixA, matrixB);
			}
			// if all around elements != 1 => return
		}
		// last element
		else if (i == matrixA.length - 1 && j == matrixA[i].length - 1) {
			if (matrixA[i][j - 1] == 1 && matrixB[i][j - 1] == 1) {
				check(i, j - 1, matrixA, matrixB);
			}
			if (matrixA[i - 1][j] == 1 && matrixB[i - 1][j] == 1) {
				check(i - 1, j, matrixA, matrixB);
			}
		}
		// first string
		else if (i == 0 && j < matrixA[i].length - 1 && j > 0) {
			if (matrixA[i][j + 1] == 1 && matrixB[i][j + 1] == 1) {
				check(i, j + 1, matrixA, matrixB);
			}
			if (matrixA[i][j - 1] == 1 && matrixB[i][j - 1] == 1) {
				check(i, j - 1, matrixA, matrixB);
			}
			if (matrixA[i + 1][j] == 1 && matrixB[i + 1][j] == 1) {
				check(i + 1, j, matrixA, matrixB);
			}
			// if left and right elem != 1 => return
		}

		// last string
		else if (i == matrixA.length - 1 && j < matrixA[i].length - 1 && j > 0) {
			if (matrixA[i][j + 1] == 1 && matrixB[i][j + 1] == 1) {
				check(i, j + 1, matrixA, matrixB);
			}
			if (matrixA[i][j - 1] == 1 && matrixB[i][j - 1] == 1) {
				check(i, j - 1, matrixA, matrixB);
			}
			if (matrixA[i - 1][j] == 1 && matrixB[i - 1][j] == 1) {
				check(i - 1, j, matrixA, matrixB);
			}
			// if left and right elem != 1 => return
		}

		//first colomn
		else if (i < matrixA.length - 1 && j == 0 && i > 0) {
			if (matrixA[i + 1][j] == 1 && matrixB[i + 1][j] == 1) {
				check(i + 1, j, matrixA, matrixB);
			}
			if (matrixA[i - 1][j] == 1 && matrixB[i - 1][j] == 1) {
				check(i - 1, j, matrixA, matrixB);
			}
			if (matrixA[i][j + 1] == 1 && matrixB[i][j + 1] == 1) {
				check(i, j + 1, matrixA, matrixB);
			}
			// if top and bottom elem != 1 => return
		}

		//last colomn
		else if (i < matrixA.length - 1 && j == matrixA[i].length - 1 && i > 0) {
			if (matrixA[i + 1][j] == 1 && matrixB[i + 1][j] == 1) {
				check(i + 1, j, matrixA, matrixB);
			}
			if (matrixA[i - 1][j] == 1 && matrixB[i - 1][j] == 1) {
				check(i - 1, j, matrixA, matrixB);
			}
			if (matrixA[i][j - 1] == 1 && matrixB[i][j - 1] == 1) {
				check(i, j - 1, matrixA, matrixB);
			}
			// if top and bottom elem != 1 => return
		}

		// first element
		else if (i == 0 && j == 0) {
			if (matrixA[i][j + 1] == 1 && matrixB[i][j + 1] == 1) {
				check(i, j + 1, matrixA, matrixB);
			}
			if (matrixA[i + 1][j] == 1 && matrixB[i + 1][j] == 1) {
				check(i + 1, j, matrixA, matrixB);
			}
			// if elements != 1 => return
		}
		// last element of first string
		else if (i == 0 && j == matrixA[i].length - 1) {
			if (matrixA[i][j - 1] == 1 && matrixB[i][j - 1] == 1) {
				check(i, j - 1, matrixA, matrixB);
			}
			if (matrixA[i + 1][j] == 1 && matrixB[i + 1][j] == 1) {
				check(i + 1, j, matrixA, matrixB);
			}
			// if != 1 => return
		}
		// first element of last string
		else if (i == matrixA.length - 1 && j == 0) {
			if (matrixA[i][j + 1] == 1 && matrixB[i][j + 1] == 1) {
				check(i, j + 1, matrixA, matrixB);
			}
			if (matrixA[i - 1][j] == 1 && matrixB[i - 1][j] == 1) {
				check(i - 1, j, matrixA, matrixB);
			}
			// if != 1 => return
		}
	}

    root.SHRI_ISLANDS.solution = solution;
})(this);
