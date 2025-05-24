# Pattern Printing


```java
    import java.util.Scanner;

    public class Day_00_001_Pattern_printing {
        public static void main(String[] args){
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter number of rows: :");
            int n = sc.nextInt();
            for(int i=0; i<n;i++){
                for(int j = 0; j<=i; j++){
                    System.out.print("x ");
                }
                System.out.println();
            
            }
            sc.close();
        }

    }
```
