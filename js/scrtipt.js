var loginBtn = document.getElementById('login');
var signinBtn = document.getElementById('signin');
var btnCart = document.querySelector('.button-cart');
let courses = {
    'KH1': {
        'Tieude': 'Khóa học lập trình python cho người mới bắt đầu',
        "Mota": "Nắm vững các nguyên tắc cơ bản của Python trong khi làm việc trên các trường hợp sử dụng khác nhau theo các bước đơn giản",
        "Giaovien":"Avinash Jain, The Codex",
        "Hinhanh":"./images/courses/1.jpg",
        "Giaban":"999.000đ"
    },
    'KH2': {
        'Tieude': 'Khóa học ReactJS cho người mới bắt đầu',
        "Mota": "Lý thuyết tinh gọn, đi thẳng vào vấn đề và vận dụng vào code dự án thực tế",
        "Giaovien":"Hau Nguyen",
        "Hinhanh":"./images/courses/2.jpg",
        "Giaban":"450.000đ"
    },
    'KH3': {
        'Tieude': 'Khóa học Javascript cho người mới bắt đầu',
        "Mota": "Hỗ trợ các bạn bước đầu vào ngành lập trình một cách đơn giản và dễ hiểu nhất",
        "Giaovien":"Khoa Nguyen",
        "Hinhanh":"./images/courses/3.jpg",
        "Giaban":"750.000đ"
    },
    'KH4': {
        'Tieude': 'Lập trình iOS với SwiftUI',
        "Mota": "SwiftUI từ cơ bản tới nâng cao",
        "Giaovien":"My Vo",
        "Hinhanh":"./images/courses/4.jpg",
        "Giaban":"350.000đ"
    },
    'KH5': {
        'Tieude': 'Thành thạo Docker trong 8 giờ - 2022',
        "Mota": "8 giờ học hiệu quả với 9 bài tập, 30 video thực hành và 35 video bài giảng",
        "Giaovien":"Hiep Nguyen",
        "Hinhanh":"./images/courses/5.jpg",
        "Giaban":"600.000đ"
    },
    'KH6': {
        'Tieude': 'Học máy (Machine learning) và ứng dụng',
        "Mota": "Tìm hiểu về các thuật toán Machine learning cơ bản và phương pháp xây dựng mô hình Machine learning",
        "Giaovien":"Da Hoang Huu",
        "Hinhanh":"./images/courses/6.jpg",
        "Giaban":"1.000.000đ"
    },
}


//* Dùng chung cho các trang
loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "dangnhap.html";
})
signinBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "dangky.html";
})
btnCart.addEventListener('click', e => {
    e.preventDefault();
    window.location.href='giohang.html'
})



//* Trang chủ
if (window.location.pathname == '/trangchu.html')
{
    var listCourses = document.querySelectorAll('.trangchu-khoahoc');
    // Hiển thị các khóa học trên trang chủ
    listCourses.forEach(element => {
        if (true)
        {
            // TODO: Web hiển thị tiếng Việt
            document.querySelector(`#${element.id} .trangchu-khoahoc-hinhanh`).src=courses[element.id].Hinhanh;
            document.querySelector(`#${element.id} .trangchu-khoahoc-tieude`).innerText=courses[element.id].Tieude;
            document.querySelector(`#${element.id} .trangchu-khoahoc-giaovien`).innerText=courses[element.id].Giaovien;
            document.querySelector(`#${element.id} .trangchu-khoahoc-giaban`).innerText=courses[element.id].Giaban;
            
        }
        else
        {
            // TODO: Web hiển thị tiếng Anh
    
        }
    });
    //* Lắng nghe sự kiện click trên các khóa học
    listCourses.forEach(element => {
        element.addEventListener('click', function() {
            localStorage.setItem("ID", this.id);
        })
    });
}


