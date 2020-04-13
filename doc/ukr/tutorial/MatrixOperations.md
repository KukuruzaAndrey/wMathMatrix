# Матричні операції

Огляд операцій над матрицями.

### Виконання простої операції

Операції над матрицями виконуються викликом методів або статичних матриці.

```js
var matrix = _.Matrix.Make( [ 3, 3 ] ).copy
([
  1, 2, 3,
  4, 5, 6,
  7, 8, -9
]);
var result = matrix.determinant();
console.log( `determinant :\n${ result }` );
/* log : determinant :
54
*/
```

### Транспонування матриці методом `transpose`

Матрицю можливо транспонувати методом `transpose`.

```js
var matrix = _.Matrix.MakeSquare
([
  1, 2,
  3, 4
]);
console.log( `matrix :\n${ matrix.toStr() }` );
/* log : matrix :
+1, +2,
+3, +4,
*/

matrix.transpose();
console.log( `transposed matrix :\n${ matrix.toStr() }` );
/* log : transposed matrix :
+1, +3,
+2, +4,
*/
```

Метод `determinant` знаходить детермінант матирці.

### Множення матриці на скаляр

Матриця може бути помножена на скаляр за допомогою статичної рутини `Mul`, кожне значення матриці збільшиться в відповідну кількість разів. Рутина поміщає результат виконання операції в контейнер `dst`, якщо `dst` має значення `null`, тоді результат поміщається в новий контейнер.

```js
var matrix = _.Matrix.MakeSquare
([
  1, 2,
  3, 4
]);

var dst = _.Matrix.Mul( null, [ matrix, 3 ] );
console.log( `dst :\n${ dst.toStr() }` );
/* log : dst :
+3, +6,
+9, +12,
*/
```

Статична рутина `Mul` множить матрицію `matrix` на скаляр `3`. Так як перший аргумент має значення `null` то під результат свторюється новий контейнер `dst`, який і повертається, як результат виконання рутини.

Альтернативно, замість статичної рутини можливо викликати метод об'єкта.

```js
var matrix = _.Matrix.MakeSquare
([
  1, 2,
  3, 4
]);

matrix.mul( 3 );
console.log( `matrix :\n${ matrix.toStr() }` );
/* log : matrix :
+3, +6,
+9, +12,
*/
```

Метод `mul`, множить матрицю `matrix` на скаляр `3`. Результат записується в `matrix`.

### Множення матриці на вектор

Приклад множення матриці на вектор.

```js
var matrix = _.Matrix.MakeSquare
([
  1, 2,
  3, 4
]);
var vector = [ 1, 1 ];

var dst = _.Matrix.Mul( null, [ matrix, vector ] );
console.log( `dst :\n${ dst }` );
/* log : dst :
[ 3, 7 ]
*/
```

Статична рутина `Mul` множить матрицію `matrix` на вектор `vector`. Так як перший аргумент має значення `null` то під результат свторюється новий контейнер `dst`, який і повертається, як результат виконання рутини.

Альтернативно, екземпляр класу може бути помножений на вектор з використанням методу `matrix1pplyTo`.

```js
var matrix = _.Matrix.MakeSquare
([
  1, 2,
  3, 4
]);
var vector = [ 1, 1 ];

matrix.matrix1pplyTo( vector );
console.log( `vector :\n${ vector }` );
/* log : vector :
[ 3, 7 ]
*/
*/
```

Метод `mul`, множить матрицю `matrix` на вектор `vector`. Результат записується в вектор `vector`.

### Множення двох матриць

За допомогою статичної рутини `Mul` можливо перемножити і декілька матриць.

```js
var matrix1 = _.Matrix.MakeSquare
([
  1, 2,
  3, 4
]);
var matrix2 = _.Matrix.MakeSquare
([
  4, 3,
  2, 1
]);

var dst = _.Matrix.Mul( null, [ matrix1, matrix2 ] );
console.log( `dst :\n${ dst.toStr() }` );
/* log : dst :
+8,  +5,
+20, +13,
*/
```

Статична рутина `Mul` множить матрицію `matrix1` на матрицю `matrix2`. Так як перший аргумент має значення `null` то під результат свторюється новий контейнер `dst`, який і повертається, як результат виконання рутини.

### Множення декількох матриць

...

```js

var matrix1 = _.Matrix.MakeSquare
([
  1, 2,
  3, 4
]);
var matrix2 = _.Matrix.MakeSquare
([
  4, 3,
  2, 1
]);

... множення 3-х матриць різних розмірностей ...

```

...

[Повернутись до змісту](../README.md#Туторіали)