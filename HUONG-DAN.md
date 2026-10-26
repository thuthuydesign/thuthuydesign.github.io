# Hướng dẫn: Portfolio Thu Thuy

Website portfolio tĩnh, **miễn phí hoàn toàn**:

- **GitHub** lưu toàn bộ website (code + ảnh + nội dung).
- **GitHub Pages** đưa website lên mạng, link dạng `https://<tên-tài-khoản>.github.io`.
- **Pages CMS** (pagescms.org) là giao diện web để sửa nội dung như điền form, không cần đụng code.

Mỗi lần bấm **Save** trong CMS, khoảng 1–2 phút sau website tự cập nhật.

---

## Phần A — Đưa website lên mạng (làm 1 lần)

### A1. Tạo tài khoản GitHub
1. Vào https://github.com/signup, đăng ký bằng email của Thủy.
2. **Tên tài khoản (username) sẽ nằm trong link website.** Nên chọn tên gọn, ví dụ `thuthuydesign`.
   → link sẽ là `https://thuthuydesign.github.io`

### A2. Tạo repository (kho chứa website)
1. Đăng nhập GitHub, bấm **+** (góc trên phải), chọn **New repository**.
2. **Repository name**: đặt **đúng** là `<username>.github.io`, ví dụ `thuthuydesign.github.io`.
   (Đặt tên khác vẫn được, nhưng link sẽ dài hơn: `thuthuydesign.github.io/ten-repo`)
3. Chọn **Public** rồi bấm **Create repository**. Không tick thêm gì.

### A3. Tải code lên bằng GitHub Desktop (dễ nhất)
1. Cài GitHub Desktop: https://desktop.github.com, đăng nhập bằng tài khoản vừa tạo.
2. Vào **File → Add local repository…**, chọn thư mục `03-website/thuthuy-portfolio`.
   - Nếu GitHub Desktop báo "not a Git repository", bấm **create a repository** (giữ nguyên tên, bấm Create).
3. Bấm **Publish repository**:
   - Bỏ tick **Keep this code private**.
   - Nếu đã tạo repo ở bước A2 thì chọn **Repository → Repository settings → Remote** và dán link repo đó.
4. Bấm **Push origin**.

### A4. Bật GitHub Pages
1. Trên trang repo, vào **Settings → Pages**.
2. Mục **Source**: chọn **GitHub Actions**.
3. Mở tab **Actions** để xem tiến độ. Khi có dấu ✅ xanh, website đã chạy ở link `https://<username>.github.io`.

### A5. Kết nối Pages CMS
1. Vào https://app.pagescms.org, chọn **Sign in with GitHub**.
2. Cho phép Pages CMS truy cập repo vừa tạo (chọn **Only select repositories** rồi chọn đúng repo).
3. Chọn repo trong danh sách, chọn nhánh `main`. Menu bên trái sẽ hiện **Dự án** và **Thông tin cá nhân & liên hệ**.

---

## Phần B — Sửa nội dung hằng ngày (qua Pages CMS)

### Thêm dự án mới
1. Vào **Dự án (Projects)**, bấm **Add an entry**.
2. Điền **Tên dự án**, **Mô tả ngắn**, **Loại dự án**, **Khách hàng**, **Vai trò**, **Thời gian**.
3. **Ảnh bìa**: upload một ảnh ngang. Ảnh sẽ hiện ở lưới dự án và đầu trang dự án.
4. **Ảnh chi tiết**: thêm nhiều ảnh, kéo thả để đổi thứ tự.
5. **Nội dung chi tiết**: viết theo khung gợi ý *Concept → Challenge → Process → Result*.
6. **Thứ tự**: số càng nhỏ càng đứng đầu. Tick **Hiện ở trang chủ** nếu muốn đưa dự án lên trang chủ (nên chọn 4 dự án).
7. Bấm **Save**. Khoảng 1–2 phút sau dự án xuất hiện trên website.

### Ẩn hoặc xoá dự án
- **Ẩn tạm**: tick **Ẩn dự án (bản nháp)**. Dữ liệu vẫn giữ, chỉ không hiện trên web.
- **Xoá hẳn**: trong danh sách dự án, bấm **⋯ → Delete**.

### Đổi email, CV, giới thiệu, khách hàng…
Vào **Thông tin cá nhân & liên hệ**, sửa rồi **Save**.

