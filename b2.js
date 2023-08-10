var sinhVien = [
    {
      birthday: "2023-05-10T17:40:23.173Z",
      name: "Marlene Trantow",
      address: "08352",
      phoneNumber: "795.889.7185",
      gender: true,
      id: "1",
    },
    {
      birthday: "2023-05-15T01:32:28.094Z",
      name: "Charlotte Willms PhD",
      address: "527",
      phoneNumber: "1-674-509-4281",
      gender: true,
      id: "2",
    },
    {
      birthday: "2023-05-30T10:08:23.173Z",
      name: "Al Abernathy Sr.",
      address: "2506",
      phoneNumber: "635-220-9829 x7066",
      gender: true,
      id: "3",
    },
    {
      birthday: "2023-12-23T23:39:32.113Z",
      name: "Mr. Danny Beer",
      address: "5713",
      phoneNumber: "1-759-247-5965 x7435",
      gender: true,
      id: "4",
    },
    {
      birthday: "2023-05-05T07:06:55.659Z",
      name: "Douglas Friesen",
      address: "5323",
      phoneNumber: "787-716-6200 x84833",
      gender: false,
      id: "5",
    },
    {
      birthday: "2023-05-22T09:01:22.250Z",
      name: "Derek Konopelski",
      address: "7484",
      phoneNumber: "548-426-8396 x753",
      gender: false,
      id: "6",
    },
    {
      birthday: "2023-05-21T06:38:39.318Z",
      name: "Dr. Melanie Frami",
      address: "3501",
      phoneNumber: "1-970-656-3518",
      gender: false,
      id: "7",
    },
    {
      birthday: "2023-05-24T10:39:47.988Z",
      name: "Homer Lemke V",
      address: "62617",
      phoneNumber: "1-268-477-7594 x22729",
      gender: true,
      id: "8",
    },
    {
      birthday: "2023-05-16T02:21:06.381Z",
      name: "Stacey Wintheiser",
      address: "206",
      phoneNumber: "558.813.2124 x5305",
      gender: true,
      id: "9",
    },
    {
      birthday: "2023-05-17T06:14:53.320Z",
      name: "Dr. Marcella Leannon",
      address: "6703",
      phoneNumber: "289.222.7989",
      gender: false,
      id: "10",
    },
];


// HTML DOM
var noiDungBang = document.querySelector('tbody');
var btnHienThi = document.querySelector(".hThi");
    //thêm
var btnThem = document.querySelector(".btnHTThem");
    // nội dung input
var bDay = document.querySelector("#bDay");
var fName = document.querySelector("#fName");
var dChi = document.querySelector("#dChi");
var phone = document.querySelector("#phone");
var gTinh = document.getElementsByName("gender");
    