//* Chi tiết khóa học
if (window.location.pathname == '/chitietkhoahoc.html')
{
    //* Hiển thị thông tin chi tiết khóa học
    document.querySelector('.ctkh-heading').innerText=courses[localStorage.ID].Tieude;
    document.querySelector('.ctkh-sub-heading').innerText=courses[localStorage.ID].Mota;
    document.querySelector('.ctkh-giaovien-ten').innerText=courses[localStorage.ID].Giaovien;
    document.querySelector('.ctkh-dathang-giaban').innerText=courses[localStorage.ID].Giaban;
    document.querySelector('.ctkh-dathang-hinhanh').setAttribute("src", courses[localStorage.ID].Hinhanh);
    
    //* Thêm các khóa học vào giỏ hàng
    let btnAddCart = document.querySelector('.btn-addcart');
    btnAddCart.addEventListener('click', () => {
        if (localStorage.cartList === undefined)
        {
            let coursesID = [localStorage.ID];
            localStorage.cartList = JSON.stringify(coursesID);
            alert('Bạn đã thêm 1 khóa học vào giỏ hàng');
        }
        else if (JSON.parse(localStorage.cartList).includes(localStorage.ID)) 
        {
            alert('Khóa học đã có sẵn trong giỏ hàng');
        }
        else
        {
            let coursesID = JSON.parse(localStorage.cartList);
            coursesID.push(localStorage.ID);
            localStorage.cartList = JSON.stringify(coursesID);
            alert('Bạn đã thêm 1 khóa học vào giỏ hàng');
        }
    })
}

//* Giỏ Hàng
if (window.location.pathname == '/giohang.html')
{
    function Themkhoahoc() {

    }
    function Xoakhoahoc() {

    }
    function Xoadonhang() {
        document.querySelector('.giohang-donhang').remove();
        document.querySelector('.giohang-dskh').innerHTML = '<h2>Không có khóa học nào trong giỏ hàng!</h2>'
        localStorage.clear();
    }
    if (localStorage.cartList !== undefined)
    {
        //* Giỏ hàng có hàng
        //* thêm khóa học vào giỏ hàng
        var listCartCourses = JSON.parse(localStorage.cartList);
        var cartElement = '<div class="row justify-content-center align-items-start g-2 pb-2 mb-5 border-bottom border-secondary"><div class="col-md-4"><img src="" alt="" class="giohang-hinhanh"></div><div class="col-md-6"><h4 class="giohang-tieude text-start"></h4><p class="giohang-giaovien">Giao viên: </p></div><div class="col text-end pe-3"><a href="#" class="giohang-xoa">Xóa</a></div><div class="col text-end"><p class="giohang-gia fw-bold fs-6"></p></div></div>';
        document.querySelector('.giohang-dskh').innerHTML = cartElement.repeat(listCartCourses.length);
        var gioHangTieuDe = document.querySelectorAll('.giohang-tieude');
        var gioHangGiaban = document.querySelectorAll('.giohang-gia');
        var gioHangGiaovien = document.querySelectorAll('.giohang-giaovien');
        var gioHangHinhAnh = document.querySelectorAll('.giohang-hinhanh');
        var gioHangBtnXoa = document.querySelectorAll('.giohang-xoa');
        for (let i = 0; i < listCartCourses.length; i++) {
            gioHangTieuDe[i].innerText = courses[listCartCourses[i]].Tieude;
            gioHangGiaban[i].innerText = courses[listCartCourses[i]].Giaban;
            gioHangGiaovien[i].innerText = courses[listCartCourses[i]].Giaovien;
            gioHangHinhAnh[i].src = courses[listCartCourses[i]].Hinhanh;
            gioHangBtnXoa[i].setAttribute('name', listCartCourses[i]);
        }

        //* Tính tổng tiền hàng
        var gioHangTongTien = 0;
        for (let i = 0; i < listCartCourses.length; i++) {
            gioHangTongTien += Number.parseInt(courses[listCartCourses[i]].Giaban.replace(".",""));
        }
        document.querySelector('.giohang-tongtien').innerText = gioHangTongTien + "đ";

        //* Xóa khóa học khỏi giỏ hàng
        var btnRemoveCarts = document.querySelectorAll('.giohang-xoa');
        btnRemoveCarts.forEach(e => {
            e.addEventListener('click', (event) => {
                //* Xóa sản phẩm khỏi giỏ hàng
                event.path[2].remove();
                listCartCourses = listCartCourses.filter(item => item != event.target.name);
                localStorage.cartList = JSON.stringify(listCartCourses);
                
                //* Trừ tổng tiền hàng
                gioHangTongTien -= Number.parseInt(courses[event.target.name].Giaban.replace(".",""));
                document.querySelector('.giohang-tongtien').innerText = gioHangTongTien + "đ";
                
                //* Khi không còn sản phẩm nào trong giỏ hàng
                if (document.querySelector(".giohang-dskh").childNodes.length == 0)
                {
                    Xoadonhang();
                }
            })
        })
    }
    else
    {
        //* Giỏ hàng rỗng
        //* Không hiển thị tổng tiền hàng
        Xoadonhang();
    }
}

