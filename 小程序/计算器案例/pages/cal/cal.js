// pages/cal/cal.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    id1:'clear',
    id2:'back',
    id3:'history',
    id4:'div',
    id5:'7',
    id6: '8',
    id7: '9',
    id8: 'mul',
    id9: '4',
    id10: '5',
    id11: '6',
    id12: 'sub',
    id13: '1',
    id14: '2',
    id15: '3',
    id16: 'add',
    id17: '0',
    id18: 'dot',
    id19: 'equals',
    result:'0',
    dotSign:false
  },

  


  clickButton:function(e){
    // console.log(e)
    var btnValue = e.target.id
    var res = this.data.result
    var newDotSign = this.data.dotSign
    if(btnValue>=0&&btnValue<=9){
      if (res == '0' || res.charAt(res.length - 1) == '∞'){
        res = btnValue
      }else{
        res = res + btnValue
      }
    }else{
      if(btnValue == 'dot'){
        if(!newDotSign){
          res = res+'.'
          newDotSign = true
        }

      }else if(btnValue == 'clear'){
        res = '0',
        newDotSign = false
      }else if(btnValue == 'back'){
        var length = res.length
        if(length>1){
          res = res.substr(0,length-1)
        }else{
          res = '0'
        }
      } else if (btnValue == "add" || btnValue == "sub" || btnValue == "mul" || btnValue == "div"){
        newDotSign = false
        var sign
        switch(btnValue){
          case 'add':
            sign='+';
            break;
          case 'sub':
            sign = '-';
            break;
          case 'mul':
            sign = '*';
            break;
          case 'div':
            sign = '/';
            break;
        }
        if(!isNaN(res.charAt(res.length-1))){
          res = res + sign
        }
        
      }
    }


    this.setData({
      result:res,
      dotSign: newDotSign
    })
  },

  equals:function(){
    var str = this.data.result
    var strArr = []
    var item = ''
    var temp = 0
    for(var i= 0;i<str.length;i++){
      var ch = str.charAt(i)
     
      if((ch!=''&& ch>=0 && ch<=9) || ch=='.'){
        item = item + ch
        // console.log(item)
        strArr[temp] = item;
      }else{
        // strArr[temp] = item;
        temp++;
        strArr[temp] = ch;
        temp++;
        item=''
      }
    }
    if(isNaN(strArr[strArr.length-1])){
      strArr.pop()
    }

    var res = strArr[0]*1
    var num
    for(var i = 1; i<strArr.length;i=i+2){
      if(res == '∞'){
        break
      }
      num= strArr[i+1]*1
      switch(strArr[i]){
        case '+':
          res = res+num
          break
        case '-':
          res = res - num
          break
        case '*':
          res = res * num
          break
        case '/':
        if(num !=0){
          res = res / num
        }else{
          res = '∞'
        }
         
          break
      }
    }
    this.setData({
      result:'='+ res,
      // dotSign: false
    })


  }
})