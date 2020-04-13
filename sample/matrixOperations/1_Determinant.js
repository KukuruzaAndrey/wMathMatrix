if( typeof 'module' !== undefined )
require( 'wmathmatrix' );

let _ = wTools;

var matrix = _.Matrix.Make( [ 3, 3 ] ).copy
([
  1, 2, 3,
  4, 5, 6,
  7, 8, -9
]);
var got = matrix.determinant();
console.log( `determinant :\n${ got }` );
/* log : determinant :
54
*/