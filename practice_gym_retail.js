let menu = `        Bán lẻ Phụ kiện & Xử lý Biên lai Dòng lệnh Phòng Gym
1: Nhập và chuẩn hóa mã đơn hàng (Định dạng., độ dài tối thiểu 8 ký tự).
2: Tính tiền và in hóa đơn phụ kiện.
3: Thoát chương trình.`

//Giá các mặt hàng
let shakerPrice = 120000
let glovesPrice = 180000
let strapPrice = 150000

let inputchoice=""
let choice = "" //Lựa chọn menu
let inputCode = "" //Mã đơn hàng người dùng nhập
let cleanInputCode = "" //Mã đơn hàng sau chuẩn hóa
let isOrderCode = false //Mã đơn hàng đã hợp lệ hay chưa
let isVip = false //Trạng thái kahchs vip
let shakerQuantity = 0
let glovesQuantity = 0
let strapQuantity = 0

do {
    console.log(menu)
    inputchoice = prompt(`${menu} \n Nhập lựa chọn của bạn:`)
    choice = inputchoice.trim()
    switch (choice) {
        case "1":
            inputCode = prompt("Nhập mã đơn hàng (ví dụ VIP-SHAKER-STRAP): ")
            cleanInputCode = inputCode.trim().toUpperCase()

            isVip = cleanInputCode.startsWith("VIP-")

            shakerQuantity = 0
            glovesQuantity = 0
            strapQuantity = 0

            for (let i = 0; i < cleanInputCode.length; i++) {
                if (cleanInputCode.slice(i, i + 6) === "SHAKER") {
                    shakerQuantity++
                }
                if (cleanInputCode.slice(i, i + 6) === "GLOVES") {
                    glovesQuantity++
                }
                if (cleanInputCode.slice(i, i + 5) === "STRAP") {
                    strapQuantity++
                }
            }

            if (cleanInputCode.length >= 8 && shakerQuantity + glovesQuantity + strapQuantity > 0) {
                isOrderCode = true;
                console.log("Mã đơn hợp lệ: " + cleanInputCode);
            } else {
                isOrderCode = false;
                console.log("Mã đơn không hợp lệ! (tối thiểu 8 ký tự và có ít nhất 1 phụ kiện)")
            }
            break

        case "2":
            if (!isOrderCode) {
                console.log("Chưa có mã đơn hợp lệ!")
            } else {
                let amountShaker = shakerQuantity * shakerPrice
                let amountGloves = glovesQuantity * glovesPrice
                let amountStrap = strapQuantity * strapPrice
                let totalAmount = amountShaker + amountGloves + amountStrap
                let discount = 0
                if (isVip) {
                    discount = totalAmount * 0.1
                }
                let finalAmount = totalAmount - discount

                console.log("-".repeat(40))
                console.log("        HÓA ĐƠN BÁN LẺ PHỤ KIỆN GYM")
                console.log("-".repeat(40))
                console.log("Mã đơn: " + cleanInputCode)
                console.log("-".repeat(40))
                console.log("Sản phẩm".padEnd(14) + "SL".padStart(4) + "Đơn giá".padStart(10) + "Thành tiền".padStart(12))
                if (shakerQuantity > 0) {
                    console.log("Bình lắc".padEnd(14) + String(shakerQuantity).padStart(4) + shakerPrice.toLocaleString("vi-VN").padStart(10) + amountShaker.toLocaleString("vi-VN").padStart(12))
                }
                if (glovesQuantity > 0) {
                    console.log("Găng tay".padEnd(14) + String(glovesQuantity).padStart(4) + glovesPrice.toLocaleString("vi-VN").padStart(10) + amountGloves.toLocaleString("vi-VN").padStart(12))
                }
                if (strapQuantity > 0) {
                    console.log("Dây kéo lưng".padEnd(14) + String(strapQuantity).padStart(4) + strapPrice.toLocaleString("vi-VN").padStart(10) + amountStrap.toLocaleString("vi-VN").padStart(12))
                }
                console.log("-".repeat(40))
                console.log("Tạm tính".padEnd(28) + totalAmount.toLocaleString("vi-VN").padStart(12))
                console.log("Giảm giá VIP (10%)".padEnd(28) + discount.toLocaleString("vi-VN").padStart(12))
                console.log("TỔNG THANH TOÁN".padEnd(28) + finalAmount.toLocaleString("vi-VN").padStart(12))
                console.log("-".repeat(40))
            }
            break

        case "3":
            console.log("Kết thúc chương trình!")
            break
        default:
            console.log("Lựa chọn không hợp lệ!")
    }
} while (choice !== "3")