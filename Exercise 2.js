
process.stdout.write( "\n This program is a computer game. Please, "
                    + "\n type in a number : " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in a number.

   var given_number = Number( input_from_user ) ;

   var winning_number = given_number * 2 ;
   
   var winning_number2 = winning_number + 1;
   
   var winning_number3 = winning_number2 + 1;

   

   process.stdout.write( "\n You typed in " + given_number + "."
                      +  "\n My numbers are " + winning_number + ", " + winning_number2 + " and " + winning_number3 + "." 
                      +  "\n Sorry, you lost. I won. The game is over."
					  +  "\n I have more and larger numbers.\n\n" ) ;

   process.exit() ;

} ) ;

//  Another possibility to output text is to use the console.log() function.
//  console.log() automatically adds a newline after the given text.
//  process.stdout.write() does not do that.




