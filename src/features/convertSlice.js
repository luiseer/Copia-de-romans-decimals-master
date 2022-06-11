import { createSlice } from '@reduxjs/toolkit';

export const convertSlice = createSlice({
  name: 'convert',
  initialState: {
    value: ''
  },
  reducers: {
    romanToDecimal: (state, action) => {
      let payload = action.payload
      console.log(payload);

      const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

      let number = 0
      let last = 0

      for (let i = payload.length - 1; i >= 0; i--) {
          const current = romanMap[payload[i]]
          console.log(current);
          if (current < last) {
              number -= current
          } else {
              number += current
          }
          last = current
          
      }
      state.value = number
    },
    
    decimalToRoman: (state, action) => {

      let payload = action.payload
      console.log(payload);

      let roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };

      let str = '';

      for (let i of Object.keys(roman)) {
        
        let j = Math.floor(payload / roman[i]);

        payload -= j * roman[i];

        str += i.repeat(j);
        
      }
      state.value = str

    }
  }
});

export const { romanToDecimal, decimalToRoman } = convertSlice.actions;

export default convertSlice.reducer;