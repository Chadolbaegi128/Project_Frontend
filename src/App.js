import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/LogIn';
import MyPageUserMain from './pages/MypageUser/MyPageUserMain';
import MyPageUserDelete from './pages/MypageUser/MyPageUserDelete';
import MyPageUserInfo from './pages/MypageUser/MyPageUserInfo';
import MyPageUserOrderstatus from './pages/MypageUser/MypageUserOrderstatus';
import MyPageAdminMain from './pages/MyPageAdmin/MyPageAdminMain';
import MyPageAdminCategoryEdit from './pages/MyPageAdmin/MyPageAdminCategoryEdit';
import MyPageAdminOrderstatusEdit from './pages/MyPageAdmin/MyPageAdminOrderstatusEdit';
import MyPageAdminProductEdit from './pages/MyPageAdmin/MyPageAdminProductEdit';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import OrderComplete from './pages/OrderComplete';
import Header from './pages/Home/Header';

function App() {

  return (
    <>
      {/* home → `/`
        회원가입 → `/`
        로그인 → `/login`
        마이페이지 → `/my_page`
          메인 → `/my_page`
          탈퇴 → `/my_page/delete_accounts`
          회원정보관리 → `/my_page/userinfo`
          주문조회 → `/my_page/order_list`
        관리자페이지 -> `./admin`
          메인 -> `./admin`
          카테고리 -> `./admin/admin_category`
          주문조회 -> `./admin/admin_order`
          상품관리 -> `./admin/admin_product`
        제품 상세 페이지 → `/detail/:id`
        장바구니 → `/cart`
        주문 → `/order`
        주문완료 → `/ordercomplete` */}
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route element={<Header />}>
            <Route path='/join' element={<Join />} />
            <Route path='/login' element={<Login />} />
            <Route path='/my_page' element={<MyPageUserMain />} />
            <Route path='/my_page/delete_accounts' element={<MyPageUserDelete />} />
            <Route path='/my_page/userinfo' element={<MyPageUserInfo />} />
            <Route path='/my_page/order_list' element={<MyPageUserOrderstatus />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
            <Route path='/ordercomplete' element={<OrderComplete />} />
          </Route>
          <Route path='/admin' element={<MyPageAdminMain />} />
          <Route path = '/admin/admin_category' element={<MyPageAdminCategoryEdit />}/>
          <Route path='/admin/admin_order' element={<MyPageAdminOrderstatusEdit />} />
          <Route path='/admin/admin_product' element={<MyPageAdminProductEdit />}/>          
        </Routes>
      </Router>
    </>
  );
}

export default App;