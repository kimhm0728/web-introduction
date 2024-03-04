const nameInput = document.getElementById('name_input')
const checkboxs = document.querySelectorAll('input[type="checkbox"]');
    
document.getElementById('save_button').addEventListener('click', () => {
    const name = nameInput.value;
    const count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    alert(name + '님, 저와 ' + count + '개의 취향이 같으시네요!');
});

document.getElementById('cancel_button').addEventListener('click', () => {
    nameInput.value = '';
    checkboxs.forEach((checkbox) => {
        checkbox.checked = false;
    })
});