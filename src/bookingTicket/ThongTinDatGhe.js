import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actHuyVe } from '../redux/action';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className="mt-4">
                    <button disabled className="gheDuocChon"></button><span style={{ fontSize: '20px' }} className="text-light ml-2">Ghế đã đặt</span>
                    <br />
                    <button disabled className="gheDangChon"></button><span style={{ fontSize: '20px' }} className="text-light ml-2">Ghế đang đặt</span>
                    <br />
                    <button disabled className="btn-light ghe ml-0"></button><span style={{ fontSize: '20px'}} className="text-light ml-2">Ghế chưa đặt</span>
                </div>

                <div className="mt-5">
                    <table className="table" border="2">
                        <thead>
                            <tr className="text-white" style={{fontSize:20}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.danhSachGheDangDat.map((gheDangDat, index)=>{
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td><button onClick={()=>{
                                        this.props.dispatch(actHuyVe(gheDangDat.soGhe))
                                    }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot className="text-warning">
                        <tr>
                            <td></td>
                            <td>Tổng Tiền</td>
                            <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                return tongTien+=gheDangDat.gia;
                            },0).toLocaleString()}</td>
                        </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        danhSachGheDangDat: state.bookingTicketReducer.danhSachGheDangDat,
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe);