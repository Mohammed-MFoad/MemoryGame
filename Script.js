
var i = 0;
document.getElementById("myDiv").style.border = "thick solid #A9432E";
var result = document.getElementById("result");
var numOfMistakes = document.getElementById("mistakes");
var counter = 0;
var images = document.getElementsByClassName("icon");

function viewImage(a,b)
{
    if (a.src.includes("Moon.gif")) {
        a.src = b +".gif";
    setTimeout(() => {
        a.src = "Moon.gif";
    }, 200);
    }
}


function replaceImage(a) {
  if ((i == 0)) {
    switch (a) {
      case images[0]:
        viewImage(a,1);
        i = 1;
        break;
      case images[1]:
        viewImage(a,2);
        i = 2;
        break;
      case images[2]:
        viewImage(a,3);
        i = 3;
        break;
      case images[3]:
        viewImage(a,4);
        i = 4;
        break;
      case images[4]:
        viewImage(a,5);
        i = 5;
        break;
      case images[5]:
        viewImage(a,1);
        i = 6;
        break;
      case images[6]:
        viewImage(a,6);
        i = 7;
        break;
      case images[7]:
        viewImage(a,2);
        i = 8;
        break;
      case images[8]:
        viewImage(a,3);
        i = 9;
        break;
      case images[9]:
        viewImage(a,5);
        i = 10;
        break;
      case images[10]:
        viewImage(a,4);
        i = 11;
        break;
      case images[11]:
        viewImage(a,6);
        i = 12;
        break;

      default:
        break;
    }
  }
  else
  {
    switch (a) {
        case images[0]:
            if (i==6) {
              images[0].src = "1.gif";  
              images[5].src = "1.gif";
              result.innerHTML = "True";  
              document.getElementById('alright').play();
              i=0;
            }
            else
            {
                i=0;
                result.innerHTML = "False !! Try Again";  
                document.getElementById('error').play();
                counter ++;
                numOfMistakes.innerHTML = counter;  
            }
          break;
        case images[1]:
            if (i==8) {
                images[1].src = "2.gif";  
                images[7].src = "2.gif";
                result.innerHTML = "True";  
              document.getElementById('alright').play();
              i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again";  
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;  
              }
          break;
        case images[2]:
            if (i==9) {
                images[2].src = "3.gif";  
                images[8].src = "3.gif";
                result.innerHTML = "True";  
              document.getElementById('alright').play();
              i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again";
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;    
              }
          break;
        case images[3]:
            if (i==11) {
                images[3].src = "4.gif";  
                images[10].src = "4.gif";
                result.innerHTML = "True";  
              document.getElementById('alright').play();
              i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again";
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;    
              }
          break;
        case images[4]:
            if (i==10) {
                images[4].src = "5.gif";  
                images[9].src = "5.gif";
              document.getElementById('alright').play();
              result.innerHTML = "True";  
                i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again";
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;    
              }
          break;
        case images[5]:
            if (i==1) {
                images[0].src = "1.gif";  
                images[5].src = "1.gif";
                result.innerHTML = "True";  
                document.getElementById('alright').play();
                i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again"; 
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;   
              }
          break;
        case images[6]:
            if (i==12) {
                images[6].src = "6.gif";  
                images[11].src = "6.gif";
                result.innerHTML = "True";  
              document.getElementById('alright').play();
              i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again";
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;    
              }
          break;
        case images[7]:
            if (i==2) {
                images[1].src = "2.gif";  
                images[7].src = "2.gif";
                result.innerHTML = "True";  
              document.getElementById('alright').play();
              i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again"; 
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;   
              }
          break;
        case images[8]:
            if (i==3) {
                images[2].src = "3.gif";  
                images[8].src = "3.gif";
                result.innerHTML = "True";  
              document.getElementById('alright').play();
              i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again";
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;    
              }
          break;
        case images[9]:
            if (i==5) {
                images[4].src = "5.gif";  
                images[9].src = "5.gif";
                result.innerHTML = "True";  
              document.getElementById('alright').play();
              i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again";
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;    
              }
          break;
        case images[10]:
            if (i==4) {
                images[3].src = "4.gif";  
                images[10].src = "4.gif";
                result.innerHTML = "True";  
                document.getElementById('alright').play();
                i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again"; 
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;   
              }
          break;
        case images[11]:
            if (i==7) {
                images[6].src = "6.gif";  
                images[11].src = "6.gif";
                result.innerHTML = "True";  
              document.getElementById('alright').play();
              i=0;
              }
              else
              {
                  i=0;
                  result.innerHTML = "False !! Try Again";
                document.getElementById('error').play();
                counter ++;
                  numOfMistakes.innerHTML = counter;    
              }
          break;
  
        default:
          break;
      }
  }
}