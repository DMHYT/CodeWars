public class NumberFun {
  public static long findNextSquare(long sq) {
      //get the root
      double root = Math.sqrt(sq);
      //if root is an integer
      if(root == (int)root){
        //return the int that is 1 bigger than the root, in square
        return (long)((root + 1) * (root + 1));
      } else {
        //if root is not an integer, return just -1
        return -1L;
      }
  }
}


//the best from the site

public class NumberFun {
  public static long findNextSquare(long sq) {
      long root = (long) Math.sqrt(sq);
      return root * root == sq ? (root + 1) * (root + 1) : -1;
  }
}
