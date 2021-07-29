import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { actDatVe } from '../redux/action';

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }

            let cssGheDangChon = '';
            let indexGheDangChon = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe)
            if(indexGheDangChon !== -1){
                cssGheDangChon = 'gheDangChon';
            }

            return <button onClick={()=>{
                this.props.datGhe(ghe)
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangChon} `} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
                return <button disabled className="rowNumber">
                    {hang.soGhe}
                </button>
            })
        
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className="ml-3">
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <Fragment>{this.props.hangGhe.hang} {this.renderGhe()}
            </Fragment>
        }
    }

    render() {
        return (
            <div className="text-light text-left ml-4 mt-4">
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.bookingTicketReducer.danhSachGheDangDat,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        datGhe: (ghe) => {
            dispatch(actDatVe(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HangGhe);