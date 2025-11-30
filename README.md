# 🎓 Web Thi Trắc Nghiệm - Phiên bản hoàn chỉnh 2.0

Ứng dụng web thi trắc nghiệm với giao diện hiện đại, hỗ trợ dark mode, có đầy đủ tính năng chấm điểm, lưu lịch sử và nhiều tính năng nâng cao khác.

## ✨ Tính năng nổi bật

### 🎯 Thi trắc nghiệm
- ✅ **Random 60 câu hỏi**: Mỗi lần làm bài sẽ có 60 câu hỏi khác nhau được chọn ngẫu nhiên
- ✅ **Phân bố đều theo chương**: Mỗi chương 10 câu (từ 6 chương: Chương 2-7)
- ✅ **Bộ đếm thời gian**: 50 phút với cảnh báo khi còn 5 phút và 1 phút
- ✅ **Thanh tiến trình**: Hiển thị tiến độ thời gian làm bài với hiệu ứng shimmer
- ✅ **Điều hướng linh hoạt**: Chuyển qua lại giữa các câu hỏi dễ dàng
- ✅ **Danh sách câu hỏi trực quan**: Màu sắc phân biệt trạng thái (đã trả lời/chưa trả lời/đánh dấu)

### 🎨 Giao diện & Trải nghiệm
- ✅ **Dark Mode**: Chế độ tối bảo vệ mắt, có thể bật/tắt bất cứ lúc nào
- ✅ **Giao diện hiện đại**: Thiết kế đẹp mắt với gradient, animation và micro-interactions
- ✅ **Responsive 100%**: Hoạt động mượt mà trên mọi thiết bị (desktop, tablet, mobile)
- ✅ **Hiệu ứng âm thanh**: Âm thanh phản hồi khi tương tác (có thể tắt)
- ✅ **Animation mượt mà**: Transition và animation cho trải nghiệm tốt hơn
- ✅ **Theme tùy biến**: Tự động lưu chế độ dark mode

### 🔥 Tính năng nâng cao
- ✅ **Đánh dấu câu hỏi**: Đánh dấu câu hỏi để xem lại sau (phím tắt: M)
- ✅ **Bộ lọc câu hỏi**: Lọc theo trạng thái (tất cả/đã trả lời/chưa trả lời/đã đánh dấu)
- ✅ **Lưu lịch sử thi**: Tự động lưu kết quả 10 lần thi gần nhất
- ✅ **Xem lại lịch sử**: Xem chi tiết điểm số và thống kê các lần thi trước
- ✅ **Cảnh báo thoát trang**: Tránh mất dữ liệu khi đóng trang nhầm
- ✅ **Panel cài đặt**: Dễ dàng tùy chỉnh âm thanh và giao diện

### 📊 Chấm điểm & Kết quả
- ✅ **Tự động chấm điểm**: Hệ thống tự động chấm điểm dựa trên đáp án đúng
- ✅ **Điểm số thang 10**: Hiển thị điểm theo thang 10 với xếp loại
- ✅ **Thống kê chi tiết**: 
  - Số câu đúng/sai/bỏ qua
  - Phần trăm hoàn thành
  - Thời gian đã sử dụng
  - Xếp loại (Xuất sắc/Giỏi/Khá/Trung bình)
- ✅ **Chi tiết từng câu**: Xem lại từng câu hỏi với:
  - Đáp án đúng được highlight màu xanh
  - Đáp án sai của bạn được highlight màu đỏ
  - Giải thích rõ ràng cho từng đáp án

### ⌨️ Phím tắt
- **← →** : Chuyển câu hỏi trước/sau
- **1-4** : Chọn đáp án A-D
- **M** : Đánh dấu/bỏ đánh dấu câu hỏi hiện tại

## 📁 Cấu trúc file

```
├── index.html                      # File HTML chính với JavaScript
├── styles.css                      # File CSS với dark mode
├── data.js                         # Dữ liệu 867 câu hỏi có đáp án
├── extract_with_answers.py         # Script trích xuất câu hỏi kèm đáp án
├── extraction_log_with_answers.txt # Log quá trình trích xuất
└── README.md                       # File hướng dẫn này
```