// Hiển thị
var taoDong = function (item) {
    var tr = document.createElement(`tr`);
    let date = new Date(item.birthday);
    var ngay = date.getUTCDate();
    var thang = date.getUTCMonth() +1;
    var nam = date.getUTCFullYear();
    let gioiTinh = item.gender ? "Nữ" : "Nam";
    let btnFix = `<button class="btn-warning btnSua" onclick="sua(${item.id})">Sửa</button>
                      <button class="btn-danger btnXoa" onclick="xoa(${item.id})">Xóa</button>`;
    tr.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${gioiTinh}</td><td>${ngay}/${thang}/${nam}</td><td>${item.address}</td><td>${item.phoneNumber}</td><td>${btnFix}</td>`;
    noiDungBang.appendChild(tr);
};
var taoBang = function () {
    noiDungBang.innerHTML = "";
    sinhVien.forEach((item) => {
      taoDong(item);
    });
};

taoBang();

// btn hiển thị
btnHienThi.addEventListener("click", function () {
    switch (btnHienThi.innerHTML) {
      case "Toàn bộ":
        //hiển thị sinh viên nam
        btnHienThi.innerHTML = "Nam";
        noiDungBang.innerHTML = "";
        sinhVien.forEach((item) => {
          if (!item.gender) {
            taoDong(item);
          }
        });
        break;
      case "Nam":
        //hiển thị sinh viên nữ
        btnHienThi.innerHTML = "Nữ";
        noiDungBang.innerHTML = "";
        sinhVien.forEach((item) => {
          if (item.gender) {
            taoDong(item);
          }
        });
        break;
      case "Nữ":
        //hiển thị toàn bộ sinh viên
        btnHienThi.innerHTML = "Toàn bộ";
        taoBang();
    }
});

// Thêm
var idTuTao = sinhVien.length + 1;
    // làm mới giá trị input
function reLoadInput() {
    bDay.value = "";
    fName.value = "";
    dChi.value = "";
    phone.value = "";
    for (value of gTinh) {
      value.checked = false;
    }
}

// btn thêm
btnThem.addEventListener("click", function () {
    var newID = idTuTao.toString();
    sinhVien.push({
      birthday: bDay.value,
      name: fName.value,
      address: dChi.value,
      phoneNumber: phone.value,
      gender: gTinh[1].checked,
      id: newID,
    });

    taoDong(sinhVien[sinhVien.length-1]);
    reLoadInput();
    idTuTao++;
});

//HTML DOM
    //sửa
var btnSua = Array.from(document.querySelectorAll(".btnSua"));
var btnHTSua = document.querySelector(".btnHTSua");
    //xóa
var btnXoa = document.querySelectorAll(".btnXoa")

// Sửa
function suaValue(index) {
    //gán giá trị mới cho object
    sinhVien[index].name = fName.value;
    sinhVien[index].birthday = bDay.value;
    sinhVien[index].address = dChi.value;
    sinhVien[index].phoneNumber = phone.value;
    sinhVien[index].gender = gTinh[1].checked;
    
    //hiển thị giá trị lên bảng theo id
    let date = new Date(sinhVien[index].birthday);
    let ngay = date.getUTCDate();
    let thang = date.getUTCMonth() +1;
    let nam = date.getUTCFullYear();

    let trFix = Array.from(noiDungBang.querySelectorAll('tr'));
    trFix.forEach(tr => {
        let tdFix = tr.querySelectorAll('td');
        if(tdFix[0].innerHTML == `${sinhVien[index].id}`) {
            tdFix[1].innerHTML = `${sinhVien[index].name}`;
            tdFix[2].innerHTML = `${sinhVien[index].gender ? "Nữ":"Nam"}`;
            tdFix[3].innerHTML = `${ngay}/${thang}/${nam}`;
            tdFix[4].innerHTML = `${sinhVien[index].address}`;
            tdFix[5].innerHTML = `${sinhVien[index].phoneNumber}`;
        }
    })
      
    btnThem.setAttribute("style", "display: block;");
    btnHTSua.setAttribute("style", "display: none;");

    reLoadInput();
}

//btn sửa
function sua(id) {
    //hiển thị nút sửa
    btnThem.setAttribute("style", "display: none;");
    btnHTSua.setAttribute("style", "display: block;");

    let index;
    for (index in sinhVien) {
      if (sinhVien[index].id == id) {
        let date = new Date(sinhVien[index].birthday);
        var ngay = date.getUTCDate();
        var thang = date.getUTCMonth()+1;
        var nam = date.getUTCFullYear();
  
        bDay.value = `${nam}-${thang>=10? thang: '0' + thang }-${ngay>=10? ngay: '0'+ngay}`;
        fName.value = sinhVien[index].name;
        dChi.value = sinhVien[index].address;
        phone.value = sinhVien[index].phoneNumber;
        console.log(bDay.value);
  
        if (sinhVien[index].gender) {
          gTinh[1].checked = true;
        } else {
          gTinh[0].checked = true;
        }
        console.log(index);
        break;
      }
    }
    btnHTSua.setAttribute("onclick", `suaValue(${index})`);
}

// Xóa
function xoa(id) {
    for (i in sinhVien) {
      if(sinhVien[i].id == id){
        sinhVien.splice(i, 1);
        let trDel = Array.from(noiDungBang.querySelectorAll('tr'));
        trDel.forEach(tr => {
            let tdDel = tr.querySelectorAll('td');
            if(tdDel[0].innerHTML == `${id}`) {
                tr.remove();
            }
        })
      }
    }
}


localStorage.setItem('test',JSON.stringify({
  birthday: "2023-05-22T09:01:22.250Z",
  name: "Derek Konopelski",
  address: "7484",
  phoneNumber: "548-426-8396 x753",
  gender: false,
  id: "6",
}))

// localStorage.removeItem('1')
var bien = JSON.parse(localStorage.getItem('test'))
console.log(bien.name)
// localStorage.removeItem('test')

bDay.tabIndex = '1';
