let height = document.querySelector('#hei');
let weight = document.querySelector('#wei');
let btrn = document.querySelector('#btn');

btrn.addEventListener('click', () => {

     let heightMe = height.value / 100;
     let bmi = weight.value / (heightMe ** 2);

     bmi < 18.5 ? alert('وزنت  پایین تر از حد نرماله') : bmi > 18.5 && bmi < 24.9 ? alert('وزنت نرماله') : bmi > 25 ? alert('اضافه  وزن داری عزیزم :( ') : bmi > 30 ? alert(':)عددای چرت وارد نکن') : alert('');
})