## 🚀 Hướng dẫn sử dụng

### Bắt đầu thi:

1. **Mở file `index.html`** trong trình duyệt web
2. Đảm bảo file `data.js` và `styles.css` nằm cùng thư mục
3. **Chọn chế độ giao diện**: Click nút ⚙️ ở góc phải trên để bật/tắt dark mode
4. **Bắt đầu làm bài**: Hệ thống tự động chọn 60 câu ngẫu nhiên
5. **Chọn đáp án**: Click vào đáp án hoặc dùng phím 1-4
6. **Đánh dấu câu khó**: Click nút "🔖 Đánh dấu" hoặc phím M
7. **Điều hướng**: Dùng nút hoặc click trực tiếp vào số câu
8. **Lọc câu hỏi**: Dùng các nút lọc để xem các câu theo trạng thái
9. **Nộp bài**: Click "Nộp bài" khi hoàn thành
10. **Xem kết quả**: Kiểm tra điểm số và xem chi tiết từng câu
11. **Xem lịch sử**: Click nút 📊 để xem các lần thi trước

### Cài đặt:

Click nút **⚙️** ở góc phải trên để:
- Bật/tắt **Dark Mode** (chế độ tối)
- Bật/tắt **Âm thanh** phản hồi

### Xem hướng dẫn:

Click nút **❓** để xem hướng dẫn nhanh về phím tắt và tính năng.

## 📊 Thống kê dữ liệu

### Tổng quan:
- **Tổng số câu hỏi**: 867 câu (từ 6 chương: Chương 2-7)
- **Câu hỏi có đáp án**: 867 câu (100%)
- **Số chương**: 6 (Chương 2, 3, 4, 5, 6, 7)

### Chi tiết theo chương:
- **Chương 2**: 120 câu ✅
- **Chương 3**: 149 câu ✅
- **Chương 4**: 150 câu ✅
- **Chương 5**: 148 câu ✅
- **Chương 6**: 150 câu ✅
- **Chương 7**: 150 câu ✅

### Phân bố trong mỗi đề thi:
- **Mỗi chương**: 10 câu
- **Tổng cộng**: 60 câu
- **Thời gian**: 50 phút

## 🎯 Thang điểm & Xếp loại

### Thang điểm:
- **Điểm tối đa**: 10.0
- **Công thức**: (Số câu đúng / Tổng số câu) × 10

### Xếp loại:
- **🏆 Xuất sắc**: 9.0 - 10.0 điểm
- **🌟 Giỏi**: 8.0 - 8.9 điểm
- **👍 Khá**: 6.5 - 7.9 điểm
- **📚 Trung bình**: 5.0 - 6.4 điểm
- **💪 Cần cố gắng**: < 5.0 điểm

## 💻 Yêu cầu hệ thống

- **Trình duyệt**: Chrome, Firefox, Edge, Safari (phiên bản mới)
- **Internet**: Cần kết nối để tải font Inter từ Google Fonts
- **LocalStorage**: Để lưu lịch sử thi và cài đặt
- **File cần thiết**: `data.js`, `styles.css` phải cùng thư mục với `index.html`

## ⚙️ Tùy chỉnh

### Thay đổi thời gian làm bài:

Trong file `index.html`, tìm dòng:
```javascript
let timeLeft = 50 * 60; // 50 minutes in seconds
```
Thay `50` thành số phút bạn muốn.

### Thay đổi số câu hỏi mỗi chương:

Trong file `index.html`, tìm dòng:
```javascript
const questionsPerChapter = 10; // 10 questions per chapter
```
Thay `10` thành số câu bạn muốn.

### Tùy chỉnh màu sắc:

