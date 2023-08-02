export interface Calculator{
    firstNumber : number;
    secondNumber : number;
    result : number;
    operation : string;
}

// isNumericString(value: string): boolean {
//     const numericStrings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     return numericStrings.includes(value);
//   }
//   pressKeyWord(value: string) {
//     if ((this.isToSecondNumber) && (this.isNumericString(value))) {
//       if (value != '%') {
//         this.secondNumberArray.push(value);
//       }
//       this.caculator.secondNumber = parseInt(this.secondNumberArray.join(''));
//       console.log('222', this.secondNumberArray)
//       switch (this.caculator.operation) {
//         case '+': this.caculator.result = this.caculator.firstNumber + this.caculator.secondNumber; break;
//         case '-': this.caculator.result = this.caculator.firstNumber - this.caculator.secondNumber; break;
//         case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
//         case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
//       }
//     }
//     if (value == '+' || value == '-' || value == '*' || value == '/' || value == '%') {
//       if (this.isFristOperation && value != '%') {
//         this.caculator.firstNumber = this.caculator.result;
//         console.log('nn1');
//         this.secondNumberArray.splice(0, this.secondNumberArray.length);
//       }
//       if (value == '%' && this.isFristOperation) {
//         this.caculator.result = this.caculator.result / 100;
//         this.caculator.firstNumber = this.caculator.result;
//         console.log('nn2');
//         this.secondNumberArray.splice(0, this.secondNumberArray.length);
//       }
//       this.isToSecondNumber = true;
//       if (value != '%') { this.caculator.operation = value; }
//       this.isFristOperation = true;
//     }
    
//     if (!this.isToSecondNumber) {
//       if (value != '%') {
//         this.firstNumberArray.push(value);
//         this.caculator.firstNumber = parseInt(this.firstNumberArray.join(''));
//       } else {
//         console.log('nn3');

//         this.caculator.result = this.caculator.firstNumber / 100;
//         this.caculator.firstNumber = this.caculator.result;
//       }

//       console.log(this.firstNumberArray);
//     }

//     if (value == 'no') {
//       return;
//     }
//     console.log(this.caculator.firstNumber, this.caculator.secondNumber,);

//   }
//   clear() {
//     this.caculator = {
//       firstNumber: 0,
//       secondNumber: 0,
//       result: 0,
//       operation: ''
//     }
//     this.isToSecondNumber = false;
//     this.isFristOperation = false;
//   }
  
// }