### Mẹo về ảnh
- Ảnh nên **rộng 2000px trở xuống**, định dạng JPG, mỗi ảnh dưới 1 MB (nén bằng https://squoosh.app hoặc https://tinypng.com). Ảnh nặng làm web chậm.
- Ảnh bìa nên theo tỉ lệ **16:10** để lưới dự án đều nhau.
- Ảnh chia sẻ (hiện khi gửi link qua Zalo, Facebook, LinkedIn) nên có kích thước **1200×630**.

### Các ô mới từ phiên bản 2.0

Các ô dưới đây **để trống thì sẽ không hiện** gì trên web, nên Thủy cứ điền dần.

**Trong mỗi dự án:**
| Ô | Hiện ở đâu | Gợi ý cách viết |
|---|---|---|
| **Số liệu nổi bật** | Hàng số lớn ngay dưới ảnh bìa | 2–4 mục, ví dụ `40+` / *Event materials designed*, `5` / *Show seasons* |
| **Vai trò của tôi** | Cột trái, mục "What I did" | Mỗi dòng là một việc Thủy **trực tiếp** làm, ví dụ *Led the identity concept*, *Designed 30+ print & social assets* |
| **The challenge** | Khối nội dung bên phải | Khách hàng cần gì, khó ở đâu (2–4 câu) |
| **The approach** | Ngay sau challenge | Ý tưởng, vì sao chọn hướng đó |
| **The outcome** | Ngay sau approach | Kết quả, nên có con số hoặc phản hồi của khách hàng |
| **Ảnh chi tiết → Chú thích** | Dưới mỗi ảnh và trong chế độ xem phóng to | Ví dụ *Logo & color palette*, *Signage application* |
| **Ảnh chi tiết → Kích thước** | Bố cục thư viện ảnh | `full` = hết chiều ngang; `half` = nửa. **Hai ảnh `half` liền nhau sẽ nằm cạnh nhau** |

Xuống đoạn trong các ô *challenge / approach / outcome*: để **một dòng trống** giữa hai đoạn.

**Trong "Thông tin cá nhân & liên hệ":**
| Ô | Hiện ở đâu |
|---|---|
| **Kinh nghiệm làm việc** | Trang About, dạng dòng thời gian. Công việc **mới nhất để trên cùng** |
| **Lời nhận xét** | Trang chủ (dưới các dự án) và trang About |
| **Số điện thoại / Zalo** | Phần liên hệ: số bấm gọi được và nút Zalo |
| **File CV PDF** | Upload file PDF. Nút "Download résumé" sẽ mở file này thay cho link Google Drive |

---

## Phần C — Xem thử trên máy (không bắt buộc)

Cần cài Node.js. Mở terminal trong thư mục này rồi chạy:

```bash
npm install
npm run dev
```

Sau đó mở http://localhost:4321.

---

## Cấu trúc thư mục (cho người biết code)

| Đường dẫn | Nội dung |
|---|---|
| `src/content/projects/*.md` | Mỗi file là 1 dự án. Tên file chính là link `/work/<tên-file>/` |
| `src/data/site.json` | Thông tin cá nhân, liên hệ, khách hàng, chuyên môn |
| `public/images/` | Toàn bộ ảnh |
| `src/pages/` | Các trang: Home, Work, Project, About, 404 |
| `src/styles/global.css` | Màu sắc, font, bố cục (các biến màu nằm ở đầu file) |
| `.pages.yml` | Cấu hình form của Pages CMS |
| `.github/workflows/deploy.yml` | Tự build và đăng lên GitHub Pages |

---

## ⚠️ Thông tin cần Thủy kiểm tra lại

Các thông tin dưới đây site cũ còn trống, nên đã được **điền tạm**. Thủy kiểm tra và sửa trong CMS:

- **Yoko Onsen**: khách hàng "(Sun Group)" và hạng mục "Logo, Brand Guidelines, Signage, Print".
- **Soul of the Forest**: khách hàng được đổi thành "Flamingo Dai Lai Resort" (site cũ ghi chính tên dự án).
- **Mooncake Packaging**: khách hàng "Flamingo Hotels & Resorts" và vai trò.
- **FLC 18th Anniversary**, **Seasonal & Festive**: vai trò.
- **Art Music Camp**: trang cũ chỉ có chữ mẫu của template, nên mô tả hiện chỉ có 1 câu. **Cần viết thêm.**
- **Số năm kinh nghiệm**: site cũ ghi lẫn "over 10" và "nearly 10". Bản này thống nhất là "10 years / 10+ years".
- **CV**: link hiện mở một *thư mục* Google Drive. Nên đổi thành link **trực tiếp tới file PDF**, quyền "Anyone with the link".