Trong file `styles.css`, tìm phần `:root`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;
}
```

## 🎨 Dark Mode

Dark mode tự động:
- **Bảo vệ mắt** trong môi trường thiếu ánh sáng
- **Tiết kiệm pin** trên màn hình OLED
- **Tự động lưu** trạng thái dark mode vào localStorage
- **Toggle nhanh** qua panel cài đặt (nút ⚙️)

## 🔊 Âm thanh

Hệ thống âm thanh phản hồi:
- **Click**: Khi chọn đáp án, chuyển câu
- **Cảnh báo**: Khi còn 5 phút và 1 phút
- **Nộp bài**: Khi hoàn thành bài thi
- **Có thể tắt** trong panel cài đặt

## 📝 Lưu trữ dữ liệu

### Dữ liệu được lưu trong LocalStorage:
1. **Cài đặt dark mode**: `darkMode`
2. **Lịch sử thi**: `quizHistory` (10 lần gần nhất)

### Xóa dữ liệu:
- **Xóa lịch sử**: Click "Xóa lịch sử" trong trang lịch sử
- **Xóa tất cả**: Xóa LocalStorage của trang web

## 🐛 Xử lý lỗi

### Không hiển thị câu hỏi:
1. Kiểm tra file `data.js` có tồn tại
2. Mở Console (F12) để xem lỗi
3. Đảm bảo file có cấu trúc đúng

### Không hiển thị đúng giao diện:
1. Kiểm tra file `styles.css` có tồn tại
2. Xóa cache (Ctrl + F5)
3. Kiểm tra kết nối Internet (để tải font)

### Dark mode không hoạt động:
1. Kiểm tra LocalStorage có bật
2. Thử xóa LocalStorage và reload
3. Kiểm tra CSS có đầy đủ biến dark mode

## 📱 Responsive Design

Web hoàn toàn responsive:
- **Desktop**: Giao diện đầy đủ, 4-5 cột trong danh sách câu
- **Tablet**: Giao diện tối ưu, 3-4 cột
- **Mobile**: Giao diện gọn, 2-3 cột, điều khiển cảm ứng

## 🚀 Tính năng tương lai

- [ ] Chế độ ôn tập (xem đáp án ngay)
- [ ] Export kết quả ra PDF
- [ ] Chia sẻ kết quả
- [ ] Thống kê theo chương
- [ ] Chế độ practice (không giới hạn thời gian)
- [ ] Hỗ trợ Chương 1 (khi file PDF được sửa)
- [ ] Multiplayer mode
- [ ] Leaderboard

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Mở Console (F12 > Console)
2. Kiểm tra file `extraction_log_with_answers.txt`
3. Đảm bảo tất cả file trong cùng thư mục
4. Thử reload trang (Ctrl + F5)

## 🎓 Lưu ý quan trọng

- ⚠️ **Chương 1**: File PDF bị lỗi, không thể trích xuất
- ⏰ **Thời gian**: 50 phút, tự động nộp khi hết giờ
- 🔒 **Sau khi nộp**: Không thể chỉnh sửa đáp án
- 🔄 **Làm lại**: Click "Làm lại bài thi" hoặc reload trang
- 💾 **Lưu trữ**: Tối đa 10 lần thi trong lịch sử
- 🎯 **Đề ngẫu nhiên**: Mỗi lần thi có đề khác nhau

## 🏆 Mẹo đạt điểm cao

1. **Đọc kỹ đề**: Đừng vội vàng
2. **Đánh dấu câu khó**: Quay lại sau
3. **Quản lý thời gian**: 50 câu = ~5 phút/câu
4. **Kiểm tra lại**: Dùng danh sách câu hỏi
5. **Lọc câu chưa trả lời**: Để không bỏ sót
6. **Thư giãn**: Làm bài trong môi trường yên tĩnh

## 📄 License

Dự án này được tạo ra cho mục đích học tập và ôn thi.

---

**Phiên bản**: 2.0  
**Cập nhật**: 30/11/2025  
**Tính năng mới**: Dark mode, đánh dấu câu hỏi, lịch sử thi, âm thanh, bộ lọc  
**Tổng số dòng code**: ~1,400 dòng  
**Tổng số câu hỏi**: 867 câu với đáp án đầy đủ
