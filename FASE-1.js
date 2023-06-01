 const selectedBtns = [];
    let correctConnections = 0;
    
    document.getElementById('btn1').addEventListener('click', function() {
      selectBtn('btn1');
    });
    
    document.getElementById('btn2').addEventListener('click', function() {
      selectBtn('btn2');
    });
    
    document.getElementById('btn3').addEventListener('click', function() {
      selectBtn('btn3');
    });
    
    document.getElementById('btn4').addEventListener('click', function() {
      selectBtn('btn4');
    });
    
    document.getElementById('btn5').addEventListener('click', function() {
      selectBtn('btn5');
    });
    
    document.getElementById('btn6').addEventListener('click', function() {
      selectBtn('btn6');
    });
    
    function selectBtn(btnId) {
      if (selectedBtns.length === 0) {
        selectedBtns.push(btnId);
        console.log('Botão de baixo selecionado: ' + btnId);
      } else if (selectedBtns.length === 1) {
        const bottomBtn = document.getElementById(selectedBtns[0]);
        const topBtn = document.getElementById(btnId);
        
        if (bottomBtn && topBtn) {
          if (bottomBtn === document.getElementById('btn4') && topBtn === document.getElementById('btn3')) {
            // Conexão correta: btn4 com btn3
            bottomBtn.classList.add('connected');
            topBtn.classList.add('connected');
            console.log('Conexão correta: ' + selectedBtns[0] + ' com ' + btnId);
            correctConnections++;
          } else if (bottomBtn === document.getElementById('btn5') && topBtn === document.getElementById('btn1')) {
            // Conexão correta: btn5 com btn1
            bottomBtn.classList.add('connected');
            topBtn.classList.add('connected');
            console.log('Conexão correta: ' + selectedBtns[0] + ' com ' + btnId);
            correctConnections++;
          } else if (bottomBtn === document.getElementById('btn6') && topBtn === document.getElementById('btn2')) {
            // Conexão correta: btn6 com btn2
            bottomBtn.classList.add('connected');
            topBtn.classList.add('connected');
            console.log('Conexão correta: ' + selectedBtns[0] + ' com ' + btnId);
            correctConnections++;
          } else {
            // Conexão incorreta
            bottomBtn.classList.add('incorrect');
            topBtn.classList.add('incorrect');
            console.log('Conexão incorreta: ' + selectedBtns[0] + ' com ' + btnId);
            
            setTimeout(function() {
              bottomBtn.classList.remove('incorrect');
              topBtn.classList.remove('incorrect');
              selectedBtns.length = 0;
              
              const connectedBtns = document.getElementsByClassName('connected');
              while (connectedBtns.length > 0) {
                connectedBtns[0].classList.remove('connected');
              }
              
              correctConnections = 0;
            }, 1000);
          }
          
          selectedBtns.length = 0;
          if (correctConnections === 3) {
            const message = document.getElementById('message');
            message.style.display = 'block';
            console.log('Parabéns, você ganhou o jogo!');
          }
        }
      }
    }