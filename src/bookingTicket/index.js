import React, { Component, Fragment } from 'react';
import './assets/BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachHangGhe from './Data/danhSachGhe.json';
import HangGhe from './hangGhe';

export default class BookingTicket extends Component {

    renderHangGhe = () => {
        return danhSachHangGhe.map((hangGhe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }

    render() {
        return (
            <div className="bookingMovie" style={{ position: "fixed", width: '100%', height: '100%', backgroundImage: "url('./img/DatVeXemPhim/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', overflow:'auto' }}>
                    <div className="container-fluid">
                        <div className="row mb-3">
                            <div className="col-8 text-center">
                                <div style={{fontSize:'45px'}} className="text-warning">Đặt vé xem phim</div>
                                <div className="text-white mt-3" style={{ fontSize: '25px' }}>Màn Hình</div>
                                <div className="mt-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div className="screen"></div>
                                </div>
                                <div className="container bangGhe">
                                {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className="col-4 pt-4">
                                <div style={{ fontSize: '35px' }} className="display-4 text-warinng text-white mt-5">Danh Sách Ghế Bạn Chọn</div>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
