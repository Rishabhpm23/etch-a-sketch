const gridBtn = document.getElementById('gridBtn');
    if(gridBtn){
        gridBtn.addEventListener('click', () => {
            const squareNumber = prompt('Enter number of squares per side(max = 100)');
    
            document.documentElement.style.setProperty('--size', squareNumber);

            const gridContainer = document.getElementById('gridContainer');
            gridContainer.innerHTML = '';
             for (let i = 0; i < squareNumber * squareNumber; i++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridContainer.appendChild(gridItem);
                if(gridItem){
                    gridItem.addEventListener('click', () => {
                        gridItem.classList.add('my-colour1');
                    });
                } 
            } 
        })

    }
    // const resetBtn = document.getElementById('resetBtn');
    //     if(resetBtn){
    //         resetBtn.addEventListener('click', () => {
    //             for (let i = 0; i < squareNumber * squareNumber; i++) {
    //                 document.getElementById('gridItem');
    //                 gridItem.classList.toggle('my-colour2');
    //             }
    //         })
    //     }
