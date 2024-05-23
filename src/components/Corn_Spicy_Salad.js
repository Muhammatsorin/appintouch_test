import 'react-multi-carousel/lib/styles.css';
import cornspicysalad from '../assets/img/cornspicysalad.jpg'

export const CornSpicySalad = () => {
    return (
        <section className="corn_spicy_salad" id="corn_spicy_salad">
            <div className="container">
                <div className='row'>
                    <div className='tn_bg'>
                        <img src={cornspicysalad} />
                        <div className="centered">Corn Spicy Salad</div>
                    </div>
                </div>
                <div className="row">
                    <div className='details-container'>
                        <div className='raw-material'>
                            <h1>วัตถุดิบ</h1>
                            <div className='rm-details'>
                                <p>1. กุ้งสด 15-20 ตัว</p>
                                <p>2. มะม่วงดิบ 1-2 ลูก</p>
                                <p>3. ข้าวโพดหวาน 200 กรัม</p>
                                <p>4. หอมแดง 100 กรัม</p>
                                <p>5. พริกแดงสับ 40 กรัม</p>
                                <p>6. ขึ้นฉ่าย 30 กรัมct</p>
                                <p>7. มะนาว 50 กรัม</p>
                                <p>8. น้ำปลาร้า 50 มิลลิลิตร</p>
                                <p>9. น้ำปลา 50 มิลลิลิตร</p>
                                <p>10. น้ำตาลปี๊บ 30 กรัม</p>
                            </div>
                        </div>
                        <div className='method'>
                            <h1>วิธีทำ</h1>
                            <div className='mt-details'>
                                <h3>STEP 1 : ทำน้ำยำ</h3>
                                <div>
                                    <ul>
                                        <li>ผสมน้ำปลา น้ำปลาร้า พริกแดงสับ น้ำตาลปี๊บให้ละลายเข้าด้วยกัน</li>
                                        <li>เพิ่มรสเปรี้ยวด้วยมะนาว</li>
                                    </ul>
                                </div>
                                <h3>STEP 2 : ผสมยำ</h3>
                                <div>
                                    <ul>
                                        <li>เมื่อได้น้ำยำแล้ว ใส่กุ้งสด ข้าวโพดหวาน หอมแดง ขึ้นฉ่าย</li>
                                        <li>คลุกเคล้าให้เข้ากัน</li>
                                    </ul>
                                </div>
                                <h3>STEP 3 : ฝานมะม่วง</h3>
                                <div>
                                    <ul>
                                        <li>ฝานมะม่วงให้เป็นเส้นยาว และคลุกเคล้าให้เข้ากันอีกครัง</li>
                                        <li>จัดจ้านก็พร้อมเสิร์ฟแล้ว</li>
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
