import React, { Component } from 'react'

import './XuatChieu.css';

export default class XuatChieu extends Component {
    render() {
        return (
            <section id="cine-TimetoShow" className="ml-auto mr-auto">
                <div className="card mb-5">
                    <div className="row m-0">
                        <div className="col-12 col-md-1 p-0 border-right">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="border-bottom active" id="BHDtab" data-toggle="pill" href="#BHD" role="tab" aria-controls="BHD" aria-selected="true"><img src="./assets/images/bhd.png" alt /></a>
                                <a className="border-bottom " id="CNStab" data-toggle="pill" href="#CNS" role="tab" aria-controls="CNS" aria-selected="false"><img src="./assets/images/1721cfa98768f300c03792e25ceb0191.png" alt /></a>
                                <a className="border-bottom " id="BETAtab" data-toggle="pill" href="#BETA" role="tab" aria-controls="BETA" aria-selected="false"><img src="./assets/images/77807d96b5048f1d79f45d9d7d3f6a3a.png" alt /></a>
                                <a className="border-bottom " id="DDCtab" data-toggle="pill" href="#DDC" role="tab" aria-controls="DDC" aria-selected="false"><img src="./assets/images/9b240f96a233bb43203ee514a21a6004.png" alt /></a>
                                <a className="border-bottom " id="MegaGStab" data-toggle="pill" href="#MegaGS" role="tab" aria-controls="MegaGS" aria-selected="true"><img src="./assets/images/7b078639bd8fdb09dd83652d207c7b90.png" alt /></a>
                                <a className="border-bottom " id="DCinetab" data-toggle="pill" href="#DCine" role="tab" aria-controls="DCine" aria-selected="false"><img src="./assets/images/9ff07a03371c4a09260309faa32caa55.jpg" alt /></a>
                                <a className="border-bottom " id="Lottetab" data-toggle="pill" href="#Lotte" role="tab" aria-controls="Lotte" aria-selected="false"><img src="./assets/images/404b8c4b80d77732e7426cdb7e24be20.png" alt /></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 p-0 border-right">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="BHD" role="tabpanel" aria-labelledby="BHDtab">
                                    <div className="cineBox m-3 pb-3 border-bottom">
                                        <span className="img"><img src="./assets/images/bhd-star-bitexco-16105952137769.png" alt /></span>
                                        <span className="content">
                                            <p><b className="bhd">BDH Star</b> - Bitexco</p>
                                            <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                            <a href>[chi tiết]</a>
                                        </span>
                                    </div>
                                    <div className="cineBox m-3 pb-3 border-bottom">
                                        <span className="img"><img src="./assets/images/bhd-star-bitexco-16105952137769.png" alt /></span>
                                        <span className="content">
                                            <p><b className="bhd">BDH Star</b> - Vincom Thảo Điền</p>
                                            <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                            <a href>[chi tiết]</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="CNS" role="tabpanel" aria-labelledby="CNStab">
                                    <div className="cineBox m-3 pb-3 border-bottom">
                                        <span className="img"><img src="./assets/images/bhd-star-bitexco-16105952137769.png" alt /></span>
                                        <span className="content">
                                            <p><b className="cns">CNS</b> - Hai Bà Trưng</p>
                                            <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                            <a href>[chi tiết]</a>
                                        </span>
                                    </div>
                                    <div className="cineBox m-3 pb-3 border-bottom">
                                        <span className="img"><img src="./assets/images/bhd-star-bitexco-16105952137769.png" alt /></span>
                                        <span className="content">
                                            <p><b className="cns">CNS</b> - Quốc Thanh</p>
                                            <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                            <a href>[chi tiết]</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="BETA" role="tabpanel" aria-labelledby="BETAtab">
                                    <div className="cineBox m-3 pb-3 border-bottom">
                                        <span className="img"><img src="./assets/images/bhd-star-bitexco-16105952137769.png" alt /></span>
                                        <span className="content">
                                            <p><b className="beta">Beta Cinemas</b> - Quang Trung</p>
                                            <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                            <a href>[chi tiết]</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="DDC" role="tabpanel" aria-labelledby="DDCtab">
                                </div>
                                <div className="tab-pane fade" id="MegaGS" role="tabpanel" aria-labelledby="MegaGStab">
                                </div>
                                <div className="tab-pane fade" id="DCine" role="tabpanel" aria-labelledby="DCinetab">
                                </div>
                                <div className="tab-pane fade" id="Lotte" role="tabpanel" aria-labelledby="Lottetab">
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 p-0">
                            <div id="cineContentShow" className="p-3 text-center">
                                <p className="font-weight-bold">Không có xuất chiếu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
