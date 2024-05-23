import 'react-multi-carousel/lib/styles.css';
import thang_noodle from '../assets/img/thang_noodle.png'

export const Thang_Noodle = () => {
    return (
        <section className="thang_noodle" id="thang_noodle">
            <div className="container">
                <div className='row'>
                    <div className='tn_bg'>
                        <img src={thang_noodle} />
                        <div className="centered">Thang Noodle</div>
                    </div>
                </div>
                <div className="row">
                    <div className='details-container'>
                        <div className='raw-material'>
                            <h1>วัตถุดิบ</h1>
                            <div className='rm-details'>
                                <p>1. เส้นเล็ก 200 กรัม</p>
                                <p>2. กุยช่าย 50 กรัม</p>
                                <p>3. ถั่วงอก 50 กรัม</p>
                                <p>4. กระเทียมสับ 20 กรัม</p>
                                <p>5. ไข่ไก่ 1 ฟอง</p>
                                <p>6. ซอสปรุงรส 1 ช้อนโต๊ะ</p>
                                <p>7. ซีอิ๊วดำ 1 ช้อนโต๊ะ</p>
                                <p>8. น้ำตาล 1 ช้อนโต๊ะ</p>
                            </div>
                        </div>
                        <div className='method'>
                            <h1>วิธีทำ</h1>
                            <div className='mt-details'>
                                <h3>STEP 1 : ผัดกระเทียม</h3>
                                <div>
                                    <ul>
                                        <li>ตั้งกระทะใส่น้ำมัน ตามด้วยกระเทียมสับพอหอม</li>
                                        <li>นำเส้นเล็กลงผัด เติมน้ำเล็กน้อยเพื่อให้เส้นนิ่ม</li>
                                        
                                    </ul>
                                </div>
                                <h3>STEP 2 : ปรุงรส</h3>
                                <div>
                                    <ul>
                                        <li>เมื่อเส้นเล็กนิ่มได้ที่แล้ว ปรุงรสดด้วยซอสปรุงรส และน้ำตาล</li>
                                        <li>เพิ่มสีสันด้วยซีอิ๊วดำ ใส่กุยช่ายและถั่วงอก</li>
                                        <li>นำข้าวเหนียวที่นึ่งสุกแล้วใส่ชาม จากนั้นเทน้ำกะทิลงไป คนให้เข้ากัน จากนั้นนำผ้าขาวบางปิดไว้ พักข้าว 30 นาทีเพื่อให้ข้าวเหนียวมูนดูดน้ำกะทิ</li>
                                    </ul>
                                </div>
                                <h3>STEP 3 : เสิร์ฟ</h3>
                                <div>
                                    <ul>
                                        <li>ผัดส่วนผสมทุกอย่างเข้ากันดี เติมน้ำมันเล็กน้อยแล้วตอกไข่ไก่ลงไป</li>
                                        <li>ผัดให้เข้ากันแล้วจัดเสิร์ฟ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
