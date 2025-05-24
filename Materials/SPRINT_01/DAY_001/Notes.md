# Sprint 01 | Day 001
# Variables, Data Types, Operators

## ✅ Topics Covered
- Topic 1: Primitive vs Non-Primitive Data Types
- Topic 2: Variables
- Topic 3: Operators Recap (in Practice)
- Topic 4: `final` Keyword & Constants
- Topic 5: `var` Keyword (Java 10+)
- Topic 6:  System.out.println() Tricks

## ✅ Key Takeaways
- Primitive data Types - are not objects, rather its built in. *They store values*. Eg., byte, short, int, long, float, double, boolean, char (total 8)
- No Primitive data types are objects and not built in, *they store address*. Eg., 
  * String - Immutable class used for text
  * Arrays - Store multiple values of same type
  * Classes - Custom blueprints for objects
  * Interfaces - Contracts for what a class must implement
  * Collections - Used to store and manage groups of objects
  *  Enums - Special type for fixed set of constants
  *  Wrapper Class - Object versions of primitives

- Special/Advanced Types
  * var – Introduced in Java 10 (infers type from assignment)
  * Object – Superclass of all non-primitives
  * Optional<T> – Java 8+ way to avoid nulls
  * Record – Java 14+ for data-carrying classes

- Variable - declaration and Initilization
- Variable - Scopes
  * `Local Variables`
    - Variables declared inside a method, constructor, or block.
    - They can only be accessed within that method, constructor, or block.
  * `Instance Variables (Non-static)`
   - Variables declared inside a class, but outside any method or block.
   - Each object of the class gets its own copy of instance variables.
   - They are initialized with default values (e.g., 0 for int, null for objects).
  * `Static Variable`
    - Variables declared with the *static* keyword inside a class.
    - Shared by all instances of the class. There is only one copy of the variable for the entire class.
    - They are initialized with default values as well.
- Variable naming convention - `camelCase`

- `final` variable
  * Purpose: To create constants; once assigned, the value cannot be changed.*
  * Important Note: If a final variable holds a reference to an object, the reference cannot be changed, but the object's internal state can still be modified.
  * usage
  ```java
  final int MAX_USERS = 100;
  ```
- `final` Methods
  * Purpose: Purpose: To prevent method overriding in subclasses.
  * Benefit: Ensures that the method's behavior remains consistent across all subclasses.
  * usage
  ```java
  class Parent {
    final void display() {
        System.out.println("This method cannot be overridden.");
        }
    }
    ```
- `final` Classes
  * Purpose: To prevent inheritance.
  * Benefit: Useful when creating immutable classes or utility classes that should not be extended.
  * usage
  ```java
  final class Constants {
    // Class content
  }
  ```
- `var` keyword
  * Local Variable Type Inference
  * Purpose: To let the compiler infer the variable type from the assigned value.
  * Scope: var can only be used for local variables inside methods, constructors, loops, and lambda expressions.
  * Initialization: Must be initialized at the time of declaration.

- Escape Sequence
  * `\n`: Newline
  * `\t`: Tab
  * `\\`: Backslash
  * `\"`: Double quote
  * `\'`: Single quote
  * `\r`: Carriage return
  * `\b`: Backspace
  * `\f`: Form feed


## 🧠 Interview-Oriented Notes
### 🔸 Primitive vs Non-Primitive Types
- **Primitive types**: Built-in, store actual values (e.g., `int`, `char`, `boolean`, etc.).
- **Non-Primitive types**: Objects storing references (e.g., `String`, `Array`, `Class`, etc.).

### 🔸 Variable Types & Scope
- **Local Variable**: Declared inside methods/blocks, accessible only there, no default value.
- **Instance Variable**: Declared inside class, outside methods; unique to each object.
- **Static Variable**: Declared with `static`; shared across all instances of a class.

### 🔸 final Keyword Use Cases
- `final` **variable**: Makes the value constant after assignment.
- `final` **method**: Prevents method overriding in subclass.
- `final` **class**: Prevents inheritance.

### 🔸 var Keyword (Java 10+)
- Enables local variable type inference (compiler decides type).
- Cannot be used for fields or without assignment.

### 🔸 String Concatenation & Escape Sequences
- Use `+` for combining strings in `System.out.println()`.
- Common escape characters:
  - `\n` = New line
  - `\t` = Tab
  - `\\` = Backslash
  - `\"` = Double quote
  - `\'` = Single quote

### 🔸 Naming Conventions
- **Variables/Methods**: `camelCase`
- **Constants (`final`)**: `UPPER_SNAKE_CASE`

### 🔸 Common Interview Traps
- Confusing scope and lifecycle of local vs instance variables.
- Thinking `final` makes object itself immutable (it only locks the reference).
- Misusing `var` (e.g., without initialization or assuming it's global).

### 🔸 Best Practices
- Use `final` to indicate constants and improve code readability.
- Use `static` wisely to reduce unnecessary shared state.
- Use `var` where type is obvious or helps reduce clutter (e.g., lambdas, loops).
