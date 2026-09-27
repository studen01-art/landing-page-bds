# Vinhomes Grand Park — Real Estate Landing Page

Landing page bất động sản tĩnh giới thiệu dự án **Vinhomes Grand Park — Thành phố Thủ Đức**, được xây dựng dựa trên đặc tả kỹ thuật chi tiết tại `prompt/PROJECT_SPEC.md` và `prompt/PROMPT.md`.

## 📁 Cấu trúc thư mục

```text
landing-page-bds/
├── index.html               # Trang chính chứa toàn bộ cấu trúc semantic HTML5
├── css/
│   └── style.css            # Tùy biến giao diện (màu sắc, typography, card, hover effect)
├── js/
│   └── main.js              # Xử lý tương tác frontend (scroll, navbar toggle, form demo)
├── prompt/                  # Tài liệu đặc tả và hướng dẫn gốc
│   ├── PROJECT_SPEC.md
│   ├── PROMPT.md
│   └── AGENTS.md
└── README.md                # Tài liệu hướng dẫn sử dụng và bàn giao
```

---

## 🎨 Nhận diện thiết kế & Màu sắc chuẩn hóa

- **Nền chính (Main Background):** `#f2f2f2`
- **Màu văn bản & Tiêu đề chính (Primary Text):** `#2d2d86` (Tone xanh navy sang trọng của Vinhomes)
- **Văn bản bổ trợ (Supporting Text):** `#4a5568` / `#555e6d` (Xám trung tính đậm)
- **Thẻ nội dung (Cards):** Nền trắng `#ffffff`, bo tròn góc (`border-radius: 16px`), đổ bóng êm (`box-shadow: 0 10px 30px rgba(45, 45, 134, 0.08)`)
- **Nút hành động (CTA Button):** Màu vàng kim sang trọng `#c59b27` kèm hiệu ứng hover mượt mà.

---

## 🚀 Các tính năng chính đáp ứng yêu cầu

1. **Header / Navbar:**
   - Sử dụng Bootstrap 5 responsive navbar (`navbar-expand-lg`), cố định phía trên khi cuộn trang (`fixed-top` kết hợp backdrop-filter blur).
   - Logo thương hiệu **Vinhomes Grand Park**.
   - Các liên kết điều hướng: *Trang chủ*, *Tiện ích*, *Chính sách*, *Liên hệ* + Nút hành động nhanh *Nhận tư vấn*.
   - Tự động đóng menu trên mobile khi người dùng bấm vào các mục điều hướng.

2. **Hero Section (Hai cột trên Desktop, một cột trên Mobile):**
   - **Bên trái (Desktop):** Tiêu đề cuốn hút *"Sống chuẩn thượng lưu giữa tâm điểm phía Đông TP.HCM"*, đoạn mô tả dự án ngắn gọn, nút CTA chính *"Nhận thông tin dự án"*, hotline nhanh và các chỉ số nổi bật (271ha, 36ha công viên, All-in-one).
   - **Bên phải (Desktop):** Hình ảnh biệt thự nghỉ dưỡng sang trọng độ phân giải cao từ CDN ổn định, có gắn nhãn chứng nhận "Đô thị sinh thái kiểu mẫu".
   - Tự động xếp chồng dọc (stack) tự nhiên trên thiết bị di động.

3. **Features Section (Chính xác 3 Thẻ Đặc Quyền):**
   - **Đặc quyền 1:** *Lối sống thượng lưu* — Mô tả không gian sống biệt lập chuẩn resort 5 sao giữa lòng đô thị.
   - **Đặc quyền 2:** *Tiện ích tối ưu* — Hệ sinh thái All-in-one Vingroup (Vincom Mega Mall, Vinmec, Vinschool, VinBus, công viên 36ha).
   - **Đặc quyền 3:** *Pháp lý nhanh gọn* — Hồ sơ pháp lý minh bạch và cam kết tiến độ uy tín từ chủ đầu tư Vingroup.
   - Mỗi thẻ có một hình ảnh minh họa độc lập, kích thước thẻ đồng nhất và hiệu ứng nâng thẻ khi di chuột (`hover`).

4. **Chính sách ưu đãi & Form nhận thông tin (Frontend-only):**
   - Hỗ trợ lãi suất 0%, chiết khấu thanh toán linh hoạt, quà tặng cư dân.
   - Form đăng ký nhận thông tin và bảng giá với kiểm tra hợp lệ dữ liệu (validation) bằng Vanilla JavaScript, thông báo hoàn tất trực tiếp trên giao diện mà không cần backend server.

5. **Footer:**
   - Thương hiệu Vinhomes Grand Park, bản quyền & copyright.
   - Thông tin liên hệ giữ chỗ (Hotline: `09xx xxx xxx`, Email: `contact@example.com`, Địa chỉ tại TP. Thủ Đức).
   - Các liên kết mạng xã hội và hệ sinh thái Vingroup.

---

## 💻 Cách mở & kiểm tra dự án

Dự án là trang web tĩnh 100%, không yêu cầu build tool hay backend server.

- **Cách 1:** Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari).
- **Cách 2:** Sử dụng Live Server trên VS Code hoặc chạy lệnh cục bộ:
  ```powershell
  npx serve .
  # hoặc
  python -m http.server 8000
  ```
  Sau đó truy cập `http://localhost:8000`.
