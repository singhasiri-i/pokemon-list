// ต้องการสร้างให้ตัวละคร pokemon แสดงในหน้าเว็บ โดยที่ไม่แก้ไขในไฟล์ html

// เริ่มจาก select section ใหญ่ที่เป็น container ก่อน


const container = document.querySelector('#container')

for (let i = 1; i < 151; i++) {
    // จากนั้นเขียน loop เนื่องจากไฟล์ภาพที่จะเอามาใช้มีทั้งหมด 150 ไฟล์

    // ใต้ loop นี้ให้มันเริ่มวนสร้าง div โดยให้แต่ละ div มีทั้ง label และ img
    // ตั้งชื่อ class ว่า "pokemon"
    // เนื่องจาก div จะ display เป็น block เราเปลี่ยนให้มันเป็น inline-block
    // สร้าง label <span> ที่กำกับแต่ละ img ว่าเป็นตัวที่เท่าไหร่
    // เราวน i เป็นตัวเลขเริ่มจาก 1 - 150 เพื่อเอามาใช้เป็น label "#ตัวเลข"

    const div = document.createElement('div')
    div.classList.add("pokemon")
    div.style.display="inline-block"
    const label = document.createElement('span')
    label.innerText = `#${i}`

    // สร้าง <img>
    // โดยให้รัน url ตั้งแต่เลข 1 - 150 โดยใช้ template literal

    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${i}.png`
    
    // appendChild ทั้งตัว <img> และ <span> เข้าไปใต้ div

    div.appendChild(newImg)
    div.appendChild(label)

    // appendChild div ไว้ใต้กล่อง container ใหญ่

    container.appendChild(div)

}

