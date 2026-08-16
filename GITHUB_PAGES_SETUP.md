# GitHub Pages Setup Instructions

## ❌ Vấn đề
GitHub Pages hiện đang báo lỗi 404 vì chưa được cấu hình đúng.

## ✅ Giải pháp

### Bước 1: Vào Repository Settings
1. Vào repository: https://github.com/huongthu495/CODE-main
2. Click **Settings** (tab ngoài cùng bên phải)
3. Click **Pages** ở menu bên trái

### Bước 2: Cấu hình Source
1. Trong mục **Source**, chọn:
   - **Deploy from a branch**
2. **Branch**: chọn `main`
3. **Folder**: chọn `/docs`
4. Click **Save**

### Bước 3: Chờ Deploy
- GitHub sẽ rebuild trang trong vài giây
- Chuyển sang tab **Deployments** để theo dõi
- Khi xong, website sẽ hiển thị tại: https://huongthu495.github.io/CODE-main/

## 📝 Cấu hình hiện tại
```
Repository: huongthu495/CODE-main
Build folder: /docs (chứa index.html + tất cả assets cần thiết)
Branch: main
```

## 🔧 Tại sao lại /docs folder?
- `/docs` là cách tiêu chuẩn GitHub Pages để deploy
- Tất cả file HTML, JS, CSS, assets đã được copy vào folder này
- `.nojekyll` file đảm bảo Jekyll không xử lý lại files
