  1, Differences between using sessions or JSON Web Tokens for authentication.

  the server takes care of all the authentication when you use sessions.
  JWT: Post request sent to server with username and password. If they are correct, the server creates a token and returns to the client. Client sends the jwt token on every further request to get the authenticated. Thus making REST actually stateless.


  2, What does bcrypt do to help us store passwords in a secure manner.
      
       bcrypt adds a time complexity, salting which is just pre pending or pending random strings to password before you hash it.  So this is a great option when it comes to storing passwords. 


3, How are unit tests different from integration and end-to-end testing.
 
  unit testing tests small pieces of code like pure functions.
  integration testing tests how those functions are working together as a whole. for endpoints, middleware stacks, etc.
  E2E testing tests how the system as a whole is functioning and how it's working with with external resources.
  

4, How Test Driven Development changes the way we write applications and tests.
      Test Driven Development can save your development and it makes you to write better and testable code.