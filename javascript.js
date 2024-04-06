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
                    gridItem.addEventListener('mouseover', () => {
                        gridItem.classList.add('my-colour');
                    });
                }
            } 
        })

    }
