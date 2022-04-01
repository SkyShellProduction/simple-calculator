const clickBtns = [...document.querySelectorAll('.only__btn')],
      equalBtn = document.querySelector('.equal'),
      clearBtn = document.querySelector('.clear'),  
      deleteBtn = document.querySelector('.delete'),  
      percentBtn = document.querySelector('.percent'),
      outResult = document.querySelector('.calc__result'); 
      
clickBtns.forEach(item => {
    item.addEventListener('click', function(){
        if(outResult.textContent == '0') outResult.textContent = this.textContent;
        else outResult.textContent += this.textContent;
        outResult.textContent = outResult.textContent.toLocaleUpperCase();
        outResult.textContent = outResult.textContent.replace(/^[^0-9]/gm, '0');    
    });
})
clearBtn.addEventListener('click', function() {
    outResult.textContent = 0;
});
deleteBtn.addEventListener('click', function(){
    let res = outResult.textContent.split('');
    res.pop();
    res = res.join('');
    outResult.textContent = res;
    if(!outResult.textContent) outResult.textContent = 0;
});
percentBtn.addEventListener('click', function(){
    let res = +outResult.textContent;
    if(!isNaN(res)) outResult.textContent = res / 100;
});
equalBtn.addEventListener('click', function(){
    let res = outResult.textContent.replaceAll('×', '*');
    res = res.replaceAll('÷', '/');
    res = res.replaceAll('−', '-');
    res = res.replace(/[^0-9]*$/gm, '');
    outResult.textContent = eval(res);
});