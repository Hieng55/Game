let boxes = document.querySelectorAll(".boxes ul li");
const olHtml = document.querySelector("ol");
const attention = document.querySelector(".attention");
let text = "";
let textMoney = "";
boxes.forEach((li) => {
    li.addEventListener("click", () => {
        boxes.forEach((reLi) => {
            reLi.classList.remove("active");
        });
        li.classList.add("acti1ve");
        text = li.textContent;
    });
});
const arrayBoxOl = [100, 300, 500, 1000];
arrayBoxOl.forEach((array) => {
    olHtml.innerHTML += `<li><span class="num">${array}</span> <span>$</span></li>`;
});
let payMoney = document.querySelector(".pay-money");
const liElements = olHtml.querySelectorAll("li");
let checkActive = false;
liElements.forEach((li) => {
    li.addEventListener("click", () => {
        liElements.forEach((reLi) => {
            reLi.classList.remove("active");
        });
        li.classList.add("active");
        checkActive = true;
        const numMoney = li.textContent;
        textMoney = numMoney.replace("$", "");
    });
});
let textAtt = document.querySelector("h3");
let numberRandom = document.querySelector(".box-number");
const dice = document.querySelector(".group");
function play() {
    let currentPayMoney = parseInt(payMoney.textContent);
    if (currentPayMoney <= 0) {
        attention.textContent = "Không đủ tiền vui lòng nạp thêm";
        textAtt.innerText = "";
        numberRandom.innerText = "";
        att();
    } else if (text === "") {
        att();
        attention.textContent = "vui lòng chọn Tài hoặc Xỉu";
    } else if (!checkActive) {
        att();
        attention.textContent = "vui lòng chọn mức cược";
    } else if (textMoney > currentPayMoney) {
        att();
        attention.textContent = "Tài khoản không đủ tiền";
        textAtt.innerText = "";
        numberRandom.innerText = "";
    } else {
        dice.classList.add("active");
        setTimeout(() => {
            dice.classList.remove("active");
            const randomNumberOne = Math.floor(Math.random() * 6) + 1;
            const randomNumberTwo = Math.floor(Math.random() * 6) + 1;
            const randomNumberThree = Math.floor(Math.random() * 6) + 1;
            const plusNumber = randomNumberOne + randomNumberTwo + randomNumberThree;
            console.log(plusNumber);
            const arrayRandom = [randomNumberOne, randomNumberTwo, randomNumberThree];
            numberRandom.innerHTML = "";
            arrayRandom.forEach((number) => {
                numberRandom.innerHTML += `
        <li>${number}</li>
        `;
            });
            const textAttention = document.querySelector("h2");
            if (plusNumber > 9) {
                textAttention.textContent = "Tài";
            } else {
                textAttention.textContent = "Xỉu";
            }
            let currentPayMoney = parseInt(payMoney.textContent);
            let moneyToSubtract = parseInt(textMoney);

            if (textAttention.textContent == text) {
                if (moneyToSubtract <= currentPayMoney) {
                    textAtt.textContent = "Bạn đã thắng";
                    currentPayMoney += moneyToSubtract;
                    payMoney.textContent = currentPayMoney;
                }
            } else {
                // Kiểm tra để tránh số âm
                if (moneyToSubtract <= currentPayMoney) {
                    textAtt.textContent = "Bạn đã thua";
                    currentPayMoney -= moneyToSubtract;
                    payMoney.textContent = currentPayMoney;
                    console.log(payMoney.textContent);
                }
            }
        }, 2000);
    }
}
const modal = document.querySelector(".modal");
const bgModal = document.querySelector(".bg-modal");
const modalValue = document.querySelector(".modal input");
function cancel() {
    modal.classList.remove("active");
    bgModal.classList.remove("active");
}
function plus() {
    modal.classList.add("active");
    bgModal.classList.add("active");
}
function att() {
    attention.classList.add("active");
    setTimeout(() => {
        attention.classList.remove("active");
    }, 3000);
}
function submit() {
    modal.classList.remove("active");
    bgModal.classList.remove("active");
    payMoney.textContent = modalValue.value;
    attention.textContent = "Bạn nạp tiền thành công";
    att();
}
function bgModals() {
    bgModal.classList.remove("active");
    modal.classList.remove("active");
}
