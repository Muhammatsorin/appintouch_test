import 'react-multi-carousel/lib/styles.css';
import mangoriskyrice from '../assets/img/mangoriskyrice.jpg'

export const MangoRiskyRice = () => {
    return (
        <section className="mango_risky_rice" id="mango_risky_rice">
            <div className="container">
                <div className='row'>
                    <div className='tn_bg'>
                        <img src={mangoriskyrice} />
                        <div className="centered">Mango Risky Rice</div>
                    </div>
                </div>
                <div className="row">
                    <div className='details-container'>
                        <div className='raw-material'>
                            <h1>วัตถุดิบ</h1>
                            <div className='rm-details'>
                                <h3>วัตถุดิบข้าวเหนียวมูน</h3>
                                <p>1. อัมพวา กะทิ 100% 750 มิลลิลิตร </p>
                                <p>2. ข้าวเหนียวเขี้ยวงู 1 กิโลกรัม</p>
                                <p>3. น้ำตาลทรายขาว 2 ถ้วยตวง</p>
                                <p>4. เกลือ 1 ช้อนชา</p>
                                <p>5. ใบเตย สำหรับจัดเสิร์ฟ</p>
                                <br></br>
                                <h3>วัตถุดิบน้ำกะทิราดหน้า</h3>
                                <p>1. อัมพวา กะทิ 100% 500 มิลลิลิตร</p>
                                <p>2. เกลือ 1/2 ช้อนชา</p>
                                <p>3. แป้งข้าวเจ้า 2 ช้อนชา</p>
                                <p>4. มะม่วงสุก ตามต้องการ</p>
                            </div>
                        </div>
                        <div className='method'>
                            <h1>วิธีทำ</h1>
                            <div className='mt-details'>
                                <h3>STEP 1 : นึ่งข้าวเหนียว</h3>
                                <div>
                                    <ul>
                                        <li>ซาวข้าวเหนียวเขี้ยวงู และแช่ทิ้งไว้จนครบสามชั่วโมง</li>
                                        <li>ตั้งหม้อใส่น้ำสำหรับนึ่ง จากนั้นนำผ้าขาวบางมาปูในซึ้ง ตักข้าวเหนียวที่ซาวไว้ใส่ลงไปโดยเว้นตรงกลางเป็นวงกลม แล้วปิดผ้าขาวบางห่อข้าวเหนียวเอาไว้ นึ่งประมาณ 20 นาที</li>
                                        <li>พอครบ 20 นาที ใช้ทัพพีกลับข้าวเหนียวเพื่อให้สุกทั่วถึง แล้วนึ่งต่ออีก 10 นาที</li>
                                    </ul>
                                </div>
                                <h3>STEP 2 : มูนข้าวเหนียว</h3>
                                <div>
                                    <ul>
                                        <li>นำ อัมพวา กะทิ 100% น้ำตาลทราย และเกลือป่น เทผสมให้เข้ากัน</li>
                                        <li>นำไปตั้งไฟอ่อน ๆ เคี่ยวจนน้ำตาลละลายหมด</li>
                                        <li>นำข้าวเหนียวที่นึ่งสุกแล้วใส่ชาม จากนั้นเทน้ำกะทิลงไป คนให้เข้ากัน จากนั้นนำผ้าขาวบางปิดไว้ พักข้าว 30 นาทีเพื่อให้ข้าวเหนียวมูนดูดน้ำกะทิ</li>
                                    </ul>
                                </div>
                                <h3>STEP 3 : ทำน้ำราดกะทิ และจัดเสิร์ฟ</h3>
                                <div>
                                    <ul>
                                        <li>นำอัมพวา กะทิ 100% เกลือ และแป้งข้าวเจ้ามาตั้งไฟอ่อน ๆ หมั่นคนเรื่อย ๆ พอกะทิข้นขึ้น ยกลงพักไว้</li>
                                        <li>ปอกมะม่วงสุกจัดใส่จาน เสิร์ฟพร้อมข้าวเหนียวมูน ราดด้วยน้ำกะทิ เท่านี้ก็พร้อมเสิร์ฟแล้ว</li>
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
