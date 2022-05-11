const switcher = document.getElementById('switcher');
console.log(switcher.checked);

const days = document.querySelectorAll(".days");
console.log(days);

const arr1 = ['20.06 - 08.08','20.06 - 08.08','04.07 - 13.08','04.07 - 13.09 и 22.08 - 12.09'];

const arr2 = ['20.06 - 23.09','20.06 - 28.10','04.07 - 13.08 и 22.08 - 24.09','04.07 - 13.08 и 22.08 - 29.10'];

function sw() {
    if (switcher.checked) {
        for (let i = 0; i < days.length; i++) {
            days[i].innerHTML = arr2[i];
        }
    } else {
        for (let i = 0; i < days.length; i++) {
            days[i].innerHTML = arr1[i];
        }
    }
}


