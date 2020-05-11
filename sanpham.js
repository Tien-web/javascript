/*Mô tả: Để tạo ra đối tượng, dựa vào các thuộc tính được truyền vào
            input: Các thuộc tính
            output: Một đối tượng
        */
       function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc) {
        var sanPham = new Object();
        /*B1. Gắn các thuộc tính cho đối tượng*/
        sanPham.hinhAnh = hinhAnh;
        sanPham.ten = ten;
        sanPham.giaGoc = giaGoc;
        sanPham.phanTramGiamGia = phanTramGiamGia;
        sanPham.khuVuc = khuVuc;

        /*B2. Viết phương thức cho đối tượng*/
        sanPham.tinhGiaBan = function() {
            //logic xử lý của phương thức
            var giaBan = this.giaGoc * (1 - this.phanTramGiamGia);
            return giaBan;
        }
        return sanPham;
    